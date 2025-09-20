import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import fahimProfile from '@/assets/fahim-profile-new.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-grid-flow"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 border border-cyber-blue/40 rotate-12 animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-primary/20 rounded-full animate-float"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-glow-pulse shadow-glow-primary"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-cyber-blue rounded-full animate-glow-pulse delay-1000 shadow-glow-blue"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse delay-2000 shadow-glow-green"></div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent animate-matrix-rain"
              style={{
                left: `${i * 12.5}%`,
                height: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-text relative">
                <span className="relative z-10">
                  Securing digital
                  <br />
                  frontiers, hunting
                  <br />
                  <span className="hero-accent relative">
                    vulnerabilities.
                    <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-lg animate-pulse-glow"></div>
                  </span>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in">
                I'm <strong className="text-primary">Md. Fahim Faysal</strong>, a cybersecurity enthusiast and college student. 
                Aspiring to become a cybersecurity consultant and independent bug hunter.
              </p>
              <p className="text-lg text-muted-foreground animate-fade-in delay-200">
                Currently mastering cybersecurity through hands-on learning: 
                TryHackMe, Hack The Box, and real-world experience.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 animate-fade-in delay-300">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('portfolio')} className="cyber-button relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="group hover-glow">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download CV
                </Button>
              </div>

              {/* Email Contact */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input 
                  type="email" 
                  placeholder="fahimfaysal127@gmail.com" 
                  className="flex-1 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary/50"
                  readOnly
                />
                <Button onClick={() => scrollToSection('contact')} variant="secondary" className="hover-glow">
                  Connect With Me
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            {/* Holographic Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cyber-blue/20 rounded-2xl blur-xl animate-pulse-glow"></div>
            
            <div className="relative animate-float">
              {/* Image Container with Glitch Effect */}
              <div className="relative group">
                <img
                  src={fahimProfile}
                  alt="Md. Fahim Faysal - Cybersecurity Enthusiast"
                  className="w-full max-w-lg mx-auto rounded-full shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-300 aspect-square object-cover"
                />
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-cyber-blue/10 animate-gradient-shift"></div>
                
                {/* Scanning Line Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line"></div>
                </div>
              </div>
            </div>
            
            {/* Advanced Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/30 rounded-full animate-spin-slow">
              <div className="absolute inset-4 border border-primary/50 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-8 w-4 h-4 bg-primary rounded-full animate-glow-pulse shadow-glow-primary"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-cyber-blue/40 rotate-45 animate-float">
              <div className="absolute inset-2 border border-cyber-blue/60 rotate-45 animate-pulse"></div>
            </div>
            
            <div className="absolute top-1/3 -right-12 w-12 h-12 border-2 border-cyber-green/30 rounded-full animate-bounce delay-500">
              <div className="absolute inset-2 bg-cyber-green/20 rounded-full animate-pulse-glow"></div>
            </div>
            
            {/* Data Stream Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-20 bg-gradient-to-b from-primary to-transparent animate-data-stream"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                    animationDelay: `${i * 0.8}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;