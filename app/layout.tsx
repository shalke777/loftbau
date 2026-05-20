import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOFTBAU Kraków | Luksusowe łazienki i wykończenia premium",
  description:
    "LOFTBAU Kraków tworzy luksusowe łazienki, mikrocement i wykończenia premium dla apartamentów oraz nowoczesnych wnętrz.",
  keywords: [
    "luxury bathrooms Kraków",
    "premium bathroom renovation Kraków",
    "microcement Kraków",
    "large-format tiles Kraków",
    "luxury interior finishing Kraków",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full bg-[#121212] text-[#f6f2ea]">{children}</body>
    </html>
  );
}
