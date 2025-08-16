import { Button } from "@/components/ui/button";
import { Github, Mail, Download, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>

        <div className="glass-card p-8 lg:p-12 rounded-3xl text-center slide-up">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're looking for a data analyst, full-stack developer, 
            or just want to connect, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="hover-glow"
              onClick={() => window.open('https://github.com/Bii20', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-glow"
              onClick={() => window.open('https://drive.google.com/file/d/1OXpdz1y9jc11It2EJGF5d__ahsam63Za/view?usp=drive_link', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-glow"
              onClick={() => window.open('https://github.com/Bii20', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-glow"
              onClick={() => window.location.href = 'mailto:your.email@example.com'}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;