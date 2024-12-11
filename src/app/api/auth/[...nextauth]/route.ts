import NextAuth from "next-auth/next";
import Discord from "next-auth/providers/discord";

const scopes = ['identify', 'email', 'guilds', 'guilds.members.read', 'guilds.join'];


const handler = NextAuth({
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: {params: {scope: scopes.join(' ')}},
        })
    ],
    callbacks: {
        async jwt({ token }: any) {
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
})


export { handler as GET, handler as POST };
