'use client'
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import Link from "next/link";
import { blogs } from "../../utils/blogdata"
import Image from "next/image";
import Typography from "@/components/GradientText/Typography";



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
        <Typography variant="h3-medium-magistral">
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
                key={blog.slug}
                className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[350px] lg:w-[400px] py-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-[200px] sm:h-[250px] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover w-full h-[200px] sm:h-[250px]"
                    />
                  </div>
                  <Typography variant="extra-subtext-regular-jakarta" className="text-[#989898] mb-4">
                    {blog.date}
                  </Typography>
                  <Typography variant="h6-medium-jakarta" className="mb-2 leading-tight line-clamp-2">
                    {blog.title}
                  </Typography>
                  <Typography variant="subtext-regular-jakarta" className=" text-[#000] leading-snug line-clamp-3">
                    {blog.subtitle}
                  </Typography>
                </div>
                <div className="mt-4">
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="text-[#000] hover:underline text-sm font-semibold font-jakarta flex flex-row items-center">
                      <Typography variant="extra-subset-bold-jakarta">
                        Read More
                      </Typography>
                      <div className="mx-3">
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Controls */}
          <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
            <button className="text-[14px] h-[35px] text-black px-4 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition flex flex-row items-center">
              <Typography variant="extra-subset-regular-jakarta">
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
