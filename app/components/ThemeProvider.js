"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  // On mount, read saved preference
  useEffect(() => {
    const saved = localStorage.getItem("ninestovest-theme") || "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  function applyTheme(t) {
    const root = document.documentElement;
    if (t === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("ninestovest-theme", next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
