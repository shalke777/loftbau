import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://loftbau-krakow.pl"),
  title: "LOFTBAU Kraków | Wykonawca łazienek — Paweł Szalecki",
  description:
    "LOFTBAU Paweł Szalecki — firma wykonawcza specjalizująca się w kompleksowym wykonaniu łazienek. Mistrz glazurnik. Kraków i okolice.",
  keywords: [
    "wykonawca łazienek Kraków",
    "glazurnictwo Kraków",
    "płytki wielkoformatowe Kraków",
    "hydroizolacja łazienki Kraków",
    "mistrz glazurnik Kraków",
  ],
  openGraph: {
    title: "LOFTBAU Kraków",
    description:
      "Firma wykonawcza specjalizująca się w łazienkach. Mistrz glazurnik. Kraków i okolice.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
