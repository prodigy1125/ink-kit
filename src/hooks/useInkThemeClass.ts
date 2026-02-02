import { useEffect } from "react";

const themeClasses = ["dark", "light", "contrast", "neo", "morpheus"] as const;

export function useInkThemeClass(
  theme: "default" | (typeof themeClasses)[number]
) {
  useEffect(() => {
    themeClasses.forEach((t) => {
      const className = `ink:${t}-theme`;
      if (theme === t) {
        document.documentElement.classList.add(className);
      } else {
        document.documentElement.classList.remove(className);
      }
    });
  }, [theme]);
}
