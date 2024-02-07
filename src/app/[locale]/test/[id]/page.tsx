"use client";

import { useLocale } from "next-intl";

export default function Page() {
  const locale = useLocale();

  return <h2>Details with locale: {locale}</h2>;
}
