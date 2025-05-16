'use client'

import FormField from "../../components/Input/FormField";
import { useState } from "react";
import { validateField } from "../../utils/helper";
import AppButton from "../../components/Button/AppButton"
function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        model: "",
        payment: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});

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
            // Reset form if needed
            // setFormData({ fullName: "", email: "", phone: "", city: "", model: "", payment: "", agree: false });
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

            <FormField
                type="select"
                label="Select City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                error={errors.city}
                options={[
                    { name: "Karachi", value: "karachi" },
                    { name: "Lahore", value: "lahore" },
                    { name: "Islamabad", value: "islamabad" },
                ]}
                required
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
                    { name: "ezee", value: "ezee" },
                    { name: "falcon", value: "falcon" },
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
                label="I agree to receive information, offers, and updates from Crown Benling to help me choose the right electric scooter."
                name="agree"
                value={formData.agree}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                error={errors.agree}
                required
            />

            <AppButton
                size="medium"
                variant="solid"
                label="Submit"
                iconName="ArrowUpRight"
                iconPosition="right"
                className="w-full"
                textColor='text-[#000]'
                type="submit"
            />
        </form>
    );
};
export default ContactForm;