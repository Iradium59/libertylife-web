import discordRequester from '@/app/api/discord/discordRequest';

export async function getUserInfo<T>(accessToken: string): Promise<any[]> {
    try {
        const userInfo = await discordRequester<T>(`guilds/${process.env.GUILD_ID as string}/members/@me`, accessToken);

        console.log(userInfo);

        return userInfo;

    } catch (error) {
        console.error("Error while getting user roles:", error);
        return [];
    }

}
    