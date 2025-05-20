import { blogs } from "../../../utils/blogdata";
import BlogHeader from "@/components/Blog/Blogheader";
import BlogMeta from "@/components/Blog/Blogmain";
import LeftSidebar from "@/components/Blog/BlogLeftSidebar";
import RightSidebar from "@/components/Blog/BlogRightSidebar";
import Typography from "@/components/GradientText/Typography"


export function generateStaticParams() {
    return blogs.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }) {
    const post = blogs.find((p) => p.slug === params.slug);
    if (!post) return <div className="p-8 text-center">Blog post not found.</div>;
    const headings = post.headings
    const recentArticles = blogs.filter((b) => b.slug !== params.slug).slice(0, 5);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto bg-white  px-4 sm:px-6 lg:px-8 pb-12">
                {/* Header */}
                <BlogHeader coverImage={post.coverImage} />

                {/* Meta (tag + date) */}
                <BlogMeta tag={post.tag || "Technology"} date={post.date || "May 20, 2025"} />

                {/* Title + Subtitle */}
                <div className="text-center mt-4 p-2 bg-white">
                    <Typography variant={"h2-medium-magistral"}>
                        {post.title}
                    </Typography>
                </div>

                <div className="text-gray-700 text-base text-center mt-2 mb-6">
                    <Typography variant={"body-regular-jakarta"} >{post.subtitle}</Typography>
                </div>
                {/* Divider */}
                <hr className="border-gray-300 my-8" />

                {/* Main Content Flex Layout */}
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="w-1/5">
                        <LeftSidebar headings={headings} readTime={post.readTime} />
                    </div>
                    {/* Main Blog Content */}
                    <main className="w-2/3 prose prose-lg max-w-none">
                        {post.renderContent()}
                    </main>
                    {/* Right Sidebar */}
                    <div className="w-1/6">
                        <RightSidebar recentArticles={recentArticles} />
                    </div>
                </div>
            </div>
        </div>
    );
}


