import Ezee from "../../public/assets/Home/Header/mobile/ezee.webp";
import Firefly from "../../public/assets/Home/Header/mobile/firefly.webp"
import Flash from "../../public/assets/Home/Header/mobile/flash.webp"
import Knight from "../../public/assets/Home/Header/mobile/knight-rider.webp"
import Mini from "../../public/assets/Home/Header/mobile/mini-scooty.webp"
import Roshni from "../../public/assets/Home/Header/mobile/roshni.webp"
import Roshnix from "../../public/assets/Home/Header/mobile/roshnix.webp"
import Spark from "../../public/assets/Home/Header/mobile/spark.webp"
//website
import EzeeWeb from "../../public/assets/Home/Header/web/ezee.webp";
import FireflyWeb from "../../public/assets/Home/Header/web/firefly.webp"
import FlashWeb from "../../public/assets/Home/Header/web/flash.webp"
import KnightWeb from "../../public/assets/Home/Header/web/knight-rider.webp"
import MiniWeb from "../../public/assets/Home/Header/web/mini-scooty.webp"
import RoshniWeb from "../../public/assets/Home/Header/web/roshni.webp"
import RoshnixWeb from "../../public/assets/Home/Header/web/roshnix.webp"
import SparkWeb from "../../public/assets/Home/Header/web/spark.webp"
//Carousel
import HeroImageSub from '../../public/assets/Home/Header/heroimagesub.png';
import Logo_Ezze from "../../public/assets/Home/Carousel/Ezee_Logo.svg"
import Logo_Flash from "../../public/assets/Home/Carousel/Flash_Logo.svg"
import Logo_Knight_Rider from "../../public/assets/Home/Carousel/Knightrider_Logo.svg"
import Logo_Mini_Scooty from "../../public/assets/Home/Carousel/Miniscooty_Logo.svg"
import Logo_Roshni from "../../public/assets/Home/Carousel/Roshni_Logo.svg"
import Logo_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Logo.svg"
import Logo_Spark from "../../public/assets/Home/Carousel/Spark_Logo.svg"
import Logo_Firefly from "../../public/assets/Home/Carousel/Firefly_Logo.svg"
import Image_Ezee from "../../public/assets/Home/Carousel/Ezee_Image.png";
import Image_Firefly from "../../public/assets/Home/Carousel/Firefly_Image.png";
import Image_Flash from "../../public/assets/Home/Carousel/Flash_Image.png";
import Image_KnightRider from "../../public/assets/Home/Carousel/Knightrider_Image.png";
import Image_Miniscooter from "../../public/assets/Home/Carousel/Miniscooty_Image.png";
import Image_Roshni from "../../public/assets/Home/Carousel/Roshni_Image.png";
import Image_Roshnix from "../../public/assets/Home/Carousel/Roshnix_Image.png";
import Image_Spark from "../../public/assets/Home/Carousel/Spark_Image.png";

export const faqsData = [
    {
        question: "How long does it take to fully charge the battery?",
        answer: "Charging typically takes 2 to 6 hours, based on battery capacity and charger type."
    },
    {
        question: "Are your scooters water-resistant?",
        answer: "Yes, all Crown Benling scooters are designed with splash and water resistance for safe riding in light rain and wet conditions."
    },
    {
        question: "What warranty do you offer??",
        answer: `
        <div>
            <h3><strong>Legacy Series:</strong></h3>
            <ul>
                <li>36 months / 36,000 km coverage for Controller & Motor</li>
                <li>18 months / 20,000 km coverage for Graphene Battery</li>
                <li>12 months / 12,000 km coverage for Body Parts</li>
            </ul></br>
            <h3><b>Performance Series:</b></h3>
            <ul>
                <li>4 years / 48,000 km coverage for Controller & Motor</li>
                <li>4 years / 48,000 km coverage for Lithium-LiFePO₄ Battery</li>
                <li>12 months / 12,000 km coverage for Body Parts</li>
            </ul>
            <p>Enjoy your journey with the confidence of extended protection.</p>
        </div>
        `
    },
    {
        question: "Do I need a license to ride?",
        answer: "Yes, a valid driving license is required to operate our high-speed models on public roads."
    },
    {
        question: "Where can I buy or test ride a Crown Benling scooter??",
        answer: "Visit any of our authorized dealerships across Pakistan or use our Store Locator to find the nearest one."
    },
];

 export const bikes = [
    {
      name: "Bike 1",
      image: Image_Flash.src,
      range: 150,
      maxSpeed: 70,
      motorPower: 1500,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Flash_Brochure.pdf',
      exploreLink: "/crown-benling-flash",
      logo: Logo_Flash.src
    },
    {
      name: "Bike 2",
      image: Image_KnightRider.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: "../../public/assets/Brouchers/Crown_Benling_Knight_Rider_Brochure.pdf",
      exploreLink: "/crown-benling-knight-rider",
      logo: Logo_Knight_Rider.src

    },
    {
      name: "Bike 3",
      image: Image_Roshnix.src,
      range: 110,
      maxSpeed: 60,
      motorPower: 1500,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Roshni_X_Brochure.pdf',
      exploreLink: "/crown-benling-roshni-x",
      logo: Logo_Roshnix.src
    },
    {
      name: "Bike 3",
      image: Image_Ezee.src,
      range: 55,
      maxSpeed: 40,
      motorPower: 650,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Ezee_Brochure.pdf',
      exploreLink: "/crown-benling-ezee",
      logo: Logo_Ezze.src
    }, {
      name: "Bike 3",
      image: Image_Roshni.src,
      range: 120,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Roshni_Brochure.pdf',
      exploreLink: "/crown-benling-roshni",
      logo: Logo_Roshni.src
    }, {
      name: "Bike 3",
      image: Image_Firefly.src,
      range: 100,
      maxSpeed: 60,
      motorPower: 1200,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Firefly_Brochure.pdf',
      exploreLink: "/crown-benling-firefly",
      logo: Logo_Firefly.src
    }, {
      name: "Bike 3",
      image: Image_Spark.src,
      range: 40,
      maxSpeed: 40,
      motorPower: 600,
      brochureLink: '../../public/assets/Brouchers/Crown_Benling_Spark_Brochure.pdf',
      exploreLink: "/crown-benling-spark",
      logo: Logo_Spark.src
    }, {
      name: "Bike 3",
      image: Image_Miniscooter.src,
      range: 35,
      maxSpeed: 35,
      motorPower: 450,
      brochureLink: "../../public/assets/Brouchers/Crown_Benling_Mini_Scooty_Brochure.pdf",
      exploreLink: "/crown-benling-mini-scooty",
      logo: Logo_Mini_Scooty.src
    }
  ];




export const Slides = [
    {
        title: 'Ezee – Your Everyday Electric Companion',
        subtitle: 'Designed for comfort and practicality, Ezee is the perfect electric scooter for daily rides. Enjoy easy handling, long range, and zero emissions across Pakistan.',
        buttonText: 'Explore Now',
        imageSrc: EzeeWeb,
        mobileImageSrc: Ezee,
        href: "/crown-benling-ezee",
        color: "white",
        price: "230,000"      
    },
    {
        title: 'Embrace Tomorrow Now with Firefly',
        subtitle: 'Step into the era of comfort with the Firefly electric scooter. Sleek, powerful, and eco-friendly, it’s designed for effortless rides and standout style.',
        buttonText: 'Learn More',
        imageSrc: FireflyWeb,
        mobileImageSrc: Firefly,
        href: "/crown-benling-firefly",
        color: "white",
        price: "195,000"      

    },
    {
        title: 'Advanced Electric Scooter with Speed',
        subtitle: 'Designed for the modern commuter, Flash combines speed, safety, and smart features like digital display and dual disc brakes—making it the go-to electric scooter in Pakistan.',
        buttonText: 'Book Now',
        imageSrc: FlashWeb,
        mobileImageSrc: Flash,
        href: "/crown-benling-flash",
        color: "white",
        price: "250,000"      

    },
    {
        title: 'Rule the Roads with Electric Power',
        subtitle: 'Experience unmatched strength and control with Knight Rider, a rugged electric scooter built for power rides, high-speed performance, and reliable travel on Pakistan’s diverse roads.',
        buttonText: 'Book Now',
        imageSrc: KnightWeb,
        mobileImageSrc: Knight,
        href: "/crown-benling-knight-rider",
        color: "white",
        price: "240,000"      

    },
    {
        title: 'Compact, Stylish, and Made for City Life',
        subtitle: 'Turn heads with Mini Scooty, the perfect electric scooter for young and urban riders. Lightweight, efficient, and designed for effortless short-distance commutes across Pakistan.',
        buttonText: 'Book Now',
        imageSrc: MiniWeb,
        mobileImageSrc: Mini,
        href: "/crown-benling-mini-scooty",
        color: "white",
        price: "99,999"      

    },
    {
        title: 'Roshni – Bright, Bold, and Electric',
        subtitle: 'Discover Roshni, the stylish electric scooter made for vibrant city living. With modern design and efficient performance, it’s your perfect ride for a greener Pakistan.',
        buttonText: 'Book Now',
        imageSrc: RoshniWeb,
        mobileImageSrc: Roshni,
        href: "/crown-benling-roshni",
        color: "white",
        price: "215,000"      
    },
    {
        title: 'The Era of Smart Electric Commuting',
        subtitle: 'Upgrade to Roshni X, a next-generation electric scooter with ergonomic design, and high battery range built for tomorrow’s urban riders in Pakistan.',
        buttonText: 'Book Now',
        imageSrc: RoshnixWeb,
        mobileImageSrc: Roshnix,
        href: "/crown-benling-roshni-x",
        color: "black-200",
        price: "235,000"      

    },
    {
        title: 'Engineered for Confidence, Designed for Style',
        subtitle: 'The Spark electric scooter offers a powerful ride with modern styling. Ride confidently with advanced safety and electric performance, made for Pakistan roads.',
        buttonText: 'Book Now',
        imageSrc: SparkWeb,
        mobileImageSrc: Spark,
        href: "/crown-benling-spark",
        color: "black-200",
        price: "145,000"      

    },
]


export const cities =
{
  "Karachi": {
    "data": [
      {
        "id": 1,
        "name": "Benling Awami Markaz",
        "address": "Address: Plot # ST1/A2 Shop # LG 06 & 07 City Centre Mall Near Awami Markaz Oppo Lal Qila Main Shahrah e Faisal Karachi",
        "phone": ["0321-2721818"],
        "location": "https://www.google.com/maps/place/24%C2%B052'15.8%22N+67%C2%B005'25.8%22E/@24.8710559,67.087915,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8710559!4d67.0904899?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 2,
        "name": "ST Traders Bahria Town",
        "address": "Shop # 01 B-142 Midway Commercial, Bahria Town Karachi",
        "phone": ["0339-8888991", "0321-8777941"],
        "location": "https://www.google.com/maps/place/25%C2%B001'51.5%22N+67%C2%B018'33.2%22E/@25.0307483,67.3092503,17z/data=!4m4!3m3!8m2!3d25.0309722!4d67.3092222?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 3,
        "name": "Al Hamd Electronics",
        "address": "SUH 14 Sector J Askari 5 Malir cantt",
        "phone": ["0300 2875705"],
        "location": "https://www.google.com/maps/place/24%C2%B055'52.1%22N+67%C2%B012'07.3%22E/@24.9311274,67.1994407,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.9311274!4d67.2020156?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 4,
        "name": "Star Electronics",
        "address": "Shop #B/7, B/8, KDA Flats Phase 2, Shadman Town No. 1 North Karachi",
        "phone": ["0316-3331332"],
        "location": "https://www.google.com/maps/place/24%C2%B057'27.5%22N+67%C2%B003'36.2%22E/@24.9576315,67.0574896,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.9576315!4d67.0600645?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 5,
        "name": "SR Motors",
        "address": "Shop No. AM-301 C, Opposite, Naveed Clinic, Frere Road, Saddar",
        "phone": ["021-32743280", "0300-2167593"],
        "location": "https://www.google.com/maps/place/SR+Motors/@24.859441,67.0224593,20z/data=!4m6!3m5!1s0x3eb33e0d53584a7f:0x99827626e9e4a84a!8m2!3d24.8593783!4d67.0225773!16s%2Fg%2F11xb_y8tr?entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      },
      {
        "id": 6,
        "name": "Shari automobiles",
        "address": "Address: shop # 15 rizvi chamber akber road Karachi",
        "phone": ["0321-9253100"],
        "location": "https://www.google.com/maps/place/24%C2%B051'37.0%22N+67%C2%B001'22.2%22E/@24.860265,67.0202642,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.860265!4d67.0228391?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 7,
        "name": "Rafiq Auto Exchange",
        "address": "Up market - North Karachi, Karachi",
        "phone": ["0311-1123787"],
        "location": "https://www.google.com/maps/place/24%C2%B058'13.8%22N+67%C2%B004'06.5%22E/@24.970499,67.0658837,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.970499!4d67.0684586?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 8,
        "name": "Unique House",
        "address": "Showroom No. 4, Ghulam Nabi Trust, Building AM-20, Frere Road, Saddar",
        "phone": ["021-32727261", "0333-4224409"],
        "location": "https://www.google.com/maps/place/24%C2%B051'34.7%22N+67%C2%B001'22.7%22E/@24.859642,67.0203896,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.859642!4d67.0229645?q=24.8596420288086,67.0229644775391&entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      },
      {
        "id": 27,
        "name": "Crown Solar",
        "address": "Shop # KS-315, Crown solar energy, Karachi",
        "phone": ["032-12721818"],
        "location": "https://www.google.com/maps/place/24%C2%B051'38.1%22N+67%C2%B001'28.0%22E/@24.8606198,67.0235302,18.18z/data=!4m4!3m3!8m2!3d24.8605872!4d67.0244346?coh=225988&entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D"
      },
      {
        "id": 28,
        "name": "M.Ayaan Ev Center",
        "address": "Main National highway, opposite Quaid e Azam Park, Steel Town",
        "phone": ["0334-3704587"],
        "location": "https://www.google.com/maps/place/24%C2%B051'36.7%22N+67%C2%B020'02.2%22E/@24.8601894,67.3313561,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8601894!4d67.333931?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 29,
        "name": "Akber Road Outlet",
        "address": "Secretariat View, AM 20, Frere Road, Saddar, Akber Road, Karachi",
        "phone": ["0321-2721818"],
        "location": "https://www.google.com/maps?q=24.85955810546875,67.02307891845703&z=17&hl=en"
      }
    ]
  },
  "Lahore": {
    "data": [
      {
        "id": 9,
        "name": "Agro Power",
        "address": "Main Zari Market, Opposite New Sabzi Mandi, Kacha Gajumata.",
        "phone": ["0322-4066637"],
        "location": "https://www.google.com/maps/place/Agro+Power+Machinery+Store/@31.389671,74.3435202,17z/data=!4m6!3m5!1s0x39190763953c679f:0x68a456bae1137cfb!8m2!3d31.388827!4d74.3435149!16s%2Fg%2F11dz3sw05q?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 10,
        "name": "Agro Power",
        "address": "Plot # 10, Sector C-1 Block 2, Main College Road, Near Lajhna Chowk.",
        "phone": ["0310-0338666"],
        "location": "https://www.google.com/maps/place/31%C2%B026'53.8%22N+74%C2%B017'48.4%22E/@31.4482556,74.2969652,19z/data=!4m4!3m3!8m2!3d31.4482778!4d74.2967778?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Rawalpindi": {
    "data": [
      {
        "id": 11,
        "name": "Noman Brothers",
        "address": "Shop # R-286, Circular Road Waris Khan Rawalpindi",
        "phone": ["0347-7788884", "0323-8557588"],
        "location": "https://www.google.com/maps/place/Noman+Brothers/@33.6200101,73.0644315,17z/data=!3m1!4b1!4m6!3m5!1s0x38df94c1e2dfe7eb:0xd3a30759412f3e7f!8m2!3d33.6200101!4d73.0644315!16s%2Fg%2F11g6vjcc7z?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Wah cant": {
    "data": [
      {
        "id": 12,
        "name": "Modern Auto Mart",
        "address": "P/134, Opposite Shareef Hospital, G.T. Road, Wah Cantt.",
        "phone": ["0321-9951052"],
        "location": "https://www.google.com/maps/place/Modern+Auto+Mart,+Main+GTR+Wah+Cantt/@33.7844095,72.7196877,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfa75975a101f7:0x77abf5f2fd55e294!8m2!3d33.7844095!4d72.7196877!16s%2Fg%2F11vkn1fpnm?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Multan": {
    "data": [
      {
        "id": 13,
        "name": "Zavi's Garage",
        "address": "City Plaza, Opposite Allied Bank Near Rasheedabad Khanewal Road, Multan.",
        "phone": ["0328-8852815", "0328-8852814"],
        "location": "https://www.google.com/maps/place/Zavi%E2%80%99s+Garage/@30.2104064,71.4857421,17z/data=!4m6!3m5!1s0x393b3500310c9aed:0x33ae2544b425a67c!8m2!3d30.2102577!4d71.4866204!16s%2Fg%2F11vwx3_007?coh=209933&entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      },
      {
        "id": 23,
        "name": "Multan Company Outlet",
        "address": "Benling by Crown Group - Multan Company Outlet Motorcycle Parts Auto Plaza, Near BCG CHOWK, Multan",
        "phone": ["0321-7309005"],
        "location": "https://www.google.com/maps/place/30%C2%B010'22.5%22N+71%C2%B029'42.3%22E/@30.172905,71.4924965,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.172905!4d71.4950714?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Rahim Yar Khan": {
    "data": [
      {
        "id": 14,
        "name": "Ghaznavi Traders(Main Branch )",
        "address": "Bypass Road, Opposite KIA Motors Showroom, Rahim Yar Khan",
        "phone": ["0302-8770666"],
        "location": "https://www.google.com/maps/place/28%C2%B026'14.1%22N+70%C2%B017'49.6%22E/@28.4372261,70.2962525,19z/data=!4m4!3m3!8m2!3d28.43725!4d70.2971111?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Sadiqabad": {
    "data": [
      {
        "id": 15,
        "name": "Ghaznavi Traders(sub branch)",
        "address": "Jamal Din Road, Sadiqabad",
        "phone": ["0302-8770666"],
        "location": "https://www.google.com/maps/place/28%C2%B018'43.3%22N+70%C2%B007'31.7%22E/@28.3119315,70.1256801,21z/data=!4m4!3m3!8m2!3d28.3120278!4d70.1254722?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Sukkur": {
    "data": [
      {
        "id": 16,
        "name": "Ghauri Electric Showroom",
        "address": "Shop #13, 14, Ayub Gate, Sukkur",
        "phone": ["0313-3349701"],
        "location": "https://www.google.com/maps/place/27%C2%B041'56.5%22N+68%C2%B051'58.3%22E/@27.6991039,68.8655764,18z/data=!4m4!3m3!8m2!3d27.6990278!4d68.8661944?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Khanpur": {
    "data": [
      {
        "id": 17,
        "name": "Qadri Trading",
        "address": "Nawa Kot Road, Opposite Taqwa Islamic Bank, Khanpur",
        "phone": ["0303-6177797"],
        "location": "https://www.google.com/maps/place/28%C2%B039'22.1%22N+70%C2%B039'27.3%22E/@28.6559224,70.6568638,18z/data=!4m4!3m3!8m2!3d28.6561389!4d70.6575833?hl=en&entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      }
    ]
  },
  "Gujranwala": {
    "data": [
      {
        "id": 18,
        "name": "Sunny Motors",
        "address": "Next to Sunny Star F/S,Attock Petrol Pump, Sialkot Bypass Road, Gujranwala, Punjab, Pakistan",
        "phone": ["0345-6541144", "0300-7888020", "0300-7888024"],
        "location": "https://www.google.com/maps/place/32%C2%B010'47.2%22N+74%C2%B013'32.9%22E/@32.1797791,74.2232247,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.1797791!4d74.2257996?q=32.1797790527344,74.2257995605469&entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
      }
    ]
  },
  "Hasilpur": {
    "data": [
      {
        "id": 19,
        "name": "SM Motors",
        "address": "17B Block-Y Satellite Town, Chunawala Road, Hasilpur",
        "phone": ["0308-1266664", "0300-1266664"],
        "location": "https://www.google.com/maps/place/SM+Motors/@29.6914023,72.560276,17z/data=!3m1!4b1!4m6!3m5!1s0x393c570014e37a2f:0xc3a1db6905b0f39f!8m2!3d29.6914023!4d72.560276!16s%2Fg%2F11w873y6n4?q=MHR6+H46+SM+Motors,+Bhatta+Colony+Satellite+Town,+Hasilpur,+Bahawalpur,+Punjab&ftid=0x393c570014e37a2f:0xc3a1db6905b0f39f&lucs=,94226969,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_st=iw&entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
      }
    ]
  },
  "Lodhran": {
    "data": [
      {
        "id": 20,
        "name": "Al Ahmad Motors",
        "address": "Mall of Lodhran, Opposite Hamsafar Petrol Pump, Lodhran.",
        "phone": ["0300-5466685"],
        "location": "https://www.google.com/maps/place/29%C2%B031'11.4%22N+71%C2%B038'04.0%22E/@29.5199075,71.6347203,19z/data=!4m4!3m3!8m2!3d29.5198333!4d71.6344444?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 21,
        "name": "Welcome Motors",
        "address": "Lodhran Road, Malsi Chowk. Kehror Pakka",
        "phone": ["0301-7724408"],
        "location": "https://www.google.com/maps/place/29%C2%B038'06.1%22N+71%C2%B054'06.7%22E/@29.6350305,71.899282,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.6350305!4d71.9018569?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Mardan": {
    "data": [
      {
        "id": 22,
        "name": "Fazl e Raziq Motors",
        "address": "Opposite Allied Bank Cantt Bazar Mardan",
        "phone": ["0937-861234"],
        "location": "https://www.google.com/maps/place/34%C2%B012'01.1%22N+72%C2%B002'27.7%22E/@34.2003001,72.0384648,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.2003001!4d72.0410397?coh=225988&entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D"
      }
    ]
  },
  "Umerkot": {
    "data": [
      {
        "id": 24,
        "name": "Dileep Evs",
        "address": "Main Mirpurkhas Road, Umarkot",
        "phone": ["0333-3308209", "0342-3645691"],
        "location": "https://www.google.com/maps/place/32%C2%B010'47.2%22N+74%C2%B013'32.9%22E/@32.1797791,74.2232247,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.1797791!4d74.2257996?q=32.1797790527344,74.2257995605469&entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
      }
    ]
  },
  "Mithi": {
    "data": [
      {
        "id": 25,
        "name": "S.S Ev Center",
        "address": "Mian Mithi, Islamkot road, Gari Khuta Mithi",
        "phone": ["0333-2510525"],
        "location": "https://www.google.com/maps/place/24%C2%B043'45.5%22N+69%C2%B048'33.0%22E/@24.7371354,69.8088726,14z/data=!4m4!3m3!8m2!3d24.729291!4d69.809173?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Nawabshah": {
    "data": [
      {
        "id": 26,
        "name": "Karam Sarkar EV's Center",
        "address": "House #64 Talha Residency near qenci pull Nawabshah",
        "phone": ["0335-3226900"],
        "location": "https://www.google.com/maps/place/24%C2%B051'36.7%22N+67%C2%B020'02.2%22E/@24.8601894,67.3313561,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8601894!4d67.333931?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  }
}