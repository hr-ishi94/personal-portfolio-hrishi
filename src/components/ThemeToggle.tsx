import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 md:bottom-auto md:top-8 md:right-8 z-50 p-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-slate-950/35 border border-neutral-300/30 dark:border-white/10 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-black/25"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
}
