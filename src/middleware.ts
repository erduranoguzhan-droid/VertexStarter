import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  const requestHeaders = new Headers(req.headers);

  if (isEn) {
    const neutral = pathname === "/en" ? "/" : pathname.slice(3);
    requestHeaders.set("x-locale", "en");
    requestHeaders.set("x-pathname", neutral);
    const url = req.nextUrl.clone();
    url.pathname = neutral;
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  requestHeaders.set("x-locale", "tr");
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|generated|opengraph-image|sitemap.xml|robots.txt|llms.txt|feed.xml|logo.svg|favicon.ico).*)",
  ],
};
