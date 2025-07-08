// app/blogs/page.tsx or wherever your route is
"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/GradientText/Typography";
import { blogs } from "@/utils/blogdata";

export default function BlogsPage() {
  return (
    <div className="flex justify-center md:py-40 py-20 px-4">
      <div className="max-w-[1400px] md:w-lg mt-10 md:mt-0">
        <Typography as="h1" variant="h2-medium-magistral">
          Blog, News, Insights & More
        </Typography>
        <Typography as="p" variant="body-regular-jakarta" className="text-left mt-4">
          Explore updates from Crown Electric from product launches and EV tips to company news and innovations in electric mobility.
        </Typography>

        <div className="mt-10">
          <Typography as="h2" variant="h3-medium-magistral">
            Recent Blogs
          </Typography>
          <div className="flex flex-col gap-10 mt-6">
            {blogs.map((blog) => (
              <div key={blog.slug} className="md:flex gap-6">
                <div className="md:w-[40%]">
                  <Link href={`/blogs/${blog.slug}`}>
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full rounded-xl min-h-[30vh] object-cover"
                  />
                  </Link>
                </div>
                <div className="md:w-[60%] flex flex-col justify-center">
                  <div className="flex gap-4 items-center">
                    <Typography
                      variant="extra-subtext-regular-jakarta"
                      className="text-black-30 bg-orange-100 w-fit px-3 py-1.5 rounded-lg mt-4 md:mt-0"
                    >
                      {blog.category ? blog.category : "General"}
                    </Typography>
                   
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <Link href={`/blogs/${blog.slug}`}>
                    <Typography as="h3" variant="h4-semibold-jakarta">
                      {blog.title}
                    </Typography>
                    </Link>
                    <Link href={`/blogs/${blog.slug}`}>
                    <Typography as="p" variant="subtext-regular-jakarta">
                      {blog.subtitle?.slice(0, 200)}
                    </Typography>
                    </Link>
                    <Link href={`/blogs/${blog.slug}`}>
                      <button className="flex items-center gap-2 font-semibold ">
                        Read More
                      </button>
                    </Link>
                    <div className="flex gap-2 items-center mt-4">
                      <div>
                      <Image width={40} height={40} src={blog.authorImage} alt={blog.author}/>
                     </div>
                     <div>
                      <Typography
                      variant="body-semibold-jakarta"
                      className="text-black-30 w-fit"
                    >
                      {blog.author}
                    </Typography>
                     <Typography
                      variant="extra-subtext-regular-jakarta"
                      className="text-[#989898] w-fit"
                    >
                      {blog.date}
                    </Typography>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
