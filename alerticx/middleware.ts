import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/alerts", "/map", "/reports", "/settings"]

  // Define auth routes
  const authRoutes = ["/login", "/register"]

  const path = request.nextUrl.pathname

  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => path === route || path.startsWith(`${route}/`))

  // Check if the path is an auth route
  const isAuthRoute = authRoutes.some((route) => path === route || path.startsWith(`${route}/`))

  // Redirect authenticated users away from auth routes
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Redirect unauthenticated users away from protected routes
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/alerts/:path*",
    "/map/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/login",
    "/register",
  ],
}

