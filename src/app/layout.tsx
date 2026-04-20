import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Seva Cars - Професионално Автосервизно Обслужване | Professional Automotive Service",
  description:
    "Експертен ремонт и поддръжка на автомобили в България. Специализирани в американски мускулести автомобили. Expert automotive repair and maintenance services. Specialized in American muscle cars with Bulgarian and English support.",
  keywords: [
    "автосервиз",
    "ремонт на автомобили",
    "поддръжка на автомобили",
    "България",
    "automotive",
    "car repair",
    "car service",
    "maintenance",
    "Bulgaria",
    "American cars",
    "muscle cars",
    "Ford",
    "diagnostics",
    "transmission",
    "brakes",
  ],
  authors: [{ name: "Seva Cars" }],
  creator: "Seva Cars",
  publisher: "Seva Cars",
  robots: "index, follow",
  openGraph: {
    title: "Seva Cars - Professional Automotive Service",
    description: "Expert automotive repair and maintenance services in Bulgaria",
    type: "website",
    locale: "bg_BG",
    alternateLocale: ["en_US"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <body className="custom-scrollbar">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
