'use client'

import FormField from "../../components/Input/FormField";
import { useEffect, useState } from "react";
import { validateField } from "../../utils/helper";
import AppButton from "../../components/Button/AppButton";
import { bookNowApi } from '../api/bookNowApi';
import { getCities } from "../api/citiesApi";

function ContactForm() {
    const initialFormData = {
        fullName: "",
        email: "",
        phone: "",
        city: "",
        model: "",
        payment: "",
        agree: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [success, setSuccess] = useState(false);
    const [cityOptions, setCityOptions] = useState([]);
    const [cityLoading, setCityLoading] = useState(true);

     useEffect(() => {
        let isMounted = true;
        setCityLoading(true);
        getCities()
            .then(cities => {
                if (isMounted) {
                    // Map to options format expected by FormField
                    setCityOptions(cities.map(city => ({
                        name: city.name,
                        value: city.name
                    })));
                }
            })
            .catch(() => {
                if (isMounted) setCityOptions([]);
            })
            .finally(() => {
                if (isMounted) setCityLoading(false);
            });
        return () => { isMounted = false; };
    }, []);

    const getFieldType = (key) => {
        switch (key) {
            case "agree":
                return "checkbox";
            case "phone":
                return "text";
            case "email":
                return "email";
            case "payment":
                return "radio";
            case "city":
            case "model":
                return "select";
            default:
                return "text";
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));

        // Validate on change
        const error = validateField(name, fieldValue, type);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleBlur = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        const error = validateField(name, fieldValue, type);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
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
            const fieldType = getFieldType(key);
            const err = validateField(key, val, fieldType);
            if (err) newErrors[key] = err;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            try {
                // Prepare data for API
                const payload = {
                    fullName: formData.fullName,
                    email: formData.email,
                    phoneNumber: formData.phone,
                    selectedModel: formData.model,
                    selectedCity: formData.city,
                    message: "",
                    paymentType: formData.payment,
                    isAgreedToUpdates: formData.agree,
                };
                await bookNowApi(payload);
                setSuccess(true);
                resetForm(); // Reset fields after successful submission
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
        <form onSubmit={handleSubmit} className="w-full" noValidate>
            <FormField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullName}
                onFocus={handleFocus}
                required
            />

            <div className="md:grid grid-cols-2 gap-4">
            <FormField
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                onFocus={handleFocus}
                required
            />

            <FormField
                type="text"
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                error={errors.phone}
                required
            />
            </div>

                <FormField
                type="select"
                label="Select City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                error={errors.city}
                options={cityOptions}
                required
                disabled={cityLoading}
                placeholder={cityLoading ? "Loading cities..." : "Select a city"}
            />

            <FormField
                type="select"
                label="Select Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                error={errors.model}
                options={[
                    { name: "Crown Electric Champion", value: "champion" },
                    { name: "Crown Electric Cherry", value: "cherry" },
                    { name: "Crown Electric Ezee", value: "ezee" },
                    { name: "Crown Electric Fairy", value: "fairy" },
                    { name: "Crown Electric Firefly", value: "firefly" },
                    { name: "Crown Electric Flash", value: "firefly" },
                    { name: "Crown Electric Knight Rider", value: "knight-rider" },
                    { name: "Crown Electric Markhor", value: "markhor" },
                    { name: "Crown Electric Mini Scooter", value: "mini-scooter" },
                    { name: "Crown Electric Raftaar", value: "raftaar" },
                    { name: "Crown Electric Roshni", value: "roshni" },
                    { name: "Crown Electric RoshniX", value: "roshnix" },
                    { name: "Crown Electric Spark", value: "spark" },
                    { name: "Crown Electric Victory", value: "victory" },
                ]}
                required
            />

            <div className="mb-4">
                <div className="mb-2 font-medium font-jakarta text-sm">How would you like to pay?</div>
                <FormField
                    type="radio"
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    error={errors.payment}
                    options={[
                        { name: "One-Time Payment", value: "onetime" },
                        { name: "Monthly Installments", value: "installments" },
                    ]}
                    required
                />
            </div>

            <FormField
                type="checkbox"
                label="I agree to receive information, offers, and updates from Crown Electric to help me choose the right electric scooter."
                name="agree"
                value={formData.agree}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                error={errors.agree}
            />
            {apiError && <div className="text-red-500 my-2">{apiError}</div>}
            {success && <div className="text-green-500 my-2">Form submitted successfully!</div>}

            <AppButton
                size="medium"
                variant="solid"
                label={loading ? "Submitting..." : "Submit"}
                iconName="ArrowUpRight"
                iconPosition="right"
                className="w-full"
                textColor='text-[#000]'
                type="submit"
                disabled={loading}
            />
        </form>
    );
}

export default ContactForm;