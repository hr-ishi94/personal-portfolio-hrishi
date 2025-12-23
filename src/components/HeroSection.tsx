import { motion } from 'framer-motion';
import { ParallaxBackground } from './ParallaxBackground';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParallaxBackground />
      <div
        className="absolute inset-0 bg-gradient-hero animate-gradient opacity-[var(--gradient-opacity)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-headline text-[clamp(4rem,12vw,8rem)] leading-[0.9] tracking-tight text-[var(--text-primary)]">
              Hrishikesh
              <br />
              <span className="text-gradient">Prasad C</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9], delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="font-headline text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight text-[var(--text-primary)]">
              
              Full Stack
              <br />
              <span className="text-gradient">Developer</span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-[var(--text-secondary)] text-lg max-w-md pt-8"
            >
              Building scalable systems
              <br />
              from interface to infrastructure
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--text-secondary)] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
