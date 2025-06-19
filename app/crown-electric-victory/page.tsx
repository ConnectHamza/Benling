import { Metadata } from "next";
import VictoryClient from "./victoryClient";


export const metadata = {
  title: "Crown Electric Victory – 1000W Electric Scooter in Pakistan",
  description: "Ride the Crown Electric Victory with a 1000W motor, 100–120 km range & 72V 30Ah lithium iron phosphate battery. A smart choice for urban travel in Pakistan.",
  alternates: {
    canonical: "/crown-electric-victory",
  },
  openGraph: {
    title: "Crown Electric Victory – 1000W Electric Scooter in Pakistan",
    description: "Ride the Crown Electric Victory with a 1000W motor, 100–120 km range & 72V 30Ah lithium iron phosphate battery. A smart choice for urban travel in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-victory",
    type: "website",
  },
};

export default function Page() {
  return <VictoryClient />;
}
