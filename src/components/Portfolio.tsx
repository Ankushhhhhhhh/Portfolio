import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Menu, 
  X, 
  ArrowRight, 
  Target, 
  Users, 
  Layers, 
  Zap,
  Download,
  Globe
} from "lucide-react";
import { useState, useEffect, useCallback, useRef, FormEvent } from "react";
import Aurora from "./Aurora";

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
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 hidden md:block ${scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
      <div className="container-max flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-primary">Ankush Shetty</a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-text" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-bg-alt border-b border-border p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-text hover:text-primary transition-colors"
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
  <section id="home" className="min-h-screen relative flex flex-col justify-center items-center text-center px-6 pt-20 bg-gradient-to-b from-bg to-bg-alt overflow-hidden">
    {/* Aurora Background */}
    <Aurora
      colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
      blend={0.5}
      amplitude={1.0}
      speed={1}
    />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container-max relative z-10"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
        Building <span className="text-primary">Modern</span> Digital Experiences
      </h1>
      <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-medium">
        Hi, I'm Ankush. An aspiring web developer focused on creating clean, 
        functional, and user-friendly web applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#projects" 
          className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-hover transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center bg-bg text-text border border-border px-8 py-4 rounded-xl font-semibold hover:bg-bg-alt transition-all transform hover:-translate-y-1"
        >
          Get in Touch
        </a>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-bg">
    <div className="container-max">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-text-muted leading-relaxed mb-6">
            I am a passionate web developer with a focus on creating clean, intuitive, and responsive user experiences. 
            I love turning complex problems into simple, beautiful interface designs.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            My journey in tech is driven by curiosity and a commitment to continuous learning. 
            I specialize in building modern web applications using the latest technologies.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern shopping experience with real-time inventory and seamless checkout.",
      image: "https://picsum.photos/seed/shop/600/400",
      link: "#",
      tags: ["React", "Tailwind", "Firebase"]
    },
    {
      title: "Task Management App",
      description: "A productivity tool designed to help teams collaborate and stay organized.",
      image: "https://picsum.photos/seed/task/600/400",
      link: "#",
      tags: ["TypeScript", "Node.js", "MongoDB"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with beautiful visualizations and forecasts.",
      image: "https://picsum.photos/seed/weather/600/400",
      link: "#",
      tags: ["React", "API", "Chart.js"]
    },
    {
      title: "HDFC Bank Campaign",
      description: "An integrated fraud awareness campaign for HDFC Bank focused on educating users about digital scams and encouraging safer banking behavior through multi-channel marketing strategies.",
      image: "https://i.ibb.co/jvbdHkrc/hdfc.png",
      link: "https://drive.google.com/file/d/1m1X8_9U6f4K_fCi9trDRO12VpMdE-ekA/view?usp=sharing",
      tags: ["Marketing", "Strategy", "Research"],
      isPdf: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-bg-alt">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
          <p className="text-text-muted max-w-2xl mx-auto">A showcase of my recent work and technical projects.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group bg-bg border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/5 text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-muted text-sm mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-4">
                  {project.isPdf ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                    >
                      View PDF <ArrowRight size={16} />
                    </a>
                  ) : (
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-bg">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-text-muted mb-10">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Email Me</p>
                  <p className="font-semibold">ankushshetty0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Call Me</p>
                  <p className="font-semibold">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="bg-bg-alt p-8 md:p-10 rounded-3xl border border-border space-y-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary-hover transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Send Message
              </button>
              {formStatus && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 font-semibold text-center mt-4"
                >
                  {formStatus}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border bg-bg">
    <div className="container-max flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className="text-lg font-bold tracking-tighter text-primary mb-2">Ankush Shetty</p>
        <p className="text-sm text-text-muted">© 2026. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-bg-alt flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all duration-300">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-bg-alt flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all duration-300">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);


const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2025",
      image: "https://picsum.photos/seed/cert1/600/400",
      link: "#"
    },
    {
      title: "Advanced React Patterns",
      issuer: "Udemy",
      date: "2024",
      image: "https://picsum.photos/seed/cert2/600/400",
      link: "#"
    },
    {
      title: "UI/UX Design Essentials",
      issuer: "Google",
      date: "2024",
      image: "https://picsum.photos/seed/cert3/600/400",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-bg">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Professional certifications and courses I have completed.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group bg-bg-alt border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">{cert.issuer} • {cert.date}</p>
                <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors">{cert.title}</h3>
                <a 
                  href={cert.link} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-text hover:text-primary transition-all"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Navbar, Hero, About, Projects, Certificates, Contact, Footer };
