import Image from 'next/image'
import HeroSection from "./components/herosection"
import ProjectsSection from "./components/projects"
import SkillsSection from "./components/skills"
import AchievementsSection from "./components/achievements"
import ContactSection from "./components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12">
      <div className="container">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </div>
    </main>
  )
}
