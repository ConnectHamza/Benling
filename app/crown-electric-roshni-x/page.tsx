import { Metadata } from "next";
import RoshniXClient from "./roshniClient";


export const metadata = {
  title: "Crown Electric Roshni X – 1500W Electric Scooter in Pakistan",
  description: "Discover the Crown Electric Roshni X, featuring a 1500W motor, 110 km range, and advanced safety features. Crown Electric Roshni X is ideal for urban commuting in Pakistan.",
  alternates: {
    canonical: "/crown-electric-roshni-x",
  },
  openGraph: {
    title: "Crown Electric Roshni X – 1500W Electric Scooter in Pakistan",
    description: "Discover the Crown Electric Roshni X, featuring a 1500W motor, 110 km range, and advanced safety features. Crown Electric Roshni X is ideal for urban commuting in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-roshni-x",
    type: "website",
  },
};

export default function Page() {
  return <RoshniXClient />;
}
