import { Metadata } from "next";
import FlashClientPage from "./flashClientPage";


export const metadata = {
  title: "Crown Electric Flash – High-Performance Electric Scooter in Pakistan",
  description: "Experience the Crown Electric Flash, featuring a 1500W motor, 150 km range, and advanced safety features. Crown Electric Flash is ideal for daily commuting in Pakistan.",
  alternates: {
    canonical: "/crown-electric-flash",
  },
  openGraph: {
    title: "Crown Electric Flash – High-Performance Electric Scooter in Pakistan",
    description: "Experience the Crown Electric Flash, featuring a 1500W motor, 150 km range, and advanced safety features. Crown Electric Flash is ideal for daily commuting in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-flash",
    type: "website",
  },
};

export default function Page() {
  return <FlashClientPage />;
}
