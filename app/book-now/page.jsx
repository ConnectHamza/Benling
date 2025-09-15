import Carousel from "./Carousel";
import ContactForm  from "./ContactForm";

export default function Page() {
    return (
        <div className="min-h-screen flex bg-black pt-[75px]">
            {/* Left: Carousel (image) */}
            <Carousel />

            {/* Right: Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-50">
                <div className="w-full max-w-xl p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 font-magistral">Book Your Electric Ride</h2>
                    <p className="mb-6 text-gray-700 font-jakarta font-normal">
                        Start your purchase process by filling out the form below.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}