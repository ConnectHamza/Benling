'use client'
import React, { useEffect, useState } from "react";

// Hook for scroll tracking
function useActiveHeading(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  useEffect(() => {
    function onScroll() {
      let currentId = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            currentId = id;
          }
        }
      }
      setActiveId(currentId);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return activeId;
}

export default function BlogLeftSidebar({ headings = [], readTime }) {
  const ids = headings.map(h => h.id);
  const activeId = useActiveHeading(ids);
  return (
    <aside className="w-full lg:w-56 mb-8 lg:mb-0">
      <div className="bg-white p-4 sticky top-8">
        <div className="mb-4">
          <span className="block text-gray-700 font-semibold mb-1">In this article</span>
          <span className="text-xs text-gray-500">{readTime} min read</span>
        </div>
        <nav>
          <ul className="overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-100">
            {headings.map(h => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`flex items-center gap-2 text-sm px-1 py-1 rounded transition-colors duration-150
                    ${h.id === activeId
                      ? "text-orange-600 font-semibold bg-orange-50"
                      : "text-gray-500 hover:text-orange-600"
                    }
                  `}
                >
                  {/* Orange dot for active item */}
                  <span className={`h-2 w-2 rounded-full
                    ${h.id === activeId ? "bg-orange-500" : "bg-transparent"}
                  `}></span>
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
