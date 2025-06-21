import Link from "next/link";
import Typography from "@/components/GradientText/Typography";
import Image from "next/image";
import FirstBlog from "../../public/assets/Blogs/BlogHeader.webp"
import { ArrowRight } from "lucide-react";

const Blog = () => {
    return (
        <div className="flex justify-center md:py-20 py-10">
            <div className="max-w-[1400px] md:w-lg">
                <div>
                    <Typography as="h1" variant={"h2-medium-magistral"}>
                        Blog, News, Insights & More
                    </Typography>
                    <Typography as="p" variant={"body-regular-jakarta"} className="text-left mt-4">
                        Explore updates from Crown Electric from product launches and EV tips to company news and innovations in electric mobility.
                    </Typography>
                </div>
                <div className="mt-10">
                    <Typography as="h2" variant={"h3-medium-magistral"}>
                        Recent Blogs
                    </Typography>
                    <div className="flex gap-6 mt-6">
                        <div className="w-[40%]">
                            <Image src={FirstBlog} className="w-full rounded-xl min-h-[40vh] object-cover" />
                        </div>
                        <div className="w-[60%] flex flex-col justify-center">
                            <div className="flex gap-4 items-center">
                                <Typography variant="extra-subtext-regular-jakarta" className="text-black-30 bg-orange-100 w-fit px-3 py-1.5 rounded-lg">
                                    Technology
                                </Typography>
                                <Typography variant="extra-subtext-regular-jakarta" className="text-[#989898] w-fit">
                                    May 15th 2025
                                </Typography>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <Typography as="h3" variant={"h4-semibold-jakarta"}>
                                    Graphene The Future of Battery Technology
                                </Typography>
                                <Typography as="p" variant={"subtext-regular-jakarta"}>
                                    In a world where cutting-edge technology is transforming our daily lives, the only bottleneck seems to be the outdated rechargeable batteries that power our devices. Traditional lithium-ion batteries, while providing consistent power and acceptable lifespans, face challenges such as low capacity, extended charging times, and limited overall charging cycles. Imagine a future where your smartphone, motorcycles, and other gadgets last a week on a single charge and charge in a fraction of the time—thanks to Graphene, this future is now within reach.
                                </Typography>
                                <Link href="/blogs/graphene-battery-future">
                                    <button className="flex items-center gap-2 font-semibold mt-2">
                                        Read More <ArrowRight size={14} color="#000" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <Typography as="h2" variant={"h3-medium-magistral"}>
                        EV Insights
                    </Typography>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};


export default Blog;