import { Button } from "@/components/ui/button";
import { Github, Mail, Download, ExternalLink } from "lucide-react";
// Using external image as fallback since local generation failed
const profilePhoto = "https://bii20.github.io/profile_pic.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm <span className="gradient-text">Bii</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Data Analyst & Full Stack Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                With over 4 years of experience creating interactive web applications and 
                extracting valuable insights from data. I thrive at the intersection of 
                technology and analytics.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="hover-glow">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="hover-glow">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover-glow">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-glow">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card hover-glow">
                <img 
                  src={profilePhoto} 
                  alt="Bii - Data Analyst and Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full opacity-20 animate-pulse" 
                   style={{ background: 'var(--gradient-accent)' }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;