'use client';
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@/components/GradientText/Typography';

export default function RecentBlogsCarousel({ blogs }: { blogs: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollAmount = 320;

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newScrollLeft = direction === 'right' ? scrollLeft + scrollAmount : scrollLeft - scrollAmount;
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
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
      ref.addEventListener('scroll', checkScrollPosition);
      return () => ref.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <section className="bg-white text-black py-20">
      <div className="md:w-full mx-auto px-4 ">
        {/* Heading */}
        <div data-aos="zoom-in-right" data-aos-delay="0" className='md:pl-[calc((100vw-1300px)/2+0rem)]'>
          <Typography as="h2" variant="h3-medium-magistral">
            Recent Blog/News
          </Typography>
        </div>

        {/* Scrollable Blog Cards */}
        <div className="relative mt-6 ">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar md:pl-[calc((100vw-1300px)/2+0rem)]">
            {blogs.map((blog) => {
              const attrs = blog.attributes || blog;
              const imgData = attrs.Images?.[0];
              const rawUrl =
                imgData?.formats?.medium?.url ||
                imgData?.formats?.large?.url ||
                imgData?.url;
              const imgUrl = rawUrl
                ? rawUrl.startsWith('http')
                  ? rawUrl
                  : `https://delightful-health-e9807e9626.media.strapiapp.com${rawUrl}`
                : null;

              return (
                <div
                  data-aos="fade-up"
                  key={attrs.slug}
                  className="flex-shrink-0 w-[85vw] sm:w-[300px] md:w-[350px] lg:w-[400px] py-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-full h-[200px] sm:h-[250px] relative rounded-lg overflow-hidden mb-4">
                      <Link href={`/blogs/${attrs.slug}`} target="_blank">
                        {imgUrl && (
                          <Image
                            src={imgUrl}
                            alt={attrs.Title}
                            fill
                            className="object-cover"
                          />
                        )}
                      </Link>
                    </div>
                    <Typography
                      as="span"
                      variant="extra-subtext-regular-jakarta"
                      className="text-[#989898] mb-4"
                    >
                      {attrs.Date
                        ? new Date(attrs.Date).toLocaleDateString()
                        : attrs.createdAt
                        ? new Date(attrs.createdAt).toLocaleDateString()
                        : ''}
                    </Typography>
                    <Link href={`/blogs/${attrs.slug}`} target="_blank">
                      <Typography
                        as="h3"
                        variant="h6-medium-jakarta"
                        className="mb-2 leading-tight line-clamp-2 blog-heading"
                      >
                        {attrs.Title}
                      </Typography>
                    </Link>
                    <Link href={`/blogs/${attrs.slug}`} target="_blank">
                      <Typography
                        as="p"
                        variant="subtext-regular-jakarta"
                        className="text-[#000] leading-snug line-clamp-3"
                      >
                        {attrs.Description?.slice(0, 120) ?? ''}
                      </Typography>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <Link href={`/blogs/${attrs.slug}`} target="_blank">
                      <div className="text-[#000] hover:underline text-sm font-semibold font-jakarta flex flex-row items-center">
                        <Typography variant="body-light-jakarta">
                          Read More
                        </Typography>
                        <div className="mx-3">
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows outside */}
          <div className="mt-4 flex gap-2">
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
