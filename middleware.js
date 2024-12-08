import { NextResponse } from "next/server";

export async function middleware(request) {
  // Protected routes pattern
  const protectedPaths = [
    "/admin",
    "/api/application",
    "/api/contact",
    "/api/content",
  ];

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  if (isProtectedPath) {
    const session = request.cookies.get('session');
    
    if (!session) {
      // Redirect to login if no session cookie exists
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // The actual token verification will happen in the API routes
      // using the admin SDK. Here we just check for the presence of the cookie.
      return NextResponse.next();
    } catch (error) {
      console.error("Auth middleware error:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/application/:path*",
    "/api/contact/:path*",
    "/api/content/:path*",
  ],
};
