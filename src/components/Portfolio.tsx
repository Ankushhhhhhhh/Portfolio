import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useRef, FormEvent } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-semibold tracking-tight">Ankush Shetty</a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-muted transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border p-6 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Ankush Shetty</h1>
      <p className="text-xl md:text-2xl text-muted mb-8 font-light">Aspiring Web Developer</p>
      <a 
        href="#projects" 
        className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all transform hover:scale-105"
      >
        View Projects
      </a>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 bg-zinc-50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-lg text-muted leading-relaxed">
        I am a passionate web developer with a focus on creating clean, intuitive, and responsive user experiences. 
        I love turning complex problems into simple, beautiful interface designs. My journey in tech is driven by 
        curiosity and a commitment to continuous learning.
      </p>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern shopping experience with real-time inventory and seamless checkout.",
      image: "https://picsum.photos/seed/shop/600/400",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity tool designed to help teams collaborate and stay organized.",
      image: "https://picsum.photos/seed/task/600/400",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with beautiful visualizations and forecasts.",
      image: "https://picsum.photos/seed/weather/600/400",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Selected Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted text-sm mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("Thank you! Your message has been sent.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-muted mb-8">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center">
                <Mail size={18} />
              </div>
              <span>ankushshetty0@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center">
                <Phone size={18} />
              </div>
              <span>+1 (555) 000-0000</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              required 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-zinc-800 transition-all"
          >
            Send Message
          </button>
          {formStatus && <p className="text-sm text-green-600 mt-2">{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm text-muted">© 2026 Ankush Shetty. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-black transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-black transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export { Navbar, Hero, About, Projects, Contact, Footer };
