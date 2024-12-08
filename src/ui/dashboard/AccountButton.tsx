'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function AccountButton() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }


    console.log(session);
    if (status === 'authenticated' && session.user) {
        return (
            <Link href="/dashboard" className="flex items-center space-x-2 bg-gray-50 text-sm font-medium rounded-md px-3 py-2 hover:bg-sky-100 hover:text-blue-600">
                {session.user.image && (
                    <img
                        width={30}
                        src={session.user.image}
                        alt={`${session.user.name}'s avatar`}
                        className="rounded-full"
                    />
                )}
                <span>{session.user.name} </span>
            </Link>
        );
    }
}
