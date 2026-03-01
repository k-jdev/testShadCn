import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) return stored;
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }
  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <RiSunLine className="size-4" />
      ) : (
        <RiMoonLine className="size-4" />
      )}
    </Button>
  );
}
