import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./navigation";

export default createMiddleware({
  defaultLocale,
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
