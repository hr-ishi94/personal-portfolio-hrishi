import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const statements = [
  "I build real-world systems.",
  "Full stack, from interface to infrastructure.",
  "Focused on scalability and clarity.",
  "Python. React. Modern architecture.",
];

export function NarrativeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-8"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {statements.map((statement, index) => {
          const startOffset = index / statements.length;
          const endOffset = (index + 1) / statements.length;

          const opacity = useTransform(
            scrollYProgress,
            [startOffset, startOffset + 0.1, endOffset - 0.1, endOffset],
            [0, 1, 1, 0]
          );

          const y = useTransform(
            scrollYProgress,
            [startOffset, endOffset],
            [100, -100]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity, y }}
              className="text-[clamp(2rem,6vw,4rem)] font-headline leading-[1.1] tracking-tight"
            >
              <span className={index % 2 === 0 ? 'text-gradient' : 'text-[var(--text-primary)]'}>
                {statement}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
