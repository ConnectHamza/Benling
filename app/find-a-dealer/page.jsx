import { Metadata } from "next";
import DealerClient from "./dealerClient";


export const metadata = {
  title: "Find an Electric Bike Dealer Near You | Crown Electric Mobility",
  description: "Looking for a Crown Electric Mobility dealer? Use our easy tool to find authorized dealers near you in Pakistan and get the best deals on electric bikes.",
  alternates: {
    canonical: "/find-a-dealer",
  },
  openGraph: {
    title: "Find an Electric Bike Dealer Near You | Crown Electric Mobility",
    description: "Looking for a Crown Electric Mobility dealer? Use our easy tool to find authorized dealers near you in Pakistan and get the best deals on electric bikes.",
    url: "https://crownelectricmobility.com/find-a-dealer",
    type: "website",
  },
};

export default function Page() {
  return <DealerClient />;
}
