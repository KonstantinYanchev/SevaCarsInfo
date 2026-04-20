import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seva Cars Info",
  description:
    "Seva Cars Info — your trusted source for car information, reviews, and the latest automotive news.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
