'use client'
import { useState } from "react"
import Image from "next/image";
import Herosection from "./HeroSection";
import FormField from "../../components/Input/FormField";
import AppButton from "../../components/Button/AppButton";
import { validateField } from "../../utils/helper";
import Apartment from "../../public/assets/Contact/apartment.svg";
import Call from "../../public/assets/Contact/call.svg";
import Mail from "../../public/assets/Contact/mail.svg";
import Whatsapp from "../../public/assets/Contact/Whatsapp.svg";
import Facebook from "../../public/assets/Contact/Facebook.svg";
import Linkedin from "../../public/assets/Contact/Linkedin.svg";
import Tiktok from "../../public/assets/Contact/Tiktok.svg";
import Instagram from "../../public/assets/Contact/Instagram.svg";
import {contactApi} from '../api/contactApi'


export default function ContactClient() {
    const initialFormData = {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        country: "",
        gender: "",
        agree: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [success, setSuccess] = useState(false);

  
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

    const resetForm = () => {
        setFormData(initialFormData);
        setErrors({});
    };

 const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError("");
        setSuccess(false);

        const newErrors = {};
        Object.entries(formData).forEach(([key, val]) => {
            // Only validate fields that are in the API payload
            if (["fullName", "email", "phone", "message"].includes(key)) {
                const fieldType = getFieldType(key);
                const err = validateField(key, val, fieldType);
                if (err) newErrors[key] = err;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            try {
                const payload = {
                    fullName: formData.fullName,
                    email: formData.email,
                    phoneNumber: formData.phone,
                    message: formData.message,
                };
                await contactApi(payload);
                setSuccess(true);
                resetForm();
            } catch (err) {
                setApiError(
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something went wrong. Please try again."
                );
            } finally {
                setLoading(false);
            }
        }
    };


    return (
        <>
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
                                            <div className="text-sm flex items-center gap-2 my-2">
                                                <Image src={Call} alt="Call Icon" width={20} height={20} />
                                                <a href="tel:021111000348" className="text-black-100" target="_blank" rel="noopener noreferrer">
                                                    021-111000348
                                                </a>
                                            </div>
                                            <div className="text-sm flex items-center gap-2 my-2">
                                                <Image src={Whatsapp} alt="Call Icon" width={20} height={20} />
                                                <a href="https://wa.me/03218230246" className="text-black-100" target="_blank" rel="noopener noreferrer">
                                                    0321-8230246
                                                </a>
                                            </div>
                                            <div className="text-sm flex items-center gap-2 ">
                                                <div className="text-black-100">
                                                    Mon-Sat, 9:00 AM - 6:00 PM
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="font-semibold ">Our Location</h3>
                                            <div className="flex">
                                                <div className="text-sm gap-2 flex items-start my-2">
                                                    <Image src={Apartment} alt="Apartment Icon" width={20} height={20} />
                                                    <a href="https://www.google.com/maps/place/Crown+Corporate+Office+-+Port+Qasim/@24.8997442,66.8988687,11.57z/data=!4m7!3m6!1s0x3eb333c6ce63f035:0x2e7f0a0a8c355a1e!8m2!3d24.8464525!4d67.3230766!15sCkJQbG90IE5vLiA2NzItNjczLCBEZWggSm9yZWppIFRhbHVrYSwgQmluIFFhc2ltIFRvd24gS2FyYWNoaSwgNzU2MDCSARRzb2xhcl9lbmVyZ3lfY29tcGFueeABAA!16s%2Fg%2F11w85cw_6g?entry=tts&g_ep=EgoyMDI1MDUyMS4wIPu8ASoASAFQAw%3D%3D&skid=d506d3ed-94d6-434b-8fd2-2d8dfb506fd3">Plot No. 672-673, Deh Joreji Taluka, Bin Qasim Town Karachi, 75600</a>
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
                                                <a href="mailto:info@crownelectricmobility.com"  target="_blank" rel="noopener noreferrer">
                                                    info@crownelectricmobility.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h3 className="font-semibold mb-1">Social Network</h3>
                                            <div className="flex gap-3">
                                                <a href="https://www.facebook.com/crownelectricmobility" className="text-blue-600" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                                    <Image src={Facebook} alt="Facebook Icon" width={24} height={24} />
                                                </a>
                                                <a href="https://www.instagram.com/crownelectricmobility/" className="text-pink-600" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                    <Image src={Instagram} alt="Instagram Icon" width={24} height={24} />
                                                </a>
                                                <a href="https://www.linkedin.com/company/crownelectricmobility" className="text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                    <Image src={Linkedin} alt="LinkedIn Icon" width={24} height={24} />
                                                </a>
                                                <a href="https://www.tiktok.com/@crownelectricmobility" className="text-blue-700" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                    <Image src={Tiktok} alt="LinkedIn Icon" width={24} height={24} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Right Form Section */}
                            <div className="w-full md:w-[40%] flex items-stretch md:items-start">
                                <div className="w-full bg-orange-50 p-6 rounded-lg">
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

                                        {apiError && <div className="text-red-500 my-2">{apiError}</div>}
                                        {success && <div className="text-green-500 my-2">Message sent successfully!</div>}

                                        <AppButton
                                            size="medium"
                                            variant="solid"
                                            label={loading ? "Sending..." : "Send Message"}
                                            iconName="ArrowUpRight"
                                            iconPosition="right"
                                            className="w-full"
                                            textColor='text-[#000]'
                                            type="submit"
                                            disabled={loading}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
