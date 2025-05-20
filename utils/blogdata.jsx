// home/data.js
import BlogHeader from "../public/assets/Blogs/BlogHeader.png";
import GraphineBattery from "../components/Blog/BlogContent/GraphineBattery";
import LaunchImage from "../public/assets/Blogs/Blogheader2.jpg"
import LaunchCeremony from "../components/Blog/BlogContent/LaunchCeremony";

export const blogs = [
  {
    slug: "graphene-battery-future",
    title: "Graphene The Future of Battery Technology",
    subtitle: "In a world where cutting-edge technology is transforming our daily lives, the only bottleneck seems to be the outdated rechargeable batteries that power our devices. Traditional lithium-ion batteries, while providing consistent power and acceptable lifespans, face challenges such as low capacity, extended charging times, and limited overall charging cycles. Imagine a future where your smartphone, motorcycles, and other gadgets last a week on a single charge and charge in a fraction of the time—thanks to Graphene, this future is now within reach.",
    coverImage: BlogHeader.src,
    date: "May 15th 2025",
    readTime: 7,
    headings: [
      { id: "what-is-graphene", text: "What is Graphene?" },
      { id: "graphene-vs-batteries", text: "Graphene vs. Other Rechargeable Batteries" },
      { id: "future-of-graphene", text: "The Future of Graphene in the Battery Industry" }
    ],
    renderContent: () => <GraphineBattery />
  },
  {
    slug: "crown-grand-launch-event",
    title: "Crown Electric Mobility Gears Up for a Grand Launch Event in Multan on May 23rd, 2025",
    subtitle: `Crown Group, the undisputed leader in Pakistan's automotive and energy innovation sector, is all set to make history again with a grand launch event in Multan. The event, scheduled for May 23rd, 2025, marks a significant milestone in Crown Electric Mobility's journey as the company prepares to unveil its first exclusive outlet in Multan, a major step toward expanding sustainable transportation in the region.
    This exclusive dealer-only event will also feature the first-ever launch and showcase of five brand-new electric scooter variants, designed for the future of eco-friendly commuting in Pakistan.`,
    coverImage: LaunchImage.src,
    date: "May 23rd 2025",
    readTime: 7,
    headings: [
      { id: "crown-group", text: "Crown Group: Driving Innovation Since Day One?" },
      { id: "expect", text: "What to Expect: A New Generation of Performance" },
      { id: "highlight", text: "Event Highlights: A Grand Affair of Vision and Progress" },
      { id: "matters", text: "Why This Event Matters: A New Era Begins in Multan" },
      { id: "future", text: "Be a Part of the Future" }

    ],
    renderContent: () => <LaunchCeremony />
  },
];
