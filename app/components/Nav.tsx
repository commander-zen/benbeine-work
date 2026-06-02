"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Building", href: "#building" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        right: "24px",
        zIndex: 50,
        display: "flex",
        gap: "20px",
      }}
    >
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          style={{
            fontSize: "12px",
            color: "#666666",
            letterSpacing: "0.04em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00E5CC")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
