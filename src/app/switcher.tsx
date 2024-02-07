"use client";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";

export const Switcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex gap-10">
      <span>Locale: {locale}</span>
      <button
        onClick={() =>
          router.replace(pathname, {
            locale: "en",
          })
        }
      >
        Change to EN
      </button>
      <button
        onClick={() =>
          router.replace(pathname, {
            locale: "de",
          })
        }
      >
        Change to DE
      </button>
    </div>
  );
};
