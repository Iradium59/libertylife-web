"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getGuilds } from "@/app/api/discord/guild";
import discordRequest from "@/app/api/discord/discordRequest";

export default async function Test() {
    // Récupère la session utilisateur, ce qui inclut le token JWT (caché) du serveur
    const session = await getServerSession(authOptions);

    console.log(session);
    
    if (!session) {
        return (
            <div>
                <h1>Not logged in</h1>
            </div>
        );
    }

    // Récupération de l'access token depuis la session côté serveur
    const accessToken = session?.accessToken; // <-- On récupère l'access token depuis le token JWT
    console.log("Access Token:", accessToken);

    const guilds = await getGuilds(accessToken);
    console.log(guilds);

    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}
