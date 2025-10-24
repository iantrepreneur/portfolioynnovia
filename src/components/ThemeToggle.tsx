import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Sun size={16} className="text-muted-foreground" />
        <Switch disabled />
        <Moon size={16} className="text-muted-foreground" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} className={`transition-colors ${!isDark ? 'text-yellow-400' : 'text-muted-foreground'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon size={16} className={`transition-colors ${isDark ? 'text-blue-400' : 'text-muted-foreground'}`} />
    </div>
  );
};