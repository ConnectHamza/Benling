import React from "react";

// Map heading levels to classNames
const headingClasses: Record<number, string> = {
  1: "font-magistral mt-8 mb-4 font-extrabold text-4xl",
  2: "font-magistral mt-6 mb-3 font-bold text-3xl",
  3: "font-magistral mt-5 mb-2 font-semibold text-xl",
  // Add more if you want for h4, h5, etc.
};

function renderChildren(children: any[]) {
  return children.map((child, i) => {
    if (child.text) return <React.Fragment key={i}>{child.text}</React.Fragment>;
    // Handle inline marks (bold, italic, etc) if needed here
    return null;
  });
}

function renderBlock(block: any, i: number) {
  switch (block.type) {
    case "heading":
      // Ensure level is between 1 and 6, default to 2
      const level =
        typeof block.level === "number" && block.level >= 1 && block.level <= 6
          ? block.level
          : 2;
      const HeadingTag: React.ElementType = `h${level}`;
      const className =
        headingClasses[level] ||
        "mt-4 mb-2 font-bold"; // fallback for h4-h6
      return (
        <HeadingTag key={i} className={className}>
          {renderChildren(block.children)}
        </HeadingTag>
      );
    case "paragraph":
      return (
        <p key={i} className="mb-4 font-jakarta text-base">
          {renderChildren(block.children)}
        </p>
      );
    case "list":
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={i} className="mb-4 list-disc pl-6">
          {block.children.map((li: any, idx: number) => (
            <li key={idx}>{renderChildren(li.children)}</li>
          ))}
        </ListTag>
      );
    default:
      return null;
  }
}

export default function StrapiRichText({ content }: { content: any[] }) {
  if (!Array.isArray(content)) return null;
  return <div>{content.map(renderBlock)}</div>;
}