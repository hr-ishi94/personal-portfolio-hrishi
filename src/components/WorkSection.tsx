import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import dino from "../assets/dino.png";
import pomoDino from "../assets/pomo-dino.png";
import nikeClone from "../assets/nike-clone.png";
import taskBuddy from "../assets/taskbuddy.png";
import scholarCode from "../assets/scolarCode.png";

const projects = [
  {
    title: "PomoDino",
    description: " PomoDino is a gamified productivity application built to make focused work engaging and rewarding. The platform is based on the Pomodoro technique, where users complete structured work sessions (typically 25 minutes of focus followed by 5 minutes of break) to maintain deep concentration and prevent burnout.What makes PomoDino unique is its game-inspired reward system. As users complete focus sessions, they earn rewards that help grow and evolve a virtual dinosaur companion. Consistent productivity builds streaks, unlocks new assets, and visually represents the user’s progress, turning daily work into a motivating experience rather than a repetitive task.The application is designed to help users reduce distractions, build strong focus habits, and maintain consistent productivity. By combining time management principles, behavioral motivation, and interactive visual elements, PomoDino transforms productivity into a fun and immersive journey.",
    tech: "Python · Django · React · PostgreSQL",
    gradient: "bg-gradient-teal-mint",
    image: pomoDino,
    status: "coming_soon"
  },
  {
    title: "Dine-O",
    description: "Dine-O is a digital restaurant management and ordering platform designed to streamline the dining experience for both customers and restaurant staff. The system enables customers to browse digital menus, place orders directly from their tables, and complete payments seamlessly through a web-based interface.The platform provides restaurants with powerful tools to manage menus, track orders in real time, monitor table activity, and analyze sales performance. By digitizing the ordering workflow, Dine-O reduces wait times, minimizes human errors, and improves overall operational efficiency. The system includes features such as QR-based menu access, real-time order processing, secure payment integration, and an intuitive dashboard for restaurant administrators to manage menu items, orders, and customer data.",
    tech: "Python · Django · React · PostgreSQL",
    gradient: "bg-gradient-blue-teal",
    image: dino,
    status: "coming_soon"
  },
  {
    title: "Nike Clone",
    description: "A beautifully crafted, modern replica of the Nike e-commerce landing page. Features responsive design, dynamic UI elements, and highly polished product showcases built with React and Tailwind CSS.",
    tech: "React · Tailwind CSS · TypeScript ",
    gradient: "bg-gradient-editorial",
    image: nikeClone,
    url: "https://nike-clone-react-tailwind.vercel.app/"
  },
  {
    title: "Task Buddy",
    description: "Task Buddy is a comprehensive task management application designed to help individuals organize their daily activities, track progress, and maintain productivity. The platform allows users to create, manage, and prioritize tasks with features such as due dates, reminders, and progress tracking. Task Buddy streamlines workflows, reduces procrastination, and helps users achieve their goals more effectively. The application is built with a user-friendly interface, making task management simple and intuitive.",
    tech: "React · Tailwind CSS · Javascript ",
    gradient: "bg-gradient-hero",
    image: taskBuddy,
    url: "https://taskbuddy-sable.vercel.app/"
  },
  {
    title: "ScholarCode",
    description: "Scholarcode is an e-learning platform designed to enhance self-learning experiences through personalized mentoring and interactive features. Users enrolling in a course are paired with a mentor who conducts weekly reviews, addresses previous task queries, and clarifies user doubts. The platform integrates payment processing and authentication, offering real-time chat, notifications, and video call functionalities. Scholarcode significantly improves course completion rates by 70-80% through mentor-driven learning workflows compared to traditional online courses due to effective mentorship. Implemented real-time messaging using Django Channels and WebSockets",
    tech: "Python · Django · React · Redis",
    gradient: "bg-gradient-mint-lime",
    image: scholarCode,
    url: "https://scholar-code.vercel.app/"
  },
];

export function WorkSection() {
  return (
    <section className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-headline leading-[0.9] tracking-tight mb-4">
            Selected
            <br />
            <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  const imageStyles = `w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${project.url ? 'object-contain p-8' : 'object-contain p-12'
    } ${project.status === 'coming_soon' ? 'opacity-50 blur-[2px] grayscale-[30%]' : ''}`;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
    >
      <motion.div
        style={{ y }}
        className={`lg:col-span-7 ${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-6'}`}
      >
        <div className="space-y-6">
          <h3 className="text-[clamp(3rem,8vw,5rem)] font-headline leading-[0.95] tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h3>

          <p className="text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
            {project.description}
          </p>

          <p className="text-sm text-[var(--text-secondary)] tracking-wide pt-4">
            {project.tech}
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className={`lg:col-span-5 relative group ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
      >
        <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${project.gradient} animate-gradient flex items-center justify-center bg-white/5`}>
          {project.image && (
            project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 w-full h-full flex items-center justify-center p-8"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-contain rounded-xl transition-transform duration-700 ease-out group-hover:scale-105 ${project.status === 'coming_soon' ? 'opacity-50 blur-[2px] grayscale-[30%]' : ''
                    }`}
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className={imageStyles}
              />
            )
          )}

          {project.status === "coming_soon" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
              <div className="group-hover:scale-105 transition-transform duration-500 px-8 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium tracking-widest uppercase text-sm flex items-center gap-4 shadow-2xl">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </div>
                Under Construction
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
