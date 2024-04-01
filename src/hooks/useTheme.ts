import { useEffect, useState } from "react";

interface ThemeHook {
  theme: string;
  toggleTheme: () => void;
}

function useTheme(): ThemeHook {
  const storageTheme = localStorage.getItem("theme");
  const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const newTheme = storageTheme || systemColorScheme;

  const [theme, setTheme] = useState<string>(newTheme);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.toggle("dark", theme === "dark");
    }

    localStorage.setItem("theme", theme);

    const favicon = document.querySelector("link[rel='shortcut icon']") as HTMLLinkElement;

    if (favicon) {
      favicon.href = theme === "dark" ? "/images/icons/favicon-dark.png" : "/images/icons/favicon-light.png";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
