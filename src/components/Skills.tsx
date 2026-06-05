import { 
  Code, 
  Network, 
  Shield, 
  Search, 
  Globe, 
  Cpu, 
  Eye, 
  Zap,
  Terminal,
  Lock,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Terminal className="h-5 w-5" />,
      accent: "from-primary to-cyber-blue",
      skills: [
        { name: "Python", level: 85, icon: <Code className="h-4 w-4" /> },
        { name: "HTML/CSS", level: 90, icon: <Globe className="h-4 w-4" /> },
        { name: "Web Development", level: 80, icon: <Globe className="h-4 w-4" /> }
      ]
    },
    {
      title: "Cybersecurity Tools",
      icon: <Shield className="h-5 w-5" />,
      accent: "from-cyber-blue to-primary",
      skills: [
        { name: "Wireshark", level: 75, icon: <Network className="h-4 w-4" /> },
        { name: "Burp Suite", level: 80, icon: <Shield className="h-4 w-4" /> },
        { name: "Penetration Testing", level: 70, icon: <Search className="h-4 w-4" /> }
      ]
    },
    {
      title: "Security Domains",
      icon: <Lock className="h-5 w-5" />,
      accent: "from-cyber-green to-cyber-blue",
      skills: [
        { name: "Network Security", level: 75, icon: <Network className="h-4 w-4" /> },
        { name: "Web Security", level: 80, icon: <Globe className="h-4 w-4" /> },
        { name: "Vulnerability Assessment", level: 70, icon: <Eye className="h-4 w-4" /> }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Sparkles className="h-5 w-5" />,
      accent: "from-primary to-cyber-green",
      skills: [
        { name: "Prompt Engineering", level: 85, icon: <Zap className="h-4 w-4" /> },
        { name: "AI Security", level: 60, icon: <Cpu className="h-4 w-4" /> },
        { name: "Cloud Security", level: 55, icon: <Shield className="h-4 w-4" /> }
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
    <section id="skills" className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Developing comprehensive cybersecurity skills through hands-on learning and practical experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative rounded-xl bg-card border border-border/50 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
            >
              {/* Gradient top bar */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${category.accent} opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.accent} text-white shadow-lg shadow-primary/20`}>
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.accent} transition-all duration-700 ease-out shadow-[0_0_10px_hsl(var(--primary)/0.5)]`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Platforms */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
            Active Learning Platforms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-card border border-border/50 p-6 text-center transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl mb-4 inline-block transition-transform duration-300 group-hover:scale-110">
                    {platform.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
