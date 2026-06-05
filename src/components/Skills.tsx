import { useEffect, useState } from 'react';
import {
  Code,
  Network,
  Shield,
  Search,
  Globe,
  Cpu,
  Eye,
  Zap,
  Lock,
  Terminal,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const skills = [
  { name: 'Python', level: 85, icon: Code },
  { name: 'Web Dev', level: 80, icon: Globe },
  { name: 'Wireshark', level: 75, icon: Network },
  { name: 'Burp Suite', level: 80, icon: Shield },
  { name: 'Pentesting', level: 70, icon: Search },
  { name: 'Net Security', level: 75, icon: Lock },
  { name: 'Web Security', level: 80, icon: Globe },
  { name: 'Vuln Assess', level: 70, icon: Eye },
  { name: 'Prompt Eng', level: 85, icon: Zap },
  { name: 'AI Security', level: 60, icon: Cpu },
  { name: 'Cloud Sec', level: 55, icon: Terminal },
];

const platforms = [
  { name: 'TryHackMe', description: 'Active learner with multiple rooms completed', icon: '🎯' },
  { name: 'Hack The Box', description: 'Practicing penetration testing skills', icon: '📦' },
  { name: 'Secure Byte', description: 'Ambassador contributing to cybersecurity community', icon: '🛡️' },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % skills.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const total = skills.length;
  const featured = skills[active];
  const FeaturedIcon = featured.icon;

  return (
    <section id="skills" className="py-16 sm:py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Skills & <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A rotating arsenal of cybersecurity tools, programming languages, and
              security domains I've been sharpening through hands-on practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                className="cyber-button"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                See More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Current featured stat */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-card/60 backdrop-blur px-4 py-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-cyber-blue text-white">
                <FeaturedIcon className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Currently featured</div>
                <div className="font-semibold text-sm">
                  {featured.name} · {featured.level}%
                </div>
              </div>
            </div>
          </div>

          {/* Right: rolling arc */}
          <div className="relative w-full aspect-square max-w-[520px] mx-auto">
            {/* Concentric arcs */}
            <div className="absolute inset-0 rounded-full border border-primary/10" />
            <div className="absolute inset-[8%] rounded-full border border-primary/15" />
            <div className="absolute inset-[18%] rounded-full border border-primary/20" />

            {/* Soft center glow */}
            <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-primary/30 to-cyber-blue/20 blur-2xl" />

            {/* Center featured */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl animate-pulse" />
                <div
                  key={active}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-cyber-blue flex flex-col items-center justify-center text-white shadow-2xl shadow-primary/40 border border-primary/40 animate-in fade-in zoom-in-90 duration-500"
                >
                  <FeaturedIcon className="h-10 w-10 sm:h-12 sm:w-12 mb-1" />
                  <span className="font-bold text-sm sm:text-base">{featured.name}</span>
                  <span className="text-xs opacity-80 font-mono">{featured.level}%</span>
                </div>
              </div>
            </div>

            {/* Rotating ring of icons */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={{
                transform: `rotate(${-(360 / total) * active}deg)`,
              }}
            >
              {skills.map((s, i) => {
                const angle = (360 / total) * i - 90; // start at top
                const rad = (angle * Math.PI) / 180;
                const radius = 44; // % of container
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                const Icon = s.icon;
                const isActive = i === active;

                return (
                  <button
                    key={s.name}
                    onClick={() => setActive(i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    aria-label={s.name}
                  >
                    {/* Counter-rotate so icon stays upright */}
                    <div
                      className="transition-transform duration-700 ease-in-out"
                      style={{ transform: `rotate(${(360 / total) * active}deg)` }}
                    >
                      <div
                        className={`flex items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? 'w-14 h-14 bg-gradient-to-br from-primary to-cyber-blue text-white border-primary shadow-lg shadow-primary/50 scale-110'
                            : 'w-11 h-11 bg-card/80 backdrop-blur text-primary border-primary/30 hover:border-primary hover:scale-110 hover:text-cyber-blue'
                        }`}
                      >
                        <Icon className={isActive ? 'h-6 w-6' : 'h-5 w-5'} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Learning Platforms */}
        <div className="mt-16 sm:mt-20">
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
