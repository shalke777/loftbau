import type { Metadata } from "next";
import LoftbauPage from "@/components/loftbau/LoftbauPage";

export const metadata: Metadata = {
  title: "LOFTBAU Krakow | Luksusowe lazienki i premium wykonczenia",
  description:
    "LOFTBAU Krakow realizuje luksusowe lazienki, mikrocement, plytki wielkoformatowe i premium wykonczenia wnętrz w Krakowie.",
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
