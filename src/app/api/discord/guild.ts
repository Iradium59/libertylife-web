import discordRequester from '@/app/api/discord/discordRequest';

export async function getGuilds<T>(accessToken: string): Promise<any[]> {
    try {
        const guilds = await discordRequester<T>('users/@me/guilds', accessToken, false);
        
        if (!Array.isArray(guilds)) {
            console.error("No guilds found or invalid response");
            return [];
        }

        return guilds;
    } catch (error) {
        console.error("Error while getting guilds:", error);
        return [];
    }
}


export async function checkIsInDiscord(accessToken: string): Promise<boolean> {
    try {
        const guildList: any[] = await getGuilds(accessToken);
        
        if (!guildList || guildList.length === 0) {
            return false;
        }

        const guildId = process.env.GUILD_ID as string;
        
        return guildList.some((guild: any) => guild.id === guildId);

    } catch (error) {
        console.error("Error while checking if user is in discord:", error);
        return false;
    }
}