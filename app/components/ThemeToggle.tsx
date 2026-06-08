"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      className="helix-ghost-btn"
      style={{ position: "fixed", top: "16px", right: "24px", zIndex: 50 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      ◑
    </button>
  );
}
