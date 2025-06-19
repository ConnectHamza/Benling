import { Metadata } from "next";
import CherryClient from "./cherryClient";


export const metadata = {
  title: "Crown Electric Cherry – 3000W Electric Scooter in Pakistan",
  description: "Unleash power with the Crown Electric Cherry’s 3000W motor, 110–130 km range & 72V 40Ah lithium iron phosphate battery. Designed for performance in Pakistan.",
  alternates: {
    canonical: "/crown-electric-cherry",
  },
  openGraph: {
    title: "Crown Electric Cherry – 3000W Electric Scooter in Pakistan",
    description: "Unleash power with the Crown Electric Cherry’s 3000W motor, 110–130 km range & 72V 40Ah lithium iron phosphate battery. Designed for performance in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-cherry",
    type: "website",
  },
};

export default function Page() {
  return <CherryClient />;
}
