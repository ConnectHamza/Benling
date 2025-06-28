import React from "react";

// Map heading levels to classNames
const headingClasses: Record<number, string> = {
  1: "font-magistral mt-8 mb-4 font-extrabold text-4xl",
  2: "font-magistral mt-6 mb-3 font-bold text-3xl",
  3: "font-magistral mt-5 mb-2 font-semibold text-xl",
};

function renderChildren(children: any[]) {
  return children.map((child, i) => {
    if (child.text) {
      const hasHtml = /<\/?[a-z][\s\S]*>/i.test(child.text); // checks for HTML tags
      return hasHtml ? (
        <span
          key={i}
          dangerouslySetInnerHTML={{ __html: child.text }}
          className="block"
        />
      ) : (
        <React.Fragment key={i}>{child.text}</React.Fragment>
      );
    }
    return null;
  });
}





function renderBlock(block: any, i: number) {
  switch (block.type) {
    case "heading":
      const level = typeof block.level === "number" && block.level >= 1 && block.level <= 6 ? block.level : 2;
      const HeadingTag: React.ElementType = `h${level}`;
      const className = headingClasses[level] || "mt-4 mb-2 font-bold";
      return (
        <HeadingTag key={i} className={className}>
          {renderChildren(block.children)}
        </HeadingTag>
      );
case "paragraph": {
  const fullText = block.children?.map((child: any) => child.text).join("") || "";
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(fullText); // detects any HTML tag

  if (isHtml) {
    return (
      <div
        key={i}
        className="my-6 overflow-x-auto prose max-w-none"
        dangerouslySetInnerHTML={{ __html: fullText }}
      />
    );
  }

  return (
    <p key={i} className="mb-4 font-jakarta text-base">
      {renderChildren(block.children)}
    </p>
  );
}

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

export default function StrapiRichText({ content }: { content: any[] | string }) {
  if (!content) return null;

  // Handle raw HTML string
  if (typeof content === "string") {
    return (
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Handle JSON blocks
  if (Array.isArray(content)) {
    return <div className="prose max-w-none">{content.map(renderBlock)}</div>;

  }

  return null;
}
