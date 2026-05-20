import type { Metadata } from "next";
import LoftbauPage from "@/components/loftbau/LoftbauPage";

export const metadata: Metadata = {
  title: "LOFTBAU Krakow | Luxury Bathrooms and Premium Interior Finishing",
  description:
    "LOFTBAU Krakow delivers luxury bathrooms, microcement surfaces, large-format tile installation, and premium interior finishing in Krakow.",
  alternates: {
    canonical: "/en",
    languages: {
      pl: "/",
      en: "/en",
    },
  },
};

export default function HomeEn() {
  return <LoftbauPage locale="en" />;
}
