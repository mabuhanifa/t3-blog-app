"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // On the server or before the client has mounted, render a placeholder
  // to prevent layout shift and provide a better initial loading experience.
  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded px-2 py-1 text-xs border border-stone-200 dark:border-stone-800"
        disabled
        aria-label="Loading theme toggle"
      >
        <div className="h-3.5 w-3.5 animate-pulse rounded-full bg-stone-300 dark:bg-stone-700" />
        <div className="h-4 w-8 animate-pulse rounded bg-stone-300 dark:bg-stone-700" />
      </button>
    );
  }

  const isDarkMode = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded px-2 py-1 text-xs border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
    >
      {isDarkMode ? (
        <>
          <Sun className="h-3.5 w-3.5" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
