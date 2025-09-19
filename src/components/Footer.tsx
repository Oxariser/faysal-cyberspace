import { Heart, Shield, Mail, Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:fahimfaysal127@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/oxariser",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Oxariser",
      label: "GitHub"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com/0xAriser",
      label: "Facebook"
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Md. Fahim Faysal</span>
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              Cybersecurity Enthusiast | Aspiring Consultant & Bug Hunter
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 text-sm">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-muted/20"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground space-y-4 sm:space-y-0">
            <p>
              © {currentYear} Md. Fahim Faysal. All rights reserved.
            </p>
            <p className="flex items-center">
              Built with{' '}
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              for cybersecurity
            </p>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Currently accepting learning opportunities and cybersecurity collaborations</p>
            <p>Response time: Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;