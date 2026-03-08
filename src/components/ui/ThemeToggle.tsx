import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStore } from "../../stores/themeStore";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-colors ${className}`}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <FontAwesomeIcon
        icon={theme === "light" ? ["far", "moon"] : ["far", "sun"]}
        className="text-lg"
      />
    </button>
  );
}
