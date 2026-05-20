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
  title: "LOFTBAU Krakow | Luxury Bathrooms & Premium Interior Finishing",
  description:
    "LOFTBAU Krakow delivers luxury bathroom renovation, microcement finishes, large-format tiles, and premium interior execution for high-end apartments and homes.",
  keywords: [
    "luxury bathrooms Krakow",
    "premium bathroom renovation Krakow",
    "microcement Krakow",
    "large-format tiles Krakow",
    "luxury interior finishing Krakow",
  ],
  openGraph: {
    title: "LOFTBAU Krakow",
    description:
      "A cinematic premium renovation brand for architectural interiors in Krakow.",
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
