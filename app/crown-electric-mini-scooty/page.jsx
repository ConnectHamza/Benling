import { Metadata } from "next";
import MiniClient from "./miniClient";


export const metadata = {
  title: "Crown Electric Mini Scooty – 450W Electric Scooter in Pakistan",
  description: "Navigate city streets effortlessly with the Crown Electric Mini Scooty, featuring a 450W motor, 30–35 km range, and compact design.",
  alternates: {
    canonical: "/crown-electric-mini-scooty",
  },
  openGraph: {
    title: "Crown Electric Mini Scooty – 450W Electric Scooter in Pakistan",
    description: "Navigate city streets effortlessly with the Crown Electric Mini Scooty, featuring a 450W motor, 30–35 km range, and compact design.",
    url: "https://crownelectricmobility.com/crown-electric-mini-scooty",
    type: "website",
  },
};

export default function Page() {
  return <MiniClient />;
}
