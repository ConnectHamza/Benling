import { strapiApi } from "./strapiApi";


console.log("BASE_URL:", process.env.NEXT_PUBLIC_STRAPI_URL);
console.log("TOKEN:", process.env.STRAPI_API_TOKEN);

export async function fetchBlogs() {
  try {
    const res = await strapiApi.get("/blogs", {
      params: {
        populate: "*",
        sort: "createdAt:desc"
      }
    });
    return res.data.data || [];
  } catch (err: any) {
    console.error("Strapi fetch error:", err.response?.data || err.message);
    return [];
  }
}


export async function fetchBlogBySlug(slug: string) {
  try {
    const res = await strapiApi.get("/blogs", {
      params: {
        filters: { slug: { $eq: slug } },
        populate: "*",
      },
    });
    return res.data.data[0] || null;
  } catch (err: any) {
    console.error("Strapi fetch error:", err.response?.data || err.message);
    return null;
  }
}


export async function fetchRecentBlogs() {
  try {
    const res = await strapiApi.get("/blogs", {
      params: {
        populate: "*", 
        sort: "updatedAt:desc",
        pagination: { limit: 2 }
        
      }
    });

    return res.data.data.map((item: any) => {
      const attrs = item.attributes || item;
      return {
        slug: attrs.slug,
        title: attrs.Title,
        subtitle: attrs.Meta_Description || attrs.Description?.slice(0, 120) || "",
        date: attrs.updatedAt
          ? new Date(attrs.updatedAt).toLocaleDateString()
          : "",
        coverImage:
          attrs.Images?.[0]?.url
            ? process.env.NEXT_PUBLIC_STRAPI_URL + attrs.Images[0].url
            : "/assets/Blogs/Crown-Electric-Mobility.webp",
      };
    });
  } catch (err: any) {
    console.error("Strapi fetch error:", err.response?.data || err.message);
    return [];
  }
}