import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtected = createRouteMatcher([
  '/dashboard',
  '/invoices/:invoiceId',
  '/invoices/new',
]);

export default clerkMiddleware((auth, request) => {
  if (isProtected(request)) {
    return auth.protect().then(
      (authResult) => {
        // Proceed with the request if authorized
        return NextResponse.next();
      },
      (error) => {
        // Handle unauthorized access by returning a redirect or error response
        return NextResponse.redirect('/login');
      }
    );
  }
  // If not a protected route, proceed without additional checks
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
