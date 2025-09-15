import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/GradientText/Typography";
import { ChevronRight } from "lucide-react";
export default function BlogRightSidebar({ recentArticles = [] }) {
  return (
    <aside className="w-full lg:w-56 mb-8 lg:mb-0">
      <div className="bg-white p-4 sticky top-8">
        <Typography variant={"h4-medium-magistral"} className="mb-4">Recent Articles</Typography>
        <ul className="space-y-6">
          {recentArticles.map((blog) => (
            <li key={blog.slug} className="w-full">
              <div className="w-full py-4 flex flex-col justify-between">
                <div>
                  <div className="w-full h-[150px] sm:h-[150px] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Typography variant="extra-subtext-regular-jakarta" className="text-[#989898] mb-4">
                    {blog.date}
                  </Typography>
                  <Typography variant="h6-medium-jakarta" className="mb-2 leading-tight line-clamp-2">
                    {blog.title}
                  </Typography>
                  <Typography variant="subtext-regular-jakarta" className="text-[#000] leading-snug line-clamp-3">
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
            </li>
          ))}
        </ul>
      </div>
    </aside>

  );
}
