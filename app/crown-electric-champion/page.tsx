import { Metadata } from "next";
import ChampionClient from "./championClient";


export const metadata = {
  title: "Crown Electric Champion – 1200W Electric Bike in Pakistan",
  description: "Experience the Crown Electric Champion with a 1200W motor, 200–220 km range & 72V 60Ah lithium iron phosphate battery. Ideal for long commutes in Pakistan.",
  alternates: {
    canonical: "/crown-electric-champion",
  },
  openGraph: {
    title: "Crown Electric Champion – 1200W Electric Bike in Pakistan",
    description: "Experience the Crown Electric Champion with a 1200W motor, 200–220 km range & 72V 60Ah lithium iron phosphate battery. Ideal for long commutes in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-champion",
    type: "website",
  },
};

export default function Page() {
  return <ChampionClient />;
}
