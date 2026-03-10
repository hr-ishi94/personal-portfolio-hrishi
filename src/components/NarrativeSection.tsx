import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const statements = [
  "I build real-world systems.",
  "Full stack, from interface to infrastructure.",
  "Focused on scalability and clarity.",
  "Python. React. Modern architecture.",
];

export function NarrativeSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {statements.map((statement, index) => (
          <NarrativeText key={index} statement={statement} index={index} />
        ))}
      </div>
    </section>
  );
}

const NarrativeText = ({ statement, index }: { statement: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="text-[clamp(2rem,6vw,4rem)] font-headline leading-[1.1] tracking-tight"
    >
      <span className={index % 2 === 0 ? 'text-gradient' : 'text-[var(--text-primary)]'}>
        {statement}
      </span>
    </motion.div>
  );
};
