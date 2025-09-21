import { ExternalLink, Github, Globe, Code } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Cybersecurity Portfolio",
      description: "A modern, responsive portfolio website showcasing my cybersecurity journey, skills, and aspirations. Built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      category: "Web Development",
      status: "Current Project",
      features: [
        "Modern minimalistic design",
        "Responsive across all devices",
        "Smooth animations and transitions",
        "Professional presentation of skills"
      ],
      liveUrl: window.location.origin,
      codeUrl: "https://github.com/your-username/portfolio"
    }
  ];

  const upcomingProjects = [
    {
      title: "Vulnerability Scanner Tool",
      description: "Planning to build a Python-based vulnerability scanning tool for web applications",
      status: "Planned"
    },
    {
      title: "Network Security Monitor",
      description: "A network monitoring tool to detect suspicious activities and potential threats",
      status: "In Research"
    },
    {
      title: "CTF Challenge Solutions",
      description: "Documentation and solutions for various Capture The Flag challenges",
      status: "Ongoing"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio & Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my development skills and cybersecurity projects as I build my professional portfolio
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Current Projects</h3>
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="skill-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg sm:text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge className="bg-cyber-blue text-white">{project.status}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2 self-start">
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button 
                      className="flex-1" 
                      variant="default"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                    <Button 
                      className="flex-1" 
                      variant="outline"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Upcoming Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">{project.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 p-6 sm:p-8 bg-muted/30 rounded-xl">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">More Projects Coming Soon!</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            I'm constantly working on new cybersecurity projects and tools. 
            Follow my journey and connect with me to see my latest work.
          </p>
          <Button 
            className="cyber-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;