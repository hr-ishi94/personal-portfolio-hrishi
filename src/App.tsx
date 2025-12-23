import { ThemeToggle } from "./components/ThemeToggle";
import { HeroSection } from "./components/HeroSection";
import { NarrativeSection } from "./components/NarrativeSection";
import { WorkSection } from "./components/WorkSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { TransitionSection } from "./components/TransitionSection";

function App() {
  return (
    <div className="relative">
      <ThemeToggle />

      <HeroSection />
      <NarrativeSection />
      <TransitionSection />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
