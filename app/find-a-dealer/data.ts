import Feature1IMG from '../../public/assets/flash/Features/Feature1.png';
import Feature2IMG from '../../public/assets/flash/Features/Feature2.png';
import Feature3IMG from '../../public/assets/flash/Features/Feature3.webp';
import Feature4IMG from '../../public/assets/flash/Features/Feature4.png';
import Feature5IMG from '../../public/assets/flash/Features/Feature5.png';
import Feature6IMG from '../../public/assets/flash/Features/Feature6.png';


export const featureHeader = {
    featureTitle: 'Designed for Everyday Power and Ease',
    featureText: `Experience a smart balance of performance and practicality. Flash’s features are crafted to deliver smooth rides, everyday comfort, and effortless control in every journey.`,
    bgColor: 'bg-white',
    textColor: 'text-black-30',
  };


  export const aboutSpecificationsData = [
    { title: "Motor", value: "1200W Brushless" },
    { title: "Battery", value: "60V.35Ah" },
    { title: "Battery Type", value: "Graphene" },
    { title: "Speed Mode", value: " 4 Mode" },
    { title: "Charger", value: "60V.6A" },
    { title: "Charging Time", value: "6 Hours" },
    { title: "Dimensions", value: "1830 x 695 x 1075mm" },
];

export const aboutSpecificationsData2 = [
    { title2: "Net Weight", value2: "108KG" },
    { title2: "Angle", value2: "≤15°" },
    { title2: "Speed", value2: "55-65km/h" },
    { title2: "Wheelbase", value2: "1315mm" },
    { title2: "Ground Clearance", value2: "120mm" },
    { title2: "Loading Capacity", value2: "200 Kg" },
    { title2: "Braking System", value2: "Fr.Disc/Re.Disc" },
];


export const featuresData = [
    {
        img: Feature1IMG,
        alt: 'Powerful, Bold Front Design',
        title: 'Powerful, Bold Front Design',
        description: 'Make an impression with aerodynamic lines, a sharp LED headlamp, and sporty detailing. Flash’s front profile blends performance with striking street presence.',
        
    },
    {
        img: Feature2IMG,
        alt: 'Smart Access with NFC Key Card',
        title: 'Smart Access with NFC Key Card',
        description: 'Enjoy seamless, keyless ignition with a tap. The NFC Key Card adds smart convenience and futuristic control to every ride, replacing traditional keys for quick and secure starts.'
    },
    {
        img: Feature3IMG,
        alt: 'Heavy-Duty Safeguards',
        title: 'Heavy-Duty Safeguards',
        description: 'Stay protected with strong side and rear frames that absorb impact and increase stability—especially when riding with passengers or carrying cargo.'
    },
    {
        img: Feature4IMG,
        alt: 'Side Stand Sensor',
        title: 'Side Stand Sensor',
        description: `Enhance safety with a sensor that cuts off ignition when the stand is down, preventing unintentional starts—ideal for busy traffic and uneven roads.`
    },
    {
        img: Feature5IMG,
        alt: 'Ergonomic Handlebar & Advanced Digital Display',
        title: 'Ergonomic Handlebar & Advanced Digital Display',
        description: `Ride in comfort with a streamlined handlebar and easy controls. The digital display keeps you informed with real-time ride data, battery, and cruise control support.`
    },
    {
        img: Feature6IMG,
        alt: 'Durable Tubeless Tyres & Disc Braking System',
        title: 'Durable Tubeless Tyres & Disc Braking System',
        description: 'Ride with confidence on rugged roads. Tubeless tyres offer better grip and lower maintenance, while the dual disc brakes ensure quick, controlled stops.'
    },

];

export const faqsData = [
    {
        question: "What services do Crown Electric Mobility dealers offer?",
        answer: "You can use our city dropdown menu to search for authorized Crown Electric Mobility dealers in your area. The map and contact details will help you connect easily."
    },
    {
        question: "Can I book a test ride through a dealer?",
        answer: "Yes, many of our dealers offer test ride bookings. Please contact your nearest dealer directly or visit their showroom."
    },
    {
        question: "Do Crown Electric Mobility dealers offer financing or installment plans?",
        answer: "Crown Electric Mobility dealers do not directly provide financing options. However, you can independently apply for installment plans through our trusted partners like Alfa Mall (online), Meezan Bank, and MCB (offline). Once approved, you can complete your purchase through the nearest authorized dealer."
    },
    {
        question: "Are all listed dealers authorized by Crown Electric Pakistan?",
        answer: "Yes, every dealer listed on our website is officially authorized and trained by Crown Electric Pakistan to ensure quality service and genuine products."
    },
];


export const cities =
{
  "Karachi": {
    "data": [
      {
        "id": 1,
        "name": "CROWN AWAMI MARKAZ",
        "address": "Plot # St 1/A2, Shop # LG 06 & 07, City Centre Mall, Near Awami Markaz, Opp. Lal Qila, Main Shahrah-e-Faisal, Karachi.",
        "phone": ["0321-2721818"],
        "location": "https://www.google.com/maps/place/24%C2%B052'15.8%22N+67%C2%B005'25.8%22E/@24.8710559,67.087915,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8710559!4d67.0904899?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 2,
        "name": "ST TRADERS BAHRIA TOWN",
        "address": "Shop # 01, B-142, Midway Commercial, Bahria Town, Karachi.",
        "phone": ["0339-8888991","0321-8777941"],
        "location": "https://www.google.com/maps/place/25%C2%B001'51.5%22N+67%C2%B018'33.2%22E/@25.0307483,67.3092503,17z/data=!4m4!3m3!8m2!3d25.0309722!4d67.3092222?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 3,
        "name": "AL HAMD TRADERS EV",
        "address": "Shop # A-76, 4 DOTS Market, Opposite Al Barka Bank, Malir Cantt, Karachi.",
        "phone": ["0300-2875705"],
        "location": "https://www.google.com/maps/place/24%C2%B055'52.1%22N+67%C2%B012'07.3%22E/@24.9311274,67.1994407,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.9311274!4d67.2020156?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 4,
        "name": "STAR ELECTRONICS",
        "address": "Shop #b/7, B/8, KDA Flats Phase 2, Shadman Town No. 1 North Karachi",
        "phone": ["0316-3331332"],
        "location": "https://www.google.com/maps/place/24%C2%B057'27.5%22N+67%C2%B003'36.2%22E/@24.9576315,67.0574896,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.9576315!4d67.0600645?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 5,
        "name": "SR Motors",
        "address": "Shop No. AM-301 C, Opposite Naveed Clinic, Frere Road, Saddar, Karachi.",
        "phone": ["021-32743280", "0300-2167593"],
        "location": "https://www.google.com/maps/place/SR+Motors/@24.859441,67.0224593,20z/data=!4m6!3m5!1s0x3eb33e0d53584a7f:0x99827626e9e4a84a!8m2!3d24.8593783!4d67.0225773!16s%2Fg%2F11xb_y8tr?entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      },
      {
        "id": 6,
        "name": "SHARI AUTOMOBILES",
        "address": "Shop # 15 Rizvi Chamber, Akber Road, Karachi",
        "phone": ["0321-9253100"],
        "location": "https://www.google.com/maps/place/24%C2%B051'37.0%22N+67%C2%B001'22.2%22E/@24.860265,67.0202642,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.860265!4d67.0228391?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 7,
        "name": "RAFIQ AUTO EXCHANGE",
        "address": "Up Market - North Karachi, Karachi",
        "phone": ["0311-1123787"],
        "location": "https://www.google.com/maps/place/24%C2%B058'13.8%22N+67%C2%B004'06.5%22E/@24.970499,67.0658837,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.970499!4d67.0684586?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 8,
        "name": "ZAINAB ELECTRIC VEHICLES",
        "address": "Shop # 5, Zainab Palace Sector, PMT Police Station Road, next to Sarhandi Dawakhana, Memon Goth, Karachi.",
        "phone": ["0333-3373634"],
        "location": "https://www.google.com/maps/place/24%C2%B051'34.7%22N+67%C2%B001'22.7%22E/@24.859642,67.0203896,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.859642!4d67.0229645?q=24.8596420288086,67.0229644775391&entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      },
      {
        "id": 27,
        "name": "CROWN SOLAR",
        "address": "Shop # KS-315, Regal Chowk, Saddar",
        "phone": ["0321-2721818"],
        "location": "https://www.google.com/maps/place/24%C2%B051'38.1%22N+67%C2%B001'28.0%22E/@24.8606198,67.0235302,18.18z/data=!4m4!3m3!8m2!3d24.8605872!4d67.0244346?coh=225988&entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D"
      },
      {
        "id": 28,
        "name": "M. AYAAN EV CENTER",
        "address": "Main National Highway, Opposite Quaid-e-Azam Park, Steel Town, Karachi.",
        "phone": ["0334-3704587"],
        "location": "https://www.google.com/maps/place/24%C2%B051'36.7%22N+67%C2%B020'02.2%22E/@24.8601894,67.3313561,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8601894!4d67.333931?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 29,
        "name": "AKBAR ROAD OUTLET",
        "address": "Secretariat View, AM 20, Frere Road, Saddar, Akber Road, Karachi. ",
        "phone": ["0321-2721818"],
        "location": "https://www.google.com/maps?q=24.85955810546875,67.02307891845703&z=17&hl=en"
      }
    ]
  },
  "Lahore": {
    "data": [
      {
        "id": 9,
        "name": "AGRO POWER",
        "address": "Main Zari Market, Opposite New Sabzi Mandi, Kacha Gajumata, Lahore.",
        "phone": ["0322-4066637"],
        "location": "https://www.google.com/maps/place/Agro+Power+Machinery+Store/@31.389671,74.3435202,17z/data=!4m6!3m5!1s0x39190763953c679f:0x68a456bae1137cfb!8m2!3d31.388827!4d74.3435149!16s%2Fg%2F11dz3sw05q?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 10,
        "name": "AGRO POWER",
        "address": "Plot # 10, Sector C-1 Block 2, Main College Road, Near Lajhna Chowk, Lahore.",
        "phone": ["0310-0338666"],
        "location": "https://www.google.com/maps/place/31%C2%B026'53.8%22N+74%C2%B017'48.4%22E/@31.4482556,74.2969652,19z/data=!4m4!3m3!8m2!3d31.4482778!4d74.2967778?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Rawalpindi": {
    "data": [
      {
        "id": 11,
        "name": "NOMAN BROTHERS",
        "address": "Shop # R-286, Circular Road Waris Khan, Rawalpindi.",
        "phone": ["0347-7788884", "0323-8557588"],
        "location": "https://www.google.com/maps/place/Noman+Brothers/@33.6200101,73.0644315,17z/data=!3m1!4b1!4m6!3m5!1s0x38df94c1e2dfe7eb:0xd3a30759412f3e7f!8m2!3d33.6200101!4d73.0644315!16s%2Fg%2F11g6vjcc7z?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Wah Cantt": {
    "data": [
      {
        "id": 12,
        "name": "MODERN AUTO MART",
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
        "name": "MULTAN COMPANY OUTLET",
        "address": "Motorcycle Parts Auto Plaza, Near BCG Chowk, Multan.",
        "phone": ["0321-7309005"],
        "location": "https://www.google.com/maps/place/Zavi%E2%80%99s+Garage/@30.2104064,71.4857421,17z/data=!4m6!3m5!1s0x393b3500310c9aed:0x33ae2544b425a67c!8m2!3d30.2102577!4d71.4866204!16s%2Fg%2F11vwx3_007?coh=209933&entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      },
    ]
  },
  "Rahim Yar Khan": {
    "data": [
      {
        "id": 30,
        "name": "GHAZNAVI TRADERS (MAIN BRANCH)",
        "address": "Canal Avenue Road, Near Younis Sweet Bakery, Rahim Yar Khan.",
        "phone": ["0303-0306776"],
        "location": "https://www.google.com/maps?q=28.430688858032227,70.30363464355469&z=17&hl=en"
      },
      {
        "id": 14,
        "name": "GHAZNAVI TRADERS RYK 2",
        "address": "Bypass Road, Opposite Kia Motors Showroom, Rahim Yar Khan. ",
        "phone": ["0302-8770666"],
        "location": "https://www.google.com/maps/place/28%C2%B026'14.1%22N+70%C2%B017'49.6%22E/@28.4372261,70.2962525,19z/data=!4m4!3m3!8m2!3d28.43725!4d70.2971111?hl=en&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Sadiqabad": {
    "data": [
      {
        "id": 15,
        "name": "GHAZNAVI TRADERS (SUB BRANCH)",
        "address": "Jamal Din Road, Sadiqabad.",
        "phone": ["0302-8770666"],
        "location": "https://www.google.com/maps/place/28%C2%B018'43.3%22N+70%C2%B007'31.7%22E/@28.3119315,70.1256801,21z/data=!4m4!3m3!8m2!3d28.3120278!4d70.1254722?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Sukkur": {
    "data": [
      {
        "id": 16,
        "name": "GHAURI ELECTRIC SHOWROOM ",
        "address": "Shop #13, 14, Ayub Gate, Sukkur.",
        "phone": ["0313-3349701"],
        "location": "https://www.google.com/maps/place/27%C2%B041'56.5%22N+68%C2%B051'58.3%22E/@27.6991039,68.8655764,18z/data=!4m4!3m3!8m2!3d27.6990278!4d68.8661944?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Khanpur": {
    "data": [
      {
        "id": 17,
        "name": "QADRI TRADING",
        "address": "Nawa Kot Road, Opposite Taqwa Islamic Bank, Khanpur.",
        "phone": ["0303-6177797"],
        "location": "https://www.google.com/maps/place/28%C2%B039'22.1%22N+70%C2%B039'27.3%22E/@28.6559224,70.6568638,18z/data=!4m4!3m3!8m2!3d28.6561389!4d70.6575833?hl=en&entry=tts&g_ep=EgoyMDI0MDYwNS4wKgBIAVAD"
      }
    ]
  },
  "Gujranwala": {
    "data": [
      {
        "id": 18,
        "name": "SUNNY MOTORS",
        "address": "Next To Sunny Star F/S, Attock Petrol Pump, Sialkot Bypass Road, Gujranwala.",
        "phone": ["0345-6541144", "0300-7888020", "0300-7888024"],
        "location": "https://www.google.com/maps/place/32%C2%B010'47.2%22N+74%C2%B013'32.9%22E/@32.1797791,74.2232247,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.1797791!4d74.2257996?q=32.1797790527344,74.2257995605469&entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
      }
    ]
  },
  "Hasilpur": {
    "data": [
      {
        "id": 19,
        "name": "SM MOTORS",
        "address": "17B Block-Y, Satellite Town, Chunawala Road, Hasilpur.",
        "phone": ["0308-1266664", "0300-1266664"],
        "location": "https://www.google.com/maps/place/SM+Motors/@29.6914023,72.560276,17z/data=!3m1!4b1!4m6!3m5!1s0x393c570014e37a2f:0xc3a1db6905b0f39f!8m2!3d29.6914023!4d72.560276!16s%2Fg%2F11w873y6n4?q=MHR6+H46+SM+Motors,+Bhatta+Colony+Satellite+Town,+Hasilpur,+Bahawalpur,+Punjab&ftid=0x393c570014e37a2f:0xc3a1db6905b0f39f&lucs=,94226969,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_st=iw&entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
      }
    ]
  },
  "Lodhran": {
    "data": [
      {
        "id": 20,
        "name": "AL AHMAD MOTORS",
        "address": "Mall of Lodhran, Opposite Hamsafar Petrol Pump, Lodhran.",
        "phone": ["0300-5466685"],
        "location": "https://www.google.com/maps/place/29%C2%B031'11.4%22N+71%C2%B038'04.0%22E/@29.5199075,71.6347203,19z/data=!4m4!3m3!8m2!3d29.5198333!4d71.6344444?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "id": 21,
        "name": "WELCOME MOTORS",
        "address": "Lodhran Road, Mailsi Chowk, Kehror Pakka، Lodhran.",
        "phone": ["0301-7724408"],
        "location": "https://www.google.com/maps/place/29%C2%B038'06.1%22N+71%C2%B054'06.7%22E/@29.6350305,71.899282,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.6350305!4d71.9018569?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Mardan": {
    "data": [
      {
        "id": 22,
        "name": "FAZL E RAZIQ MOTORS",
        "address": "Opposite Allied Bank, Cantt Bazar, Mardan.",
        "phone": ["0937-861234"],
        "location": "https://www.google.com/maps/place/34%C2%B012'01.1%22N+72%C2%B002'27.7%22E/@34.2003001,72.0384648,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.2003001!4d72.0410397?coh=225988&entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D"
      }
    ]
  },
  "Umarkot": {
    "data": [
      {
        "id": 24,
        "name": "DILEEP EVS",
        "address": "Main Mirpurkhas Road, Umarkot.",
        "phone": ["0333-3308209", "0342-3645691"],
        "location": "https://www.google.com/maps/place/32%C2%B010'47.2%22N+74%C2%B013'32.9%22E/@32.1797791,74.2232247,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.1797791!4d74.2257996?q=32.1797790527344,74.2257995605469&entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD"
      }
    ]
  },
  "Mithi": {
    "data": [
      {
        "id": 25,
        "name": "S.S EV CENTER",
        "address": "Mian Mithi, Islamkot Road, Gari Khuta, Mithi.",
        "phone": ["0333-2510525"],
        "location": "https://www.google.com/maps/place/24%C2%B043'45.5%22N+69%C2%B048'33.0%22E/@24.7371354,69.8088726,14z/data=!4m4!3m3!8m2!3d24.729291!4d69.809173?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D"
      }
    ]
  },
  "Nawabshah": {
    "data": [
      {
        "id": 26,
        "name": "KARAM SARKAR EV'S CENTER",
        "address": "House # 64, Talha Residency, Near Qenci Pull, Nawabshah.",
        "phone": ["0335-3226900"],
        "location": "https://www.google.com/maps/place/24%C2%B051'36.7%22N+67%C2%B020'02.2%22E/@24.8601894,67.3313561,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.8601894!4d67.333931?hl=en&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  }
}