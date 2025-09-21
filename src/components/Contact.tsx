import { Mail, Linkedin, Github, Facebook, Send, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "fahimfaysal127@gmail.com",
      link: "mailto:fahimfaysal127@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/oxariser",
      link: "https://linkedin.com/in/oxariser"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/Oxariser",
      link: "https://github.com/Oxariser"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      value: "facebook.com/0xAriser",
      link: "https://facebook.com/0xAriser"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Fahim Faysal',
      };

      await emailjs.send(
        'service_hrailyz',
        'template_rffen54',
        templateParams,
        'NkJ8Aed5NjRMkh67a'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss cybersecurity opportunities, collaborations, or just want to connect? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're a fellow cybersecurity enthusiast, potential mentor, collaborator, 
                or someone interested in my services, I'm always open to meaningful conversations 
                about cybersecurity and technology.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="skill-card cursor-pointer">
                    <CardContent className="flex items-center p-4 sm:p-6">
                      <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary mr-3 sm:mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm sm:text-base">{item.label}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-all">{item.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="skill-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Current Status
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📚 Studying: Intermediate (Class 11)</p>
                  <p>🎯 Focus: Cybersecurity & Computer Science</p>
                  <p>📍 Location: Available for remote opportunities</p>
                  <p>⏰ Response Time: Usually within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs sm:text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hi!"
                      className="text-sm sm:text-base"
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="cyber-button w-full text-sm sm:text-base" disabled={isLoading}>
                    <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;