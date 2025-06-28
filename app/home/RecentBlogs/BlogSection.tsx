import { fetchBlogs } from "@/app/api/Strapi/fetchBlogs";
import RecentBlogsCarousel from "./RecentBlogsCarousel";
import BlogSection from "../BlogSection"

export default async function RecentBlogsSection() {
  const blogs = await fetchBlogs();
  return <BlogSection/>;
}