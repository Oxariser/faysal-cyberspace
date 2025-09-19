import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import fahimProfile from '@/assets/fahim-profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-text">
                Securing digital
                <br />
                frontiers, hunting
                <br />
                <span className="hero-accent">vulnerabilities.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                I'm <strong>Md. Fahim Faysal</strong>, a cybersecurity enthusiast and college student. 
                Aspiring to become a cybersecurity consultant and independent bug hunter.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently mastering cybersecurity through hands-on learning: 
                TryHackMe, Hack The Box, and real-world experience.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('portfolio')} className="cyber-button">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </div>

              {/* Email Contact */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input 
                  type="email" 
                  placeholder="fahimfaysal127@gmail.com" 
                  className="flex-1"
                  readOnly
                />
                <Button onClick={() => scrollToSection('contact')} variant="secondary">
                  Connect With Me
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative animate-float">
              <img
                src={fahimProfile}
                alt="Md. Fahim Faysal - Cybersecurity Enthusiast"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyber-blue/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;