import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify, importJWK } from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const isUserCase = !request.nextUrl.pathname.startsWith("/admin");
  const tokenKey = isUserCase ? "token" : "adminToken";
  const redirectPath = isUserCase ? "/login" : "/admin/login";
  try {
    const token = request.cookies.get(tokenKey)!.value;
    const secretJWK = {
      kty: "oct",
      k: process.env.JOSE_SECRET,
    };

    const secretKey = await importJWK(secretJWK, "HS256");
    const { payload } = await jwtVerify(token, secretKey);

    if (!payload) {
      // TODO: handle 401
      throw new Error();
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/admin"],
};
