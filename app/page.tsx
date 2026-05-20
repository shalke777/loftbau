import type { Metadata } from "next";
import LoftbauPage from "@/components/loftbau/LoftbauPage";

export const metadata: Metadata = {
  title: "LOFTBAU Kraków | Wykonawca łazienek — Paweł Szalecki",
  description:
    "LOFTBAU Paweł Szalecki — firma wykonawcza specjalizująca się w kompleksowym wykonaniu łazienek. Mistrz glazurnik. Kraków i okolice. NIP: 8732958793.",
  alternates: {
    canonical: "/",
    languages: {
      pl: "/",
      en: "/en",
    },
  },
};

export default function Home() {
  return <LoftbauPage locale="pl" />;
}
