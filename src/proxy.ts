import { NextResponse, type NextRequest } from "next/server";

/** The site's public address. The old hazardsecurity.xyz addresses forward here, same path and query. */
const CANONICAL_HOST = "www.alastella.com";
const OLD_HOSTS = new Set(["hazardsecurity.xyz", "www.hazardsecurity.xyz"]);

export function proxy(request: NextRequest) {
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").toLowerCase();
  if (OLD_HOSTS.has(host)) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`), 308);
  }
  return NextResponse.next();
}

// Everything except Next's own files.
export const config = { matcher: ["/((?!_next/).*)"] };
