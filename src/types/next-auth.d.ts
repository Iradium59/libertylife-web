import "next-auth";
declare module 'next-auth' {
    interface Session {
        user: User;
        accessToken: string;
        expires: string;
    }


    interface User {
        id: string;
        name: string;
        email: string;
        image: string;
    }
}

