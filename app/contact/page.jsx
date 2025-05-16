'use client'
import { useState } from "react"
import Image from "next/image";
import Herosection from "./HeroSection";
import FormField from "../../components/Input/FormField";
import { validateField } from "../../utils/helper";
import Apartment from "../../public/assets/Contact/apartment.svg";
import Call from "../../public/assets/Contact/call.svg";
import Mail from "../../public/assets/Contact/mail.svg";
import Whatsapp from "../../public/assets/Contact/Whatsapp.svg";
import Facebook from "../../public/assets/Contact/Facebook.svg";
import Linkedin from "../../public/assets/Contact/Linkedin.svg";
import Instagram from "../../public/assets/Contact/Instagram.svg";
export default function About() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        country: "",
        gender: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});

    const getFieldType = (key) => {
        switch (key) {
            case "agree": return "checkbox";
            case "phone": return "text";
            case "email": return "email";
            case "message": return "textarea";
            case "gender": return "radio";
            case "country": return "select";
            default: return "text";
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData((prev) => ({ ...prev, [name]: fieldValue }));

        const error = validateField(name, fieldValue, type);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleBlur = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        const error = validateField(name, fieldValue, type);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.entries(formData).forEach(([key, val]) => {
            const fieldType = getFieldType(key);
            const err = validateField(key, val, fieldType);
            if (err) newErrors[key] = err;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            console.log(formData);
        }
    };

    return (
        <div>
            <Herosection />

            <div className="w-full bg-white">
                <div className="w-full max-w-[1300px] mx-auto px-4">
                    <div className="w-full flex flex-col md:flex-row gap-8 py-10">
                        {/* Left Info Section */}
                        <div className="w-full md:w-[60%] flex flex-col">
                            <h2 className="text-3xl md:text-4xl mb-2 font-magistral font-semibold">
                                We are always ready to help you and answer your questions
                            </h2>
                            <p className="text-gray-600 mb-6 font-jakarta font-normal">
                                Whether you have questions about our products, need support, or want to become a dealer – our team is ready to assist you.
                            </p>

                            <div className="flex flex-col gap-4 font-jakarta">
                                {/* Row 1: Phone & Location */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="font-semibold mb-1">Phone Number</h3>
                                        <div className="text-sm flex items-center gap-2 mb-1">
                                            <Image src={Call} alt="Call Icon" width={20} height={20} />
                                            <a href="tel:+9221111000348" className="text-black-100" target="_blank" rel="noopener noreferrer">
                                                021 - 111000 348
                                            </a>
                                        </div>
                                        <div className="text-sm flex items-center gap-2 mb-1">
                                            <Image src={Whatsapp} alt="Call Icon" width={20} height={20} />
                                            <a href="https://wa.me/9221111000348" className="text-black-100" target="_blank" rel="noopener noreferrer">
                                                021 - 82 30246
                                            </a>
                                        </div>
                                        <div className="text-sm flex items-center gap-2">
                                            <div className="text-black-100">
                                                Mon-Sat, 9:00 A.M - 6:00 P.M
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <h3 className="font-semibold mb-1">Our Location</h3>
                                        <div className="flex">
                                            <div className="text-sm gap-2 flex items-start">
                                                <Image src={Apartment} alt="Apartment Icon" width={20} height={20} />
                                                <span>P.O. Box No. 672-673, Dakh Joroi, Taluka Bin Qasim Town, Karachi, 75600</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Row 2: Email & Social */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="font-semibold mb-1">Email</h3>
                                        <div className="text-sm flex items-center gap-2">
                                            <Image src={Mail} alt="Mail Icon" width={20} height={20} />
                                            <a href="mailto:info@sterling.pk" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                                info@sterling.pk
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <h3 className="font-semibold mb-1">Social Network</h3>
                                        <div className="flex gap-3">
                                            <a href="https://facebook.com/sterling" className="text-blue-600" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                                <Image src={Facebook} alt="Facebook Icon" width={24} height={24} />
                                            </a>
                                            <a href="https://instagram.com/sterling" className="text-pink-600" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                <Image src={Instagram} alt="Instagram Icon" width={24} height={24} />
                                            </a>
                                            <a href="https://linkedin.com/company/sterling" className="text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <Image src={Linkedin} alt="LinkedIn Icon" width={24} height={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Form Section */}
                        <div className="w-full md:w-[40%] flex items-stretch md:items-start">
                            <div className="w-full bg-orange-50 p-6 rounded-lg shadow">
                                <form onSubmit={handleSubmit} noValidate>
                                    <h2 className="text-xl font-bold mb-4">Get in Touch</h2>

                                    <FormField
                                        label="Full Name"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.fullName}
                                        required
                                    />

                                    <FormField
                                        type="email"
                                        label="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.email}
                                        required
                                    />

                                    <FormField
                                        type="text"
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.phone}
                                        required
                                    />

                                    <FormField
                                        type="textarea"
                                        label="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.message}
                                        required
                                    />

                                    <FormField
                                        type="select"
                                        label="Country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.country}
                                        options={[
                                            { name: "India", value: "IN" },
                                            { name: "USA", value: "US" },
                                            { name: "UK", value: "UK" },
                                        ]}
                                        required
                                    />

                                    <FormField
                                        type="radio"
                                        label="Gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.gender}
                                        options={[
                                            { name: "Male", value: "male" },
                                            { name: "Female", value: "female" },
                                        ]}
                                        required
                                    />

                                    <FormField
                                        type="checkbox"
                                        label="I agree to the terms"
                                        name="agree"
                                        value={formData.agree}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors.agree}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
