import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
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
      className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
