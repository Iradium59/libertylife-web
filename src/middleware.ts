import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.clone();
    if (!req.nextauth.token) {
      url.pathname = '/login';
      url.searchParams.set('callbackUrl', req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  },
  {
    pages: {
      signIn: '/login', // Utilisation d'une page intermédiaire
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*'],
};