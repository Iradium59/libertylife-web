import axios from 'axios';

export default async function discordRequest<T>(endpoint: string
): Promise<T> {
    const origin = process.env.DISCORD_API_ORIGIN as string;
    const url = `${origin}/${endpoint}`;

    const headers = {
        'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
    }


    const makeRequest = async (): Promise<T> => {
        try {
            const response = await axios.get(url, { headers });
            return response.data; // Retourner seulement les données
        } catch (error: any) {
            // Si c'est une erreur 429 (Rate Limiting)
            if (error.response && error.response.status === 429) {
                const retryAfter = error.response.headers['retry-after'];
                const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 5000; // Temps d'attente, par défaut 5 secondes

                console.error(`Rate limited. Retrying after ${waitTime / 1000} seconds.`);
                
                // Attends le temps spécifié dans Retry-After
                await new Promise(resolve => setTimeout(resolve, waitTime));

                // Refait la requête après le délai
                return makeRequest();
            } else {
                // Autres erreurs
                console.error("Error during Discord API request:", error);
                throw error; // Relancer l'erreur pour la gestion en amont
            }
        }
    };

    // Faire la requête initiale
    return makeRequest();
}
