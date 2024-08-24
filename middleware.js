import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from "next/server";

let locales = ["en", "bn"];
let defaultLocale = "en";

function getLocale(request) {
  const getPreferredLang = request.headers?.get("accept-language") ?? undefined;
  let headers = { "accept-language": getPreferredLang };
  let languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    
  }

  return NextResponse.next();

}



export const config = {
    matcher: [
      // Skip all internal paths (_next, assets, api)
      '/((?!api|assets|.*\\..*|_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }
