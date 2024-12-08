import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"

const scopes = ['identify', 'email', 'guilds', 'guilds.members.read', 'guilds.join'];

console.log("test", process.env.DISCORD_CLIENT_ID, process.env.DISCORD_CLIENT_SECRET)

const handler = NextAuth({
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
            authorization: {params: {scope: scopes.join(' ')}},
        })
    ],
})

export { handler as GET, handler as POST }