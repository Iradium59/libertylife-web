import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

const scopes = ['identify', 'email', 'guilds', 'guilds.members.read', 'guilds.join'];

export const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: { params: { scope: scopes.join(' ') } },
        })
    ],
    callbacks: {
        async jwt({ token, user, account }: any) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.expiresAt = Date.now() + account.expires_in * 1000; 
            }
    
            if (token.expiresAt && Date.now() > token.expiresAt) {
                try {
                    const response = await fetch('https://discord.com/api/v10/oauth2/token', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({
                            'client_id': process.env.DISCORD_CLIENT_ID as string,
                            'client_secret': process.env.DISCORD_CLIENT_SECRET as string,
                            'refresh_token': token.refreshToken,
                            'grant_type': 'refresh_token',
                        }),
                    });
    
                    const refreshedTokens = await response.json();
                    token.accessToken = refreshedTokens.access_token;
                    token.refreshToken = refreshedTokens.refresh_token;
                    token.expiresAt = Date.now() + refreshedTokens.expires_in * 1000;
                } catch (error) {
                    console.error('Erreur lors du rafraîchissement du token', error);
                }
            }
            return token;
        },

        async session({ session, token }: any) {
;
            session.user = {
                name: token.name,
                email: token.email,
                image: token.picture,
                id: token.sub,
            };

            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
