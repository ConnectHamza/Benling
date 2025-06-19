import { Metadata } from "next";
import ContactClient from "./contactClient";


export const metadata = {
  title: "Contact Us | Crown Electric Mobility",
  description: "Have questions about our electric bikes or services? Contact Crown Electric Mobility today for support, inquiries, and more information about our products.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Crown Electric Mobility",
    description: "Have questions about our electric bikes or services? Contact Crown Electric Mobility today for support, inquiries, and more information about our products.",
    url: "https://crownelectricmobility.com/contact",
    type: "website",
  },
};

export default function Page() {
  return <ContactClient />;
}
