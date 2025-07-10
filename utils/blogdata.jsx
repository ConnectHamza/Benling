// home/data.js
import Blog1 from "../public/assets/Blogs/Benefits-of-Switching.webp"
import Blog2 from "../public/assets/Blogs/EV-Vs-Petrol-Monthly-Budgeting.webp"
import Blog3 from "../public/assets/Blogs/Electric-Bike-VS-Petrol-Bike.webp"
import Blog4 from "../public/assets/Blogs/Crown-Electric-Mobility-Lithium-Iron-Phosphate-(LiFePO₄).webp"
import Blog5 from "../public/assets/Blogs/Crown-Electric-Mobility-Blog.webp"
import Blog6 from "../public/assets/Blogs/blog4.webp";
import Blog7 from "../public/assets/Blogs/Blog3.jpeg"
import Blog8 from "../public/assets/Blogs/Blogheader2.jpg"
import Blog9 from "../public/assets/Blogs/BlogHeader.png";
import Author1 from "../public/assets/Blogs/Author/Rehman_Musa_Aqil.svg"
import Author2 from "../public/assets/Blogs/Author/S_Ali_Qureshi.svg"
import Author3 from "../public/assets/Blogs/Author/Sabeen_Ammad.svg"
import Author4 from "../public/assets/Blogs/Author/Umaima_Neha_Khan.svg"
import GraphineBattery from "../components/Blog/BlogContent/GraphineBattery";
import LaunchCeremony from "../components/Blog/BlogContent/LaunchCeremony";
import CrownBlog from "../components/Blog/BlogContent/CrownBlogs";
import MultanLaunchBlog from "@/components/Blog/BlogContent/MultanLaunchBlog";
import LiFePO4Blog from "@/components/Blog/BlogContent/ElectricMobility";
import IronPhospate from "@/components/Blog/BlogContent/IronPhospate";
import ElectricVSPetrol from "@/components/Blog/BlogContent/ElectricVSPetrol";
import EvVsPetrol from "@/components/Blog/BlogContent/EvVsPetrol";
import BenefitsOfSwitching from "@/components/Blog/BlogContent/BenefitsOfSwitching";


export const blogs = [
     {
    slug: "benefits-of-switching-to-evs-in-pakistan",
    title: "Benefits of Switching to EVs in Pakistan",
    subtitle: "As Pakistan faces rising fuel costs, environmental degradation, and urban congestion, electric vehicles (EVs)—especially two-wheelers—are emerging as a sustainable solution. This blog explores the latest 2024–2025 EV policy framework, government incentives, and market outlook in Pakistan, while highlighting how Crown Electric Mobility is aligned with these national goals.",
    coverImage: Blog1.src,
    category: "EV Insights",
    author: "Rehman Musa Aqil",
    authorImage: Author1.src,
    date: "June 30th 2025",
    readTime: 7,
    headings: [
      { id: "lifepo4", text: "What is LiFePO₄?" },
      { id: "performance-series", text: "Crown Electric Performance Series" },
      { id: "future-of-ev", text: "Future of EVs in Pakistan" },
    ],
    renderContent: () => <BenefitsOfSwitching />
  },
   {
    slug: "ev-vs-petrol-monthly-budgeting-how-crown-electric-mobility-helps-you-save-big",
    title: "EV vs Petrol Monthly Budgeting: How Crown Electric Mobility Helps You Save Big",
    subtitle: "Fuel prices in Pakistan are hitting new highs, and motorcyclists are feeling the pinch every day. Whether you commute for work or leisure, owning a petrol bike means a consistent monthly spend. Enter electric bikes – especially those by Crown Electric Mobility, offering a smarter, cost-effective alternative. In this blog, we break down the monthly budgeting differences between petrol and electric motorcycles, showing how much you can save over time.",
    coverImage: Blog2.src,
    category: "Comparisons",
    author: "Rehman Musa Aqil",
    authorImage: Author1.src,
    date: "June 23rd 2025",
    readTime: 7,
    headings: [
      { id: "lifepo4", text: "What is LiFePO₄?" },
      { id: "performance-series", text: "Crown Electric Performance Series" },
      { id: "future-of-ev", text: "Future of EVs in Pakistan" },
    ],
    renderContent: () => <EvVsPetrol />
  },
          {
    slug: "electric-bikes-vs-petrol-bikes-whats-the-real-differences",
    title: "Electric Bikes vs Petrol Bikes: What’s the Real Difference?",
    subtitle: "These days, everyone’s talking about cleaner and smarter ways to get around—and bikes are no exception. For years, gasoline-powered sports bikes have dominated the roads, but now electric bikes are stepping in and grabbing attention.",
    coverImage: Blog3.src,
    category: "Comparisons",
    author: "Rehman Musa Aqil",
    authorImage: Author1.src,
    date: "June 23rd 2025",
    readTime: 7,
    headings: [
      { id: "lifepo4", text: "What is LiFePO₄?" },
      { id: "performance-series", text: "Crown Electric Performance Series" },
      { id: "future-of-ev", text: "Future of EVs in Pakistan" },
    ],
    renderContent: () => <ElectricVSPetrol />
  },
        {
    slug: "why-lithium-iron-phosphate-batteries-are-revolutionizing-pakistans-electric-mobility-sector",
    title: "Why Lithium Iron Phosphate (LiFePO₄) Batteries Are Revolutionizing Pakistan’s Electric Mobility Sector",
    subtitle: "Lithium Iron Phosphate (LiFePO₄) batteries are a type of lithium-ion battery known for their exceptional safety, longevity, and thermal stability. Unlike conventional lead-acid or Nickel Manganese Cobalt (NMC) batteries, LiFePO₄ chemistry resists overheating and degradation, making it ideal for Pakistan’s extreme heat .",
    coverImage: Blog4.src,
    category: "EV Insights ",
    author: "Sabheen Ammad",
    authorImage: Author3.src,
    date: "June 19th 2025",
    readTime: 7,
    headings: [
      { id: "lifepo4", text: "What is LiFePO₄?" },
      { id: "performance-series", text: "Crown Electric Performance Series" },
      { id: "future-of-ev", text: "Future of EVs in Pakistan" },
    ],
    renderContent: () => <IronPhospate />
  },
      {
    slug: "why-crown-electric-mobility-performance-series-trusts-lithium-lifepo4-batteries-for-exceptional-ev-performance",
    title: "Lithium Batteries for Exceptional EV Performance",
    subtitle: "In the fast-paced evolution of electric mobility, reliable battery technology lies at the heart of every high‑performing electric vehicle.",
    coverImage: Blog5.src,
    category: "EV Insights",
    author: "Umaima Neha Khan",
    authorImage: Author4.src,
    date: "June 18th 2025",
    readTime: 7,
    headings: [
      { id: "what-is-liFePO₄", text: "What is LiFePO₄?" },
      { id: "advantages", text: "Advantages of LiFePO₄" },
      { id: "comparison", text: "LiFePO₄ vs. Other Batteries" },
      { id: "performance-series", text: "Crown Electric Performance Series" }
    ],
    renderContent: () => <LiFePO4Blog />
  },
  {
    slug: "crown-electric-mobility-lights-up-the-multan-launch-event",
    title: " A Grand Debut: Crown Electric Mobility Lights Up the Multan Launch Event with the Revolutionary Performance Series",
    subtitle: `Crown Electric Mobility unveiled its powerful new Performance Series in Multan, marking a major step toward sustainable transport in Pakistan. Discover the models, features, and the city's first Tier A EV showroom.`,
    coverImage: Blog6.src,
    date: "May 27th 2025",
    category: "Partnershops & Launches",
    author: "Umaima Neha Khan",
    authorImage: Author4.src,
    readTime: 3,
    headings: [
      { id: "grand-debut", text: "A Grand Debut" },
      { id: "launch-innovation", text: "Launching Innovation" },
      { id: "showroom-debuts", text: "Showroom Debuts" },
      { id: "community-engagement", text: "Community Engagement" },
    ],
    renderContent: () => <MultanLaunchBlog />
  },
  {
    slug: "crown-dealership-visit",
    title: " Crown Electric Mobility's Director Business Development Engages with Karachi Dealerships",
    subtitle: `In line with Crown Electric Mobility’s mission to promote accessible, sustainable transportation across Pakistan, Director – Business Development, Mr. Zohaib Farhan, recently visited Crown Electric Mobility’s dealerships in Karachi. Accompanied by Regional Sales Manager Sindh, Mr. Mubashir Awam, and Area Sales Manager, Mr. Yaseen Pinjara, the visit reinforced the company’s commitment to building strong, on-ground relationships with its dealer partners.`,
    coverImage: Blog7.src,
    category: "Partnershops & Launches",
    author: "Umaima Neha Khan",
    authorImage: Author4.src,
    date: "May 23rd 2025",
    readTime: 3,
    headings: [
      { id: "crown-group", text: "Strengthening Market Ties" },
      { id: "approach", text: "Customer-Centric Approach" },
    ],
    renderContent: () => <CrownBlog />
  },
  {
    slug: "crown-grand-launch-event",
    title: "Crown Electric Mobility Gears Up for a Grand Launch Event in Multan on May 23rd, 2025",
    subtitle: `Crown Group, the undisputed leader in Pakistan's automotive and energy innovation sector, is all set to make history again with a grand launch event in Multan. The event, scheduled for May 23rd, 2025, marks a significant milestone in Crown Electric Mobility's journey as the company prepares to unveil its first exclusive outlet in Multan, a major step toward expanding sustainable transportation in the region.
    This exclusive dealer-only event will also feature the first-ever launch and showcase of five brand-new electric scooter variants, designed for the future of eco-friendly commuting in Pakistan.`,
    coverImage: Blog8.src,
    category: "Partnershops & Launches",
    author: "Sabheen Ammad",
    authorImage: Author3.src,
    date: "May 23rd 2025",
    readTime: 7,
    headings: [
      { id: "crown-group", text: "Crown Group: Driving Innovation Since Day One?" },
      { id: "expect", text: "What to Expect: A New Generation of Performance" },
      { id: "highlights", text: "Event Highlights: A Grand Affair of Vision and Progress" },
      { id: "matters", text: "Why This Event Matters: A New Era Begins in Multan" },
      { id: "future", text: "Be a Part of the Future" }

    ],
    renderContent: () => <LaunchCeremony />
  },
  {
    slug: "graphene-battery-future",
    title: "Graphene The Future of Battery Technology",
    subtitle: "In a world where cutting-edge technology is transforming our daily lives, the only bottleneck seems to be the outdated rechargeable batteries that power our devices. Traditional lithium-ion batteries, while providing consistent power and acceptable lifespans, face challenges such as low capacity, extended charging times, and limited overall charging cycles. Imagine a future where your smartphone, motorcycles, and other gadgets last a week on a single charge and charge in a fraction of the time—thanks to Graphene, this future is now within reach.",
    coverImage: Blog9.src,
    category: "Technology",
    author: "Sabheen Ammad",
    authorImage: Author3.src,
    date: "May 15th 2025",
    readTime: 7,
    headings: [
      { id: "what-is-graphene", text: "What is Graphene?" },
      { id: "graphene-vs-batteries", text: "Graphene vs. Other Rechargeable Batteries" },
      { id: "future-of-graphene", text: "The Future of Graphene in the Battery Industry" }
    ],
    renderContent: () => <GraphineBattery />
  },
];
