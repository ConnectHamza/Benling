import { Metadata } from "next";
import SparkClient from "./sparkClient";


export const metadata = {
  title: "Crown Electric Spark – 600W Electric Scooter in Pakistan",
  description: "The Crown Electric Spark features a 600W motor, 35–40 km range, and practical design, making it an ideal choice for daily commuting in Pakistan.",
  alternates: {
    canonical: "/crown-electric-spark",
  },
  openGraph: {
    title: "Crown Electric Spark – 600W Electric Scooter in Pakistan",
    description: "The Crown Electric Spark features a 600W motor, 35–40 km range, and practical design, making it an ideal choice for daily commuting in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-spark",
    type: "website",
  },
};

export default function Page() {
  return <SparkClient />;
}
