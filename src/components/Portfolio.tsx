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
  ArrowLeft,
  Target, 
  Users, 
  Layers, 
  Zap,
  Download,
  Globe
} from "lucide-react";
import { useState, useEffect, useCallback, useRef, FormEvent } from "react";
import Aurora from "./Aurora";
import GradientText from "./GradientText";
import useEmblaCarousel from 'embla-carousel-react';
import OrbitImages from './OrbitImages';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-md border-b-2 border-transparent py-4" : "bg-transparent py-6"}`} style={scrolled ? { borderImage: 'linear-gradient(to right, #5227FF, #FF9FFC, #B19EEF) 1' } : {}}>
      <div className="container-max flex justify-between items-center px-6">
        <a href="#home" className="text-xl font-bold tracking-tighter">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
          >
            Ankush Shetty
          </GradientText>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-muted hover:gradient-icon transition-all">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden gradient-icon" onClick={() => setIsOpen(!isOpen)}>
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
              className="text-lg font-medium text-text hover:gradient-icon transition-all"
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
      colorStops={["#5227FF", "#FF9FFC", "#B19EEF"]}
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
        Building <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
        >
          Modern
        </GradientText> Digital Experiences
      </h1>
      <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-medium">
        Hi, I'm Ankush. An aspiring web developer focused on creating clean, 
        functional, and user-friendly web applications.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#projects" 
          className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10"
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
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.postimg.cc/5tnMXJrJ/download.jpg" 
              alt="Ankush" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-bg opacity-20 rounded-full -z-10 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About Me
          </GradientText>
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
      title: "HDFC Bank Campaign",
      description: "An integrated fraud awareness campaign for HDFC Bank focused on educating users about digital scams and encouraging safer banking behavior through multi-channel marketing strategies.",
      image: "https://i.postimg.cc/s2pvqM1D/Screenshot-2026-03-19-164544.png",
      link: "https://drive.google.com/file/d/1m1X8_9U6f4K_fCi9trDRO12VpMdE-ekA/view?usp=sharing",
      tags: ["Marketing", "Strategy", "Research"],
      isPdf: true
    },
    {
      title: "Boat Pitch Deck",
      description: "A strategic marketing campaign for boAt Airdopes AURA aimed at positioning it as an affordable-premium audio product for young users through a digital-first, lifestyle-driven approach.",
      image: "https://i.postimg.cc/j5ZTW7M3/Screenshot-2026-03-19-175324.png",
      link: "https://drive.google.com/file/d/1MZa5yXoqKnNOetWxQ06dubkf3iIzhaFp/view?usp=drive_link",
      tags: ["Marketing", "Digital", "Branding"],
      isPdf: true
    },
    {
      title: "Sleepy Owl SEO",
      description: "An SEO-focused project for Sleepy Owl aimed at improving online visibility and traffic through keyword research, technical optimization, and content strategy.",
      image: "https://i.postimg.cc/zBgxRZDf/Screenshot-2026-03-19-182359.png",
      link: "https://drive.google.com/file/d/1Xh_rGS3SiSnLqsr8VzJZMiQagAwF3ZOk/view?usp=drive_link",
      tags: ["SEO", "Marketing"],
      isPdf: true
    },
    {
      title: "Creators Communityy Website",
      description: "Built a webinar landing page for a creators community, integrating Synamate CRM and payment systems to enable seamless registrations, generating ₹12,000+ in revenue.",
      image: "https://i.postimg.cc/hthmyLks/Screenshot-2026-03-19-183844.png",
      link: "https://webinar.creatorcommunityy.com",
      tags: ["Website", "Sales"],
      isPdf: false
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="section-padding bg-bg-alt overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-16">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Selected Projects
          </GradientText>
          <p className="text-text-muted max-w-2xl mx-auto">A showcase of my recent work and technical projects.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-bg border border-border rounded-[40px] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col md:flex-row h-full min-h-[450px]"
                  >
                    <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-transparent group-hover:gradient-bg group-hover:opacity-10 transition-all duration-300"></div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex gap-2 mb-6 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-bg-alt border border-border rounded-md">
                            <GradientText
                              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                              animationSpeed={8}
                              showBorder={false}
                            >
                              {tag}
                            </GradientText>
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:gradient-icon transition-all">{project.title}</h3>
                      <p className="text-text-muted text-lg mb-10 leading-relaxed">{project.description}</p>
                      <div className="flex items-center gap-4">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold group"
                        >
                          <GradientText
                            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                            animationSpeed={8}
                            showBorder={false}
                          >
                            {project.isPdf ? "View PDF" : "View Project"} 
                            <ArrowRight size={18} className="inline ml-2 transition-transform group-hover:translate-x-1" />
                          </GradientText>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-95 disabled:opacity-30"
              disabled={!prevBtnEnabled}
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-white' : 'bg-border hover:bg-text-muted'}`}
                />
              ))}
            </div>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 active:scale-95 disabled:opacity-30"
              disabled={!nextBtnEnabled}
            >
              <ArrowRight size={24} />
            </button>
          </div>
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
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Get in Touch
            </GradientText>
            <p className="text-lg text-text-muted mb-10">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-bg-alt border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail size={20} className="group-hover:text-black" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Email Me</p>
                  <p className="font-semibold">ankushshetty0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-bg-alt border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Phone size={20} className="group-hover:text-black" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Call Me</p>
                  <p className="font-semibold">+91 9004950666</p>
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
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all transform active:scale-[0.98] shadow-lg shadow-white/10"
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
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="text-lg font-bold tracking-tighter mb-2"
        >
          Ankush Shetty
        </GradientText>
        <p className="text-sm text-text-muted">© 2026. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-bg-alt flex items-center justify-center text-text-muted hover:bg-white hover:text-black transition-all duration-300">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-bg-alt flex items-center justify-center text-text-muted hover:bg-white hover:text-black transition-all duration-300">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);


const Certificates = () => {
  const images = [
    "https://picsum.photos/300/300?grayscale&random=1",
    "https://picsum.photos/300/300?grayscale&random=2",
    "https://picsum.photos/300/300?grayscale&random=3",
    "https://picsum.photos/300/300?grayscale&random=4",
    "https://picsum.photos/300/300?grayscale&random=5",
    "https://picsum.photos/300/300?grayscale&random=6",
  ];

  return (
    <section id="certificates" className="section-padding bg-bg overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-8">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={8}
            showBorder={false}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Certifications
          </GradientText>
          <p className="text-text-muted max-w-2xl mx-auto">Professional certifications and courses I have completed.</p>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <OrbitImages
            images={images}
            shape="ellipse"
            radiusX={window.innerWidth < 768 ? 160 : 340}
            radiusY={window.innerWidth < 768 ? 40 : 80}
            rotation={-8}
            duration={30}
            itemSize={window.innerWidth < 768 ? 60 : 100}
            responsive={true}
            radius={160}
            direction="normal"
            fill
            showPath
            paused={false}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export { Navbar, Hero, About, Projects, Certificates, Contact, Footer };
