"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/50 text-sm text-[#2b2320] shadow-[0_4px_12px_-6px_rgba(146,84,34,0.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-[#f3ece5] dark:hover:bg-white/10"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
