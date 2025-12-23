import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-3 rounded-full backdrop-blur-sm bg-white/10 dark:bg-black/20 border border-neutral-200/20 dark:border-neutral-800/20 hover:scale-110 transition-transform duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-neutral-200" />
      ) : (
        <Moon className="w-5 h-5 text-neutral-800" />
      )}
    </button>
  );
}
