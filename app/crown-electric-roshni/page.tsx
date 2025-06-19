import { Metadata } from "next";
import RoshniClient from "./roshniClient";


export const metadata = {
  title: "Crown Electric Roshni – 1200W Electric Scooter in Pakistan",
  description: "Experience the Crown Electric Roshni, offering a 1200W motor, 115–120 km range, and intelligent battery management system. Perfect for urban commuting in Pakistan.",
  alternates: {
    canonical: "/crown-electric-roshni",
  },
  openGraph: {
    title: "Crown Electric Roshni – 1200W Electric Scooter in Pakistan",
    description: "Experience the Crown Electric Roshni, offering a 1200W motor, 115–120 km range, and intelligent battery management system. Perfect for urban commuting in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-roshni",
    type: "website",
  },
};

export default function Page() {
  return <RoshniClient />;
}
