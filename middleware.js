import { NextResponse } from "next/server";

const UNLOCK_COOKIE = "gift_unlocked";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // اسمح بالمرور لصفحة القفل ولل API بتاعها والملفات الثابتة دايمًا
  const isAllowedWithoutAuth =
    pathname.startsWith("/unlock") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/audio") ||
    pathname === "/favicon.ico";

  if (isAllowedWithoutAuth) {
    return NextResponse.next();
  }

  const isUnlocked = request.cookies.get(UNLOCK_COOKIE)?.value === "true";

  if (!isUnlocked) {
    const unlockUrl = new URL("/unlock", request.url);
    return NextResponse.redirect(unlockUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"]
};
