import { 
  Code, 
  Network, 
  Shield, 
  Search, 
  Globe, 
  Cpu, 
  Eye, 
  Zap 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: [
        { name: "Python", level: 85, icon: <Code className="h-5 w-5" /> },
        { name: "HTML/CSS", level: 90, icon: <Globe className="h-5 w-5" /> },
        { name: "Web Development", level: 80, icon: <Globe className="h-5 w-5" /> }
      ]
    },
    {
      title: "Cybersecurity Tools",
      skills: [
        { name: "Wireshark", level: 75, icon: <Network className="h-5 w-5" /> },
        { name: "Burp Suite", level: 80, icon: <Shield className="h-5 w-5" /> },
        { name: "Penetration Testing", level: 70, icon: <Search className="h-5 w-5" /> }
      ]
    },
    {
      title: "Security Domains",
      skills: [
        { name: "Network Security", level: 75, icon: <Network className="h-5 w-5" /> },
        { name: "Web Security", level: 80, icon: <Globe className="h-5 w-5" /> },
        { name: "Vulnerability Assessment", level: 70, icon: <Eye className="h-5 w-5" /> }
      ]
    },
    {
      title: "Emerging Technologies",
      skills: [
        { name: "Prompt Engineering", level: 85, icon: <Zap className="h-5 w-5" /> },
        { name: "AI Security", level: 60, icon: <Cpu className="h-5 w-5" /> },
        { name: "Cloud Security", level: 55, icon: <Shield className="h-5 w-5" /> }
      ]
    }
  ];

  const platforms = [
    {
      name: "TryHackMe",
      description: "Active learner with multiple rooms completed",
      icon: "🎯"
    },
    {
      name: "Hack The Box",
      description: "Practicing penetration testing skills",
      icon: "📦"
    },
    {
      name: "Secure Byte",
      description: "Ambassador contributing to cybersecurity community",
      icon: "🛡️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Developing comprehensive cybersecurity skills through hands-on learning and practical experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="skill-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-primary">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Platforms */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Active Learning Platforms</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="skill-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;