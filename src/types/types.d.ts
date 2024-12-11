
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXTAUTH_URL?: string;
            NEXTAUTH_SECRET?: string;
            AUTH_SECRET?: string;
            AUTH_URL?: string;
            VERCEL?: "1";
            DISCORD_CLIENT_ID?: string;
            DISCORD_CLIENT_SECRET?: string;
            DISCORD_API_ORIGIN?: string;
        }
    }
}

