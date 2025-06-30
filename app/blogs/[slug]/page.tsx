import { blogs as blogsData } from "@/utils/blogdata";
import BlogRightSidebar from "@/components/Blog/BlogRightSidebar";
import StrapiRichText from "@/components/StrapiRichText/StrapiRichText"; // Only if needed
import Image from "next/image";
import NotFound from "@/app/not-found";

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = blogsData.find((item) => item.slug === params.slug);

  if (!blog) {
    return  <NotFound />
    // <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div className="flex justify-center py-20 px-4">
      <div className="md:w-[1400px] flex flex-col gap-8">
        <div>         
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={10000}
            height={600}
            className="w-full md:h-[600px] h-[200px] object-cover rounded-xl mb-6"
          />
           <div className="flex text-center justify-center items-center gap-4">
            <span className="bg-[#FFF2D3] px-2 py-1 rounded-md">{blog.category ? blog.category : "General"}</span>
            <span>{blog.date}</span>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-center mt-14">{blog.title}</h1>
          <p className="text-lg text-gray-600 text-center">{blog.subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-[80%]">
            {blog.renderContent ? blog.renderContent() : <p>No content</p>}
          </div>
          <div className="md:w-[20%]">
            <BlogRightSidebar blogs={blogsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
