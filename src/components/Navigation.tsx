import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Story', id: 'narrative' },
  { label: 'Work', id: 'work' },
  // { label: 'Journey', id: 'transition' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Check if user scrolled down
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on position
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initially
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll mobile navbar to center the active button when section changes
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-btn-${activeSection}`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-blue via-primary-teal to-primary-mint z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Floating Pill Nav */}
      <div className="fixed top-6 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center gap-1 p-1.5 rounded-full glassmorphic transition-all duration-500 shadow-xl max-w-[calc(100vw-2rem)] overflow-x-auto no-scrollbar ${
            isScrolled 
              ? 'shadow-black/10 dark:shadow-black/40 scale-100 py-1 px-1.5 bg-white/70 dark:bg-slate-900/60' 
              : 'scale-105 py-2 px-3 bg-white/40 dark:bg-slate-950/20 border-transparent'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-btn-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex-shrink-0 px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-white dark:text-slate-950 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-teal rounded-full -z-10 shadow-lg shadow-primary-teal/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
}
