'use client';

import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

export default function LoginPage() {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === 'unauthenticated') {
			signIn('discord', { callbackUrl: '/dashboard' });
		} else if (status === 'authenticated') {
			router.push('/dashboard');
		}
	}, [status]);

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	return null;
}
