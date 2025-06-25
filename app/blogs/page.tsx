import Image from "next/image";
import Link from "next/link";
import Typography from "@/components/GradientText/Typography";
import { blogs as localBlogs} from "@/utils/blogdata";

export default function BlogsPage() {
  // Use localBlogs instead of API
  const blogs = localBlogs;

  return (
    <div className="flex justify-center md:py-40 py-20 px-4">
      <div className="max-w-[1400px] md:w-lg mt-10 md:mt-0">
        <Typography as="h1" variant={"h2-medium-magistral"}>
          Blog, News, Insights & More
        </Typography>
        <Typography as="p" variant={"body-regular-jakarta"} className="text-left mt-4">
          Explore updates from Crown Electric from product launches and EV tips to company news and innovations in electric mobility.
        </Typography>

        <div className="mt-10 ">
          <Typography as="h2" variant={"h3-medium-magistral"}>
            Recent Blogs
          </Typography>
          <div className="flex flex-col gap-10 mt-6 ">
            {blogs.map((blog: any) => {
              // Direct access as per your blogdata.jsx structure
              const imgUrl = blog.coverImage;
              const category = blog.category || "General";
              return (
                <div key={blog.slug} className="md:flex gap-6">
                  <div className="md:w-[40%]">
                    {imgUrl && (
                      <Image
                        src={imgUrl}
                        alt={blog.title}
                        width={600}
                        height={400}
                        className="w-full rounded-xl min-h-[40vh] object-cover"
                      />
                    )}
                  </div>
                  <div className="md:w-[60%] flex flex-col justify-center">
                    <div className="flex gap-4 items-center">
                      <Typography
                        variant="extra-subtext-regular-jakarta"
                        className="text-black-30 bg-orange-100 w-fit px-3 py-1.5 rounded-lg"
                      >
                        {category}
                      </Typography>
                      <Typography
                        variant="extra-subtext-regular-jakarta"
                        className="text-[#989898] w-fit"
                      >
                        {blog.date}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <Typography as="h3" variant={"h4-semibold-jakarta"}>
                        {blog.title}
                      </Typography>
                      <Typography as="p" variant={"subtext-regular-jakarta"}>
                        {blog.subtitle?.slice(0, 200) ?? ""}
                      </Typography>
                      <Link href={`/blogs/${blog.slug}`}>
                        <button className="flex items-center gap-2 font-semibold mt-2">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}