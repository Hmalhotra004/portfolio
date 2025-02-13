import NavBar from "@/components/Other/NavBar";
import Contact from "@/components/Sections/Contact";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import ProjectsSection from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";

export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <div className="fixed top-0 -z-10 h-full w-full ">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <ProjectsSection />
        <Contact />
      </div>
    </section>
  );
}
