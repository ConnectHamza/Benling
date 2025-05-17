'use client'
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import BlogImage1 from "../../public/assets/Home/Blogs/Blog1.png"
import BlogImage2 from "../../public/assets/Home/Blogs/Blog2.png"
import BlogImage3 from "../../public/assets/Home/Blogs/Blog3.png"
import BlogImage4 from "../../public/assets/Home/Blogs/Blog4.png"

import Image from "next/image";
import Typography from "@/components/GradientText/Typography";

const blogs = [
  {
    id: 1,
    image: BlogImage1.src,
    date: "News • May 12, 2025",
    title: "Why Electric Scooters Are Changing Urban Travel",
    subheading:
      "Discover how EV scooters are making city commutes cleaner, cheaper, and more efficient than ever before.",
  },
  {
    id: 2,
    image: BlogImage2.src,
    date: "News • May 12, 2025",
    title: "Inside Pakistan’s Growing EV Network",
    subheading:
      "From major cities to towns, see how Beeling is accelerating the adoption of electric mobility nationwide.",
  },
  {
    id: 3,
    image: BlogImage3.src,
    date: "News • May 12, 2025",
    title: "5 Reasons to Switch to an EV Scooter Today",
    subheading:
      "Lower fuel costs, zero emissions, and a smoother ride—here’s why you need to ride electric today.",
  },
  {
    id: 3,
    image: BlogImage4.src,
    date: "News • May 12, 2025",
    title: "Behind the Design: The Tech Inside Knight Rider",
    subheading:
      "A closer look at the powerful components and smart engineering that make Knight Rider one of our most advanced EVs.",
  },
];

export default function RecentBlogsCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <section className="bg-white text-black py-10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <Typography variant="h2-medium-magistral">
          Recent Blog/News
        </Typography>

        {/* Scrollable Blog Cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[350px] lg:w-[400px] py-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-[200px] sm:h-[250px] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Typography variant="subtext-regular-jakarta" className="text-[#989898] mb-4">
                    {blog.date}
                  </Typography>
                  <Typography variant="h5-medium-jakarta" className="mb-2 leading-tight">
                    {blog.title}
                  </Typography>
                  <Typography variant="body-regular-jakarta" className=" text-[#000] leading-snug">
                    {blog.subheading}
                  </Typography>
                </div>
                <div className="mt-4">
                  <button className="text-[#000] hover:underline text-sm font-semibold font-jakarta flex flex-row items-center">
                    <Typography variant="subtext-bold-jakarta">
                      Read More
                    </Typography>
                    <div className="mx-3">
                      <ChevronRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
            <button className="text-[14px] h-[35px] text-black px-4 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition flex flex-row items-center">
              
              <Typography variant="subtext-regular-jakarta">
              View All Blog/News

              </Typography>
              <div className="mx-3">
                <ArrowUpRight size={14} />
              </div>
            </button>

            <div className="flex gap-3 ml-auto">
              <button
                onClick={() => scroll('left')}
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
