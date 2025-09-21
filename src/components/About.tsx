import { GraduationCap, Award, Target, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Education",
      description: "Currently in Intermediate (Class 11), planning Computer Science major with cybersecurity focus"
    },
    {
      icon: <Award className="h-8 w-8 text-cyber-blue" />,
      title: "Certification",
      description: "Completed 2-month cybersecurity internship with CSCI certification"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyber-green" />,
      title: "Experience",
      description: "Active on TryHackMe, Hack The Box, and Secure Byte Ambassador"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Goal",
      description: "Aspiring cybersecurity consultant and independent bug hunter"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate cybersecurity student dedicated to protecting digital assets and hunting vulnerabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-center lg:text-left">My Journey in Cybersecurity</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm <strong>Md. Fahim Faysal</strong>, a dedicated college student with an unwavering passion for cybersecurity. 
                Currently pursuing my intermediate education (Class 11), I'm actively preparing for higher studies in 
                computer science with a specialized focus on cybersecurity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with curiosity about how systems work and evolved into a deep commitment to 
                protecting them. Through platforms like TryHackMe and Hack The Box, I've been building practical 
                skills in penetration testing, network security, and vulnerability assessment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Secure Byte Ambassador and having completed a comprehensive 2-month cybersecurity internship 
                with CSCI certification, I'm constantly expanding my knowledge and staying current with the 
                latest security trends and threats.
              </p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-muted-foreground italic">
                "My goal is to become a trusted cybersecurity consultant and skilled bug hunter, 
                helping organizations strengthen their security posture while contributing to a safer digital world."
              </p>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            {highlights.map((item, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-muted/50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;