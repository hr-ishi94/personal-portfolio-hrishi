import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FloatingLines from './FloatingLines';

const statements = [
  "I build real-world systems.",
  "Full stack, from interface to infrastructure.",
  "Focused on scalability and clarity.",
  "Python. React. Modern architecture.",
];

export function NarrativeSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <FloatingLines
          linesGradient={['#476EAE', '#48B3AF', '#A7E399']}
          parallax={true}
          interactive={true}
          eventSource={containerRef as React.MutableRefObject<HTMLElement>}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-24 pointer-events-none">
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
