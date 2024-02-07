import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../globals.css";
import { Switcher } from "../switcher";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Switcher />
          {children}
        </NextIntlClientProvider>
        {modal}
      </body>
    </html>
  );
}
