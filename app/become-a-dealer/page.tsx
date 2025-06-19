import Herosection from "./HeroSection";
import DealershipForm from "./DealershipForm"


export const metadata = {
  title: "Become a Dealer of Crown Electric Bikes | Crown Electric Mobility",
  description: "Join our network of dealers! Become a Crown Electric Mobility dealer and offer cutting-edge electric bikes to customers in your region. Apply now to get started.",
  alternates: {
    canonical: "/become-a-dealer",
  },
  openGraph: {
    title: "Become a Dealer of Crown Electric Bikes | Crown Electric Mobility",
    description: "Join our network of dealers! Become a Crown Electric Mobility dealer and offer cutting-edge electric bikes to customers in your region. Apply now to get started.",
    url: "https://crownelectricmobility.com/become-a-dealer",
    type: "website",
  },
};


export default function BecomeADealer() {

    return (
        <>
            <div>
                <Herosection />
                <DealershipForm />
            </div>
        </>
    );
}
