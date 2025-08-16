import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 animate-pulse" 
             style={{ background: 'var(--gradient-accent)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10 animate-pulse delay-1000" 
             style={{ background: 'var(--gradient-accent)' }}></div>
      </div>
    </div>
  );
};

export default Index;