'use client'
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogs } from "../../utils/blogdata";
import Image from "next/image";
import Typography from "@/components/GradientText/Typography";

export default function RecentBlogsCarousel() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollAmount = 320;

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newScrollLeft = direction === "right" ? scrollLeft + scrollAmount : scrollLeft - scrollAmount;
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtStart(scrollLeft <= 10);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScrollPosition);
      return () => ref.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section className="bg-white text-black py-20 pl-4 md:pl-0">
      <div className="md:w-full mx-auto">
        {/* Heading */}
        <div data-aos="zoom-in-right" data-aos-delay="0" className="md:pl-[calc((100vw-1300px)/2+0rem)]">
          <Typography as="h2" variant="h3-medium-magistral">
            Recent Blog/News
          </Typography>
        </div>

        {/* Scrollable Blog Cards */}
        <div className="relative mt-6">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar md:pl-[calc((100vw-1300px)/2+0rem)]"
          >
            {blogs.map((blog) => (
              <div
                data-aos="fade-up"
                key={blog.slug}
                className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[350px] lg:w-[400px] py-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full md:h-[230px] h-[160px] relative rounded-lg overflow-hidden mb-4">
                    <Link href={`/blogs/${blog.slug}`}>
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover w-full h-[200px] sm:h-[250px]"
                      />
                    </Link>
                  </div>
                  <Typography as="span" variant="extra-subtext-regular-jakarta" className="text-[#989898] mb-4">
                    {blog.date}
                  </Typography>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Typography
                      as="h3"
                      variant="h6-medium-jakarta"
                      className="mb-2 leading-tight line-clamp-2 blog-heading"
                    >
                      {blog.title}
                    </Typography>
                  </Link>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Typography as="p" variant="subtext-regular-jakarta" className="text-[#000] leading-snug line-clamp-3">
                      {blog.subtitle}
                    </Typography>
                  </Link>
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

          {/* Scroll Buttons */}
          <div className="mt-4 flex gap-2 md:pl-[calc((100vw-1300px)/2+0rem)]">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
              disabled={atStart}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border bg-white shadow-md disabled:opacity-30 flex items-center justify-center"
              disabled={atEnd}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
