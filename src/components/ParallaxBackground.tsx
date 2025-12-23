import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-blue-teal rounded-full blur-3xl opacity-20"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-mint-lime rounded-full blur-3xl opacity-20"
      />
    </div>
  );
}
