import axios from 'axios';

export async function askDiscord(accessToken : string) {
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

    // console.log(accessToken);

    // const api = axios.get(`${process.env.DISCORD_API_URL as string}//users/@me/guilds`, {
    //     headers,
    // });

    // console.log(api);
}

