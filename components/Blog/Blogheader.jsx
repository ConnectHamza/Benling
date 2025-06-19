"use client"
import Image from "next/image";

export default function BlogHeader({ coverImage }) {
  return (
    <div className="pt-[0px]">
      <Image
        src={coverImage}
        alt="Blog Header"
        className="w-full rounded-lg shadow"
        width={10000}
        height={1000}
      />
    </div>
  );
}
