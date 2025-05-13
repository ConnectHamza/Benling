import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import BlogImage1 from "../../public/assets/Home/Blogs/Blog1.png"
import BlogImage2 from "../../public/assets/Home/Blogs/Blog2.png"
import BlogImage3 from "../../public/assets/Home/Blogs/Blog3.png"
import Image from "next/image";

const blogs = [
    {
        id: 1,
        image: BlogImage1.src,
        date: "May 12, 2025",
        title: "Why Electric Scooters Are Changing Urban Travel",
        subheading:
            "Discover how EV scooters are making city commutes cleaner, cheaper, and more efficient than ever before.",
    },
    {
        id: 2,
        image: BlogImage2.src,
        date: "May 12, 2025",
        title: "Inside Pakistan’s Growing EV Network",
        subheading:
            "From major cities to towns, see how Beeling is accelerating the adoption of electric mobility nationwide.",
    },
    {
        id: 3,
        image: BlogImage3.src,
        date: "May 12, 2025",
        title: "5 Reasons to Switch to an EV Scooter Today",
        subheading:
            "Lower fuel costs, zero emissions, and a smoother ride—here’s why you need to ride electric today.",
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
        <div className="bg-white text-black py-10 px-4 sm:px-8 md:px-16 lg:px-20">
  <h2 className="text-2xl md:text-3xl mb-6 font-magistral font-weight[500]">Recents Blog/News</h2>

  <div className="relative">
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
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
            <p className="text-sm text-[#989898] mb-4 font-jakarta font-normal">
              News • {blog.date}
            </p>
            <h3 className="font-semibold text-lg mb-2 leading-tight font-jakarta">
              {blog.title}
            </h3>
            <p className="text-sm text-[#000] leading-snug font-jakarta">
              {blog.subheading}
            </p>
          </div>
          <div className="mt-4">
            <button className="text-[#000] hover:underline text-sm font-semibold font-jakarta flex flex-row items-center">
              Read More
              <div className="mx-3">
                <ChevronRight size={14} />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Scroll Controls */}
    <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
      <button className="text-[14px] h-[35px] text-black px-4 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition font-jakarta flex flex-row items-center">
        View All Blog/News
        <div className="mx-3">
          <ArrowUpRight size={14} />
        </div>
      </button>

      <div className="flex gap-3 ml-auto">
        <button
          onClick={() => scroll("left")}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</div>

    )
    // return (
    //     <div className="bg-white text-black py-10 sm:px-8 md:px-16 lg:px-20">
    //         <h2 className="text-2xl md:text-3xl mb-6 font-magistral font-weight[500]">Recents Blog/News</h2>

    //         <div className="relative">
    //             <div
    //                 ref={scrollRef}
    //                 className="flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
    //             >
    //                 {blogs.map((blog) => (
    //                     <div
    //                         key={blog.id}
    //                         className="min-w-[500px] max-w-xs py-4 flex-shrink-0 flex flex-col justify-between"
    //                     >
    //                         <div>
    //                             <div className="w-full h-[300px] relative rounded-lg overflow-hidden mb-4">
    //                                 <Image
    //                                     src={blog.image}
    //                                     alt={blog.title}
    //                                     fill
    //                                     className="object-cover"
    //                                 />
    //                             </div>
    //                             <p className="text-sm text-[#989898] mb-4 font-jakarta font-normal">News • {blog.date}</p>
    //                             <h3 className="font-semibold text-lg mb-2 leading-tight font-jakarta">
    //                                 {blog.title}
    //                             </h3>
    //                             <p className="text-sm text-[#000] leading-snug font-jakarta">
    //                                 {blog.subheading}
    //                             </p>
    //                         </div>
    //                         <div className="mt-4">
    //                             <button className="text-[#000] hover:underline text-sm font-semibold font-jakarta flex flex-row items-center">
    //                                 Read More <div className="mx-3"><ChevronRight size={14} />
    //                                 </div>
    //                             </button>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>

    //             {/* Scroll Controls */}
    //             <div className="flex justify-between items-center mt-6">
    //                 <button className=" text-[14px] mt-2 h-[35px] text-black px-4 rounded bg-white hover:bg-black-30 hover:text-white border border-black transition font-jakarta flex flex-row items-center">
    //                     View All Blog/News <div className="mx-3"><ArrowUpRight size={14} />
    //                     </div>
    //                 </button>

    //                 <div className="flex gap-3">
    //                     <button
    //                         onClick={() => scroll("left")}
    //                         className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
    //                     >
    //                         <ChevronLeft className="w-5 h-5" />
    //                     </button>
    //                     <button
    //                         onClick={() => scroll("right")}
    //                         className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
    //                     >
    //                         <ChevronRight className="w-5 h-5" />
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}
