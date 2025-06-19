import { Metadata } from "next";
import RaftaarClient from "./raftaarClient";


export const metadata = {
  title: "Crown Electric Raftaar – 2000W Electric Scooter in Pakistan",
  description: "Discover the Crown Electric Raftaar with a 2000W motor, 140–160 km range & 72V 40Ah lithium iron phosphate battery. Built for speed & reliability in Pakistan.",
  alternates: {
    canonical: "/crown-electric-raftaar",
  },
  openGraph: {
    title: "Crown Electric Raftaar – 2000W Electric Scooter in Pakistan",
    description: "Discover the Crown Electric Raftaar with a 2000W motor, 140–160 km range & 72V 40Ah lithium iron phosphate battery. Built for speed & reliability in Pakistan.",
    url: "https://crownelectricmobility.com/crown-electric-raftaar",
    type: "website",
  },
};

export default function Page() {
  return <RaftaarClient />;
}
