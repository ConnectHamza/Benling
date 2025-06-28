import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/GradientText/Typography";
import { ChevronRight } from "lucide-react";
import BlogCardImg from "../../public/assets/Blogs/Crown-Electric-Mobility.webp";
import AppButton from "@/components/Button/AppButton";
import { blogs } from "@/utils/blogdata";

interface BlogRightSidebarProps {
  blogs?: any[]; // Optional, will default to static blogs
}

// Smart image handler for both Strapi + Static data
function getImageUrl(blog: any): string {
  if (blog.coverImage) return blog.coverImage;

  const attrs = blog.attributes || blog;
  const imgData = attrs.Images?.[0];
  const rawUrl =
    imgData?.formats?.medium?.url ||
    imgData?.formats?.large?.url ||
    imgData?.url;

  if (!rawUrl) return BlogCardImg.src;
  return rawUrl.startsWith("http")
    ? rawUrl
    : `https://delightful-health-e9807e9626.media.strapiapp.com${rawUrl}`;
}

export default function BlogRightSidebar({ blogs = blogsData }: BlogRightSidebarProps) {
  const recent = Array.isArray(blogs) ? blogs.slice(0, 2) : [];

  return (
    <aside className="w-full mb-8 lg:mb-0">
      <div className="bg-white sticky top-8">
        <div className="rounded-xl">
          <div>
            <Image
              alt="Crown Electric Mobility"
              src={BlogCardImg}
              className="w-full mt-10 md:mt-0"
            />
          </div>
          <div className="bg-gradient-to-t from-[#D1D1D1] to-[#FFF2D3] p-4 text-center rounded-b-xl">
            <h3 className="text-2xl font-bold">Get Your Own EV Bike Now!</h3>
            <p>Join the electric revolution — zero emissions, maximum freedom.</p>
            <div className="mt-4">
              <AppButton
                size="medium"
                variant="solid"
                label="Get Started"
                iconName="ArrowUpRight"
                iconPosition="right"
                href={"/book-now"}
                textColor="text-[#000]"
                fullWidth={true}
              />
            </div>
          </div>
        </div>

        <div className="md:block hidden">
          <Typography variant={"h4-medium-magistral"} className="mt-10">
            Recent Articles
          </Typography>
          <ul className="space-y-6">
            {recent.map((blog: any) => {
              const attrs = blog.attributes || blog;
              const title = attrs.title || attrs.Title;
              const description = attrs.subtitle || attrs.Description;
              const slug = attrs.slug;

              return (
                <li key={slug} className="w-full">
                  <div className="w-full py-4 flex flex-col justify-between">
                    <div>
                      <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-4">
                        <Image
                          src={getImageUrl(blog)}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Typography
                        variant="extra-subtext-regular-jakarta"
                        className="text-[#989898] mb-4"
                      >
                        {attrs.date ||
                          (attrs.Date
                            ? new Date(attrs.Date).toLocaleDateString()
                            : "")}
                      </Typography>
                      <Typography
                        variant="h6-medium-jakarta"
                        className="mb-2 leading-tight line-clamp-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="subtext-regular-jakarta"
                        className="text-[#000] leading-snug line-clamp-3"
                      >
                        {description?.slice(0, 120) ?? ""}
                      </Typography>
                    </div>
                    <div className="mt-4">
                      <Link href={`/blogs/${slug}`}>
                        <div className="text-[#000] hover:underline text-sm font-semibold font-jakarta flex flex-row items-center">
                          <Typography variant="subtext-bold-jakarta">
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
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
