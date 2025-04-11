"use client";

import { useTheme } from "@/context/ThemeContext";
import { DayIcon, NightIcon } from "../helper/Icon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer  ${theme === "light" ? "Dark" : "Light"}`}
    >
      {theme === "light" ? <NightIcon /> : <DayIcon />}
    </button>
  );
}
