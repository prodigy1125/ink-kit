import { useEffect } from "react";

const themeClasses = ["ink-dark", "ink-light"];

export function useInkThemeClass(theme: "ink-dark" | "ink-light") {
  useEffect(() => {
    themeClasses.forEach((t) => {
      if (theme === t) {
        document.documentElement.classList.add(t);
      } else {
        document.documentElement.classList.remove(t);
      }
    });
  }, [theme]);
}
