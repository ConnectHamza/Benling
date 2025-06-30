"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";


export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        right: 22,
        bottom: 20,
        zIndex: 999,
        background: "#ff5500",
        color: "#fff",
        border: "none",
        borderRadius: "100%",
        width: 52,
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s",
        cursor: "pointer",
      }}
    >
      <ArrowUp />
    </button>

  );
}