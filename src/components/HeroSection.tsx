import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ParallaxBackground } from './ParallaxBackground';
import portrait from '../assets/portrait-without-background.png';
import { ArrowRight, Sparkles } from 'lucide-react';
import djangoIcon from '../assets/django.jpg';
import jsIcon from '../assets/js.webp';
import nextjsIcon from '../assets/nextjs.png';
import postgresIcon from '../assets/postgres.webp';
import pythonIcon from '../assets/python.webp';
import reactIcon from '../assets/reactjs.jpg';

export function HeroSection() {
  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Interactive 3D mouse tilt variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for dampening movement
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Transformed rotation values based on cursor offset (-0.5 to 0.5 range)
  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParallaxBackground />
      <div
        className="absolute inset-0 bg-gradient-hero animate-gradient opacity-[var(--gradient-opacity)]"
      />

      {/* Aesthetic Grid Pattern Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mt-10 mx-auto px-6 md:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">


            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-[clamp(2.5rem,7.5vw,5rem)] font-extrabold leading-[1.0] tracking-tight text-[var(--text-primary)]"
              >
                Hi, I'm
                <br />
                <span className="text-[var(--text-primary)]">Hrishikesh</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-headline text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--text-primary)]"
              >
                Full Stack
                <br />
                <span className="text-gradient">Developer</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[var(--text-secondary)] text-base md:text-lg max-w-xl leading-relaxed font-light"
            >
              I design and engineer robust, high-performance systems and intuitive user interfaces, bridging the gap between interactive front-ends and scalable back-end infrastructures.
            </motion.p>

            {/* Visual Micro-Stats Double Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-4 pt-2"
            >
              <div className="flex-1 max-w-[160px] px-5 py-4 rounded-2xl border border-neutral-200/10 dark:border-white/5 bg-slate-500/5 dark:bg-white/[0.01] backdrop-blur-md text-left">
                <p className="text-2xl font-extrabold text-[var(--text-primary)] font-headline leading-none">3+</p>
                <p className="text-[9px] font-bold text-[var(--text-secondary)] tracking-wider uppercase mt-1.5">Years Experience</p>
              </div>
              <div className="flex-1 max-w-[160px] px-5 py-4 rounded-2xl border border-neutral-200/10 dark:border-white/5 bg-slate-500/5 dark:bg-white/[0.01] backdrop-blur-md text-left">
                <p className="text-2xl font-extrabold text-[var(--text-primary)] font-headline leading-none">15+</p>
                <p className="text-[9px] font-bold text-[var(--text-secondary)] tracking-wider uppercase mt-1.5">Projects Shipped</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 pt-4 select-none"
            >
              <button
                onClick={handleScrollToWork}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary-blue to-primary-teal text-white font-semibold text-sm shadow-lg shadow-primary-teal/20 hover:scale-105 transition-all duration-300 pointer-events-auto"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300/30 dark:border-white/20 text-[var(--text-primary)] hover:border-primary-teal/40 hover:bg-slate-500/5 dark:hover:bg-white/5 font-semibold text-sm transition-all duration-300 pointer-events-auto"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right Side: Portrait Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Concentric Backplate Rings */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full border border-primary-teal/5 dark:border-primary-teal/10 absolute pointer-events-none" />
            <div className="absolute w-[270px] h-[270px] md:w-[360px] md:h-[360px] lg:w-[410px] lg:h-[410px] rounded-full border border-primary-blue/10 dark:border-primary-blue/15 absolute pointer-events-none" />
            <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full border-primary-blue/15 dark:border-primary-blue/20 border absolute pointer-events-none" />
            
            {/* Ambient Background Spotlight Glow */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(72,179,175,0.25)_0%,rgba(167,227,153,0.05)_55%,transparent_75%)] dark:bg-[radial-gradient(circle_at_center,rgba(72,179,175,0.3)_0%,rgba(167,227,153,0.05)_55%,transparent_75%)] blur-2xl pointer-events-none select-none" />

            {/* Silhouette Image Wrapper with 3D Parallax Tilt */}
            <motion.div
              style={{ rotateY, rotateX, transformStyle: 'preserve-3d', perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[440px] lg:h-[550px] flex items-center justify-center cursor-pointer z-10 select-none"
            >
              {/* Circular Glass Backplate (translateZ: -45px for depth) */}
              <div 
                className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full bg-slate-900/5 dark:bg-white/[0.01] backdrop-blur-md border border-neutral-200/10 dark:border-white/5 shadow-[inset_0_8px_32px_rgba(255,255,255,0.01)] pointer-events-none"
                style={{ transform: 'translateZ(-45px)', transformStyle: 'preserve-3d' }}
              />

              {/* Silhouette Image (translateZ: 30px for popout effect) */}
              <div 
                className="w-full h-full relative flex items-end justify-center"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  transform: 'translateZ(30px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <img
                  src={portrait}
                  alt="Hrishikesh Prasad C"
                  className="w-full h-full object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-[1.02] filter drop-shadow-[0_15px_30px_rgba(72,179,175,0.15)] dark:drop-shadow-[0_20px_50px_rgba(72,179,175,0.35)]"
                  style={{
                    clipPath: 'inset(0 0 15% 0)',
                    WebkitClipPath: 'inset(0 0 15% 0)'
                  }}
                />
              </div>

              {/* Floating Console Window: STACK OVERVIEW (translateZ: 95px for high-depth overlap) */}
              <div
                style={{ transform: 'translateZ(95px)' }}
                className="absolute -bottom-8 -left-6 md:-left-12 lg:-left-16 z-20 w-[220px] md:w-[245px] p-4 rounded-2xl border border-neutral-200/30 dark:border-white/10 bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl shadow-2xl text-left pointer-events-none"
              >
                {/* Header Dots */}
                <div className="flex items-center gap-1.5 pb-2.5 border-b border-neutral-200/10 dark:border-white/5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tech Icons Grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  {/* React */}
                  <div className="flex items-center justify-center p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-neutral-200/10 dark:border-white/5 shadow-sm">
                    <img src={reactIcon} alt="React" className="w-5 h-5 object-contain rounded" />
                  </div>

                  {/* Node.js */}
                  <div className="flex items-center justify-center p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-neutral-200/10 dark:border-white/5 shadow-sm">
                    <img src={jsIcon} alt="JavaScript" className="w-5 h-5 object-contain rounded" />
                  </div>

                  {/* Python */}
                  <div className="flex items-center justify-center p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-neutral-200/10 dark:border-white/5 shadow-sm">
                    <img src={pythonIcon} alt="Python" className="w-5 h-5 object-contain rounded" />
                  </div>

                  {/* PostgreSQL */}
                  <div className="flex items-center justify-center p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-neutral-200/10 dark:border-white/5 shadow-sm">
                    <img src={postgresIcon} alt="PostgreSQL" className="w-5 h-5 object-contain rounded" />
                  </div>

                  {/* Next.js */}
                  <div className="flex items-center justify-center p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-neutral-200/10 dark:border-white/5 shadow-sm">
                    <img src={nextjsIcon} alt="Next.js" className="w-5 h-5 object-contain rounded" />
                  </div>

                  {/* Django */}
                  <div className="flex items-center justify-center p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-neutral-200/10 dark:border-white/5 shadow-sm">
                    <img src={djangoIcon} alt="Django" className="w-5 h-5 object-contain rounded" />
                  </div>
                </div>

                {/* Window Footer */}
                <div className="flex items-center justify-between mt-3.5 pt-2 border-t border-neutral-200/10 dark:border-white/5 text-[8px] font-extrabold tracking-widest text-slate-500 dark:text-slate-400 uppercase select-none">
                  <span>Stack Overview</span>
                  <svg className="w-3.5 h-3.5 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </div>

              {/* Floating Info Tag Card (translateZ: 70px) */}
              <div
                style={{ transform: 'translateZ(70px)' }}
                className="absolute bottom-16 -right-6 md:-right-12 lg:-right-16 z-20 w-[190px] p-3 rounded-2xl border border-neutral-200/30 dark:border-white/10 bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl shadow-xl flex items-center gap-2.5 pointer-events-none text-left"
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary-blue to-primary-teal text-white shadow-md">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
                    <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
                    <circle cx="8" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-[7.5px] font-extrabold tracking-widest text-slate-500 dark:text-slate-400 uppercase select-none leading-none">Focus Area</p>
                  <p className="text-[10px] font-bold text-[var(--text-primary)] mt-0.5 leading-tight">Next.js & Django REST</p>
                </div>
              </div>
            </motion.div>

            {/* Retro Sparkle Star */}
            <div className="absolute bottom-20 -right-2 md:right-4 lg:right-6 opacity-30 dark:opacity-50 animate-pulse text-primary-teal pointer-events-none select-none z-0">
              <svg className="w-8 h-8 md:w-10 md:h-10 fill-currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"/>
              </svg>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 cursor-pointer pointer-events-auto select-none"
        onClick={handleScrollToWork}
      >
        <span className="text-[9px] text-[var(--text-secondary)] tracking-widest uppercase font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-neutral-300/30 dark:border-white/10 flex items-center justify-center bg-white/5 dark:bg-black/5 hover:border-primary-teal/40 transition-colors shadow-sm"
        >
          <svg className="w-3.5 h-3.5 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
