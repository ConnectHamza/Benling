import Carousel from "./Carousel";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Book Your Electric Bike Now | Crown Electric Mobility",
  description: "Ready to experience the future of transportation? Book your Crown Electric Bike now and enjoy cutting-edge technology, eco-friendly features, and unmatched performance.",
  alternates: {
    canonical: "/book-now",
  },
  openGraph: {
    title: "Book Your Electric Bike Now | Crown Electric Mobility",
    description: "Ready to experience the future of transportation? Book your Crown Electric Bike now and enjoy cutting-edge technology, eco-friendly features, and unmatched performance.",
    url: "https://crownelectricmobility.com/book-now",
    type: "website",
  },
};

export default function Page() {
    return (
        <>
            <div className="min-h-screen flex bg-black pt-[0px]">
                {/* Left: Carousel (image) */}
                <Carousel />

                {/* Right: Form */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-50">
                    <div className="w-full max-w-xl px-8 md:py-40 py-20 mt-10 md:mt-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-magistral">Book Your Electric Ride</h2>
                        <p className="mb-6 text-gray-700 font-jakarta font-normal">
                            Start your purchase process by filling out the form below.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}