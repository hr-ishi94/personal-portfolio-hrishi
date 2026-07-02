import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import dino from "../assets/dino.png";
import pomoDino from "../assets/pomo-dino.png";
import nikeClone from "../assets/nike-clone.png";
import taskBuddy from "../assets/taskbuddy.png";
import scholarCode from "../assets/scolarCode.png";

const projects = [
  {
    title: "PomoDino",
    description: "PomoDino is a gamified productivity application built to make focused work engaging and rewarding. The platform is based on the Pomodoro technique, where users complete structured work sessions to maintain deep concentration and prevent burnout. As users complete focus sessions, they earn rewards that help grow and evolve a virtual dinosaur companion. Consistent productivity builds streaks, unlocks new assets, and visually represents the user’s progress, turning daily work into a motivating experience.",
    tech: ["Python", "Django", "React", "PostgreSQL", "Tailwind CSS"],
    gradient: "bg-gradient-teal-mint",
    image: pomoDino,
    status: "coming_soon"
  },
  {
    title: "Dine-O",
    description: "Dine-O is a digital restaurant management and ordering platform designed to streamline the dining experience for both customers and restaurant staff. The system enables customers to browse digital menus, place orders directly from their tables, and complete payments seamlessly through a web-based interface. The platform provides restaurants with powerful tools to manage menus, track orders in real time, monitor table activity, and analyze sales performance.",
    tech: ["Python", "Django", "React", "PostgreSQL", "WebSockets"],
    gradient: "bg-gradient-blue-teal",
    image: dino,
    status: "coming_soon"
  },
  {
    title: "Nike Clone",
    description: "A beautifully crafted, modern replica of the Nike e-commerce landing page. Features responsive design, dynamic UI elements, and highly polished product showcases built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    gradient: "bg-gradient-editorial",
    image: nikeClone,
    url: "https://nike-clone-react-tailwind.vercel.app/",
    github: "https://github.com/hr-ishi94/nikeCloneReactTailwind"
  },
  {
    title: "Task Buddy",
    description: "Task Buddy is a comprehensive task management application designed to help individuals organize their daily activities, track progress, and maintain productivity. The platform allows users to create, manage, and prioritize tasks with features such as due dates, reminders, and progress tracking. Task Buddy streamlines workflows, reduces procrastination, and helps users achieve their goals more effectively.",
    tech: ["React", "Tailwind CSS", "JavaScript", "LocalStorage"],
    gradient: "bg-gradient-hero",
    image: taskBuddy,
    url: "https://taskbuddy-sable.vercel.app/",
    github: "https://github.com/hr-ishi94/task-buddy-app"
  },
  {
    title: "ScholarCode",
    description: "Scholarcode is an e-learning platform designed to enhance self-learning experiences through personalized mentoring and interactive features. Users enrolling in a course are paired with a mentor who conducts reviews, addresses queries, and clarifies doubts. The platform integrates payment processing, real-time chat, notifications, and video call functionalities. Scholarcode significantly improves course completion rates by 70-80% through mentor-driven learning workflows.",
    tech: ["Python", "Django", "React", "Redis", "Django Channels", "WebSockets"],
    gradient: "bg-gradient-mint-lime",
    image: scholarCode,
    url: "https://scholar-code.vercel.app/",
    github: "https://github.com/hr-ishi94/scholarCODE"
  },
];

export function WorkSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.firstElementChild as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const style = window.getComputedStyle(sliderRef.current);
        const gap = parseFloat(style.columnGap || style.gap || '0') || 24;
        const scrollAmount = cardWidth + gap;
        sliderRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      } else {
        const scrollAmount = sliderRef.current.clientWidth * 0.8;
        sliderRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="work" className="relative py-20 md:py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header row with arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-extrabold leading-[0.9] tracking-tight mb-4 text-[var(--text-primary)]">
              Selected
              <br />
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg font-light leading-relaxed">
              A curated selection of projects demonstrating full-stack engineering expertise, interactive interfaces, and robust systems architecture.
            </p>
          </motion.div>

          {/* Slider Navigation Arrows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 self-start md:self-end select-none"
          >
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full border border-neutral-300/30 dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-slate-950/20 backdrop-blur-md hover:border-primary-teal/40 hover:text-primary-teal hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full border border-neutral-300/30 dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-slate-950/20 backdrop-blur-md hover:border-primary-teal/40 hover:text-primary-teal hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Slidable Cards Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-6 pb-8 -mx-6 px-6 md:-mx-8 md:px-8 scroll-pl-6 md:scroll-pl-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const getTechDotColor = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react')) return 'bg-[#61dafb]';
  if (t.includes('python')) return 'bg-[#3776ab]';
  if (t.includes('django')) return 'bg-[#092e20] dark:bg-[#10b981]';
  if (t.includes('typescript')) return 'bg-[#3178c6]';
  if (t.includes('javascript') || t === 'js') return 'bg-[#f1e05a]';
  if (t.includes('postgres')) return 'bg-[#336791]';
  if (t.includes('tailwind')) return 'bg-[#06b6d4]';
  if (t.includes('redis')) return 'bg-[#d82c20]';
  return 'bg-slate-400';
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] flex-shrink-0 snap-start flex flex-col space-y-6 group">
      {/* Image Showcase Panel */}
      <div className="relative cursor-pointer w-full">
        {/* Glow backdrop shadow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-blue via-primary-teal to-primary-mint opacity-5 group-hover:opacity-10 blur-lg transition-opacity duration-500 pointer-events-none" />
        
        {/* Offset background outline card */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl border border-neutral-300/10 dark:border-white/5 bg-slate-500/5 dark:bg-white/[0.01] pointer-events-none -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
        
        {/* Main image container card */}
        <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${project.gradient} animate-gradient flex items-center justify-center p-4 border border-neutral-200/10 dark:border-white/5 shadow-lg`}>
          
          {/* Decorative corner ticks/crosshairs */}
          <div className="absolute top-2.5 left-2.5 text-neutral-400/30 dark:text-white/10 text-[9px] font-mono select-none pointer-events-none">+</div>
          <div className="absolute top-2.5 right-2.5 text-neutral-400/30 dark:text-white/10 text-[9px] font-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 left-2.5 text-neutral-400/30 dark:text-white/10 text-[9px] font-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-2.5 right-2.5 text-neutral-400/30 dark:text-white/10 text-[9px] font-mono select-none pointer-events-none">+</div>

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-contain rounded-lg transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                project.status === 'coming_soon' ? 'opacity-40 blur-[2px] grayscale-[40%]' : ''
              }`}
            />
          )}

          {project.status === "coming_soon" && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[2.5px] pointer-events-none">
              <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white font-semibold tracking-wider uppercase text-[8px] flex items-center gap-2 shadow-xl">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                </span>
                Under Construction
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Details Panel */}
      <div className="space-y-4 text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[10px] font-bold tracking-widest text-primary-teal uppercase">
              Project {String(index + 1).padStart(2, '0')}
            </span>
            {project.status === 'coming_soon' && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[8px] font-bold tracking-wider uppercase border border-amber-500/20">
                In Development
              </span>
            )}
          </div>
          
          <h3 className="text-xl md:text-2xl font-headline font-bold leading-tight text-[var(--text-primary)] group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <div className="pl-4 border-l border-primary-teal dark:border-primary-teal/40 py-1">
          <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1 select-none">
          {project.tech.map((techItem, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium border border-neutral-200/60 dark:border-white/5 bg-slate-500/5 dark:bg-white/[0.02] text-[var(--text-secondary)] hover:border-primary-teal/40 hover:text-[var(--text-primary)] transition-all duration-300 cursor-default"
            >
              <span className={`w-1 h-1 rounded-full ${getTechDotColor(techItem)}`} />
              {techItem}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2 select-none">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary-blue to-primary-teal text-white font-semibold text-[10px] shadow-md shadow-primary-teal/15 hover:shadow-primary-teal/25 hover:scale-105 transition-all duration-300"
            >
              Live Demo
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300/30 dark:border-white/10 text-[var(--text-primary)] hover:border-primary-teal/40 hover:bg-slate-500/5 dark:hover:bg-white/5 font-semibold text-[10px] transition-all duration-300"
            >
              <Github className="w-3.5 h-3.5" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

