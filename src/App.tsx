import { ThemeToggle } from "./components/ThemeToggle";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { NarrativeSection } from "./components/NarrativeSection";
import { WorkSection } from "./components/WorkSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ResumeSection } from "./components/ResumeSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <NarrativeSection />
      <WorkSection />
      {/* <TransitionSection /> */}
      <ExperienceSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}

export default App;
