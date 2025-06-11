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
import Instagram from "../../public/assets/Contact/Instagram.svg";
import DealershipForm from "./DealershipForm"


export default function BecomeADealer() {


    return (
        <>
            <head>
                <title>Crown Benling Electric Mobility - Contact</title>
            </head>
            <div>
                <Herosection />
                <DealershipForm />
            </div>
        </>
    );
}
