"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div data-theme={theme}>{children}</div>
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeProvider;
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
