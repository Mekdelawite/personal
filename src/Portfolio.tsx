import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Globe, Terminal, User, Briefcase, Send, ChevronDown, Menu, X, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 glass" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter">
            NT<span className="text-brand-primary">.</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-brand-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:block px-5 py-2 rounded-full bg-brand-primary text-bg-dark font-bold text-sm hover:scale-105 transition-transform"
            >
              Hire Me
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-bg-dark flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white"
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-display font-bold text-white hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-brand-primary text-bg-dark font-bold text-lg"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          x: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full glass text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand-primary mb-6 inline-block"
          >
            Available for new opportunities
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-[1.1]">
            Building Digital <br />
            <span className="text-gradient">Experiences</span> that Matter
          </h1>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Nigusu Tigabu</span>. 
            A Software Engineer specializing in building exceptional digital products 
            that combine clean code with intuitive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-bg-dark font-bold hover:bg-brand-primary hover:text-bg-dark transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -5, color: "var(--color-brand-primary)" }}
                href="https://github.com/mekdelawite" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, color: "var(--color-brand-primary)" }}
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

const GitHubStats = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/mekdelawite")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Error fetching GitHub stats:", err));
  }, []);

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 p-6 glass rounded-2xl flex items-center gap-6"
    >
      <img 
        src={stats.avatar_url} 
        alt="GitHub Avatar" 
        className="w-16 h-16 rounded-full border-2 border-brand-primary"
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <h4 className="font-bold text-lg">GitHub Activity</h4>
        <p className="text-white/60 text-sm mb-2">{stats.bio || "Software Engineer & Open Source Contributor"}</p>
        <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-brand-primary">
          <span>{stats.public_repos} Repos</span>
          <span>{stats.followers} Followers</span>
          <span>{stats.following} Following</span>
        </div>
      </div>
      <a 
        href={stats.html_url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 rounded-xl bg-white/5 hover:bg-brand-primary hover:text-bg-dark transition-all"
      >
        <Github className="w-5 h-5" />
      </a>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img
                src="https://picsum.photos/seed/nigusu/800/800"
                alt="Nigusu Tigabu"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 glass rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <span className="text-4xl font-bold text-brand-primary">5+</span>
              <span className="text-xs text-white/60 uppercase tracking-widest font-bold">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              I am a passionate Software Engineer with a strong foundation in computer science and a keen eye for detail. 
              My journey in tech began with a curiosity about how things work, which evolved into a career building 
              scalable web applications and robust backend systems.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              I thrive in collaborative environments and enjoy solving complex problems through elegant code. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source, 
              or mentoring aspiring developers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Global Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Performance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Scalability</span>
              </div>
            </div>

            <GitHubStats />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
      icon: <Globe className="w-6 h-6" />,
      color: "text-brand-primary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"],
      icon: <Terminal className="w-6 h-6" />,
      color: "text-brand-secondary"
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
      icon: <Cpu className="w-6 h-6" />,
      color: "text-emerald-400"
    },
    {
      title: "Tools",
      skills: ["Git", "Figma", "Jest", "Postman", "Linux"],
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Technical Arsenal</h2>
          <p className="text-white/60">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass hover:border-brand-primary/50 transition-colors group"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-white/5 inline-block ${cat.color} group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-white/70">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-white/60">A selection of my recent work and experiments.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="text-brand-primary font-bold flex items-center gap-2 hover:underline"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-[400px] rounded-3xl glass animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden glass flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.link} className="p-3 rounded-full bg-brand-primary text-bg-dark hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white text-bg-dark hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-bold hover:text-brand-primary transition-colors mt-auto"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "TechNova Solutions",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading the core platform team, architecting microservices, and improving system performance by 40%."
    },
    {
      company: "Global Systems Inc.",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications using React and Node.js."
    },
    {
      company: "StartUp Hub",
      role: "Junior Developer",
      period: "2018 - 2020",
      description: "Collaborated on rapid prototyping and MVP development for various early-stage startups."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bg-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Professional Journey</h2>
          <p className="text-white/60">My career path and the companies I've helped grow.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l border-white/10 last:pb-0"
            >
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-brand-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">{exp.period}</span>
              </div>
              <p className="text-white/80 font-medium mb-3">{exp.company}</p>
              <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(formRef.current!);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
              >
                Let's Build Something <br />
                <span className="text-gradient">Extraordinary</span>
              </motion.h2>
              <p className="text-white/60 mb-10 text-base md:text-lg">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-4 rounded-2xl bg-white/5 text-brand-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email Me</p>
                    <p className="text-lg font-medium break-all">nigusutigabu21016@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-4 rounded-2xl bg-white/5 text-brand-secondary">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">LinkedIn</p>
                    <p className="text-lg font-medium">linkedin.com/in/nigusutigabu</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors resize-none"
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                    status === 'success' ? 'bg-emerald-500 text-white' : 'bg-brand-primary text-bg-dark hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <>Sent Successfully <CheckCircle2 className="w-5 h-5" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
                {status === 'error' && <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-bold tracking-tighter">
          NT<span className="text-brand-primary">.</span>
        </div>
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Nigusu Tigabu. Built with passion and code.
        </p>
        <div className="flex gap-6">
          <motion.a whileHover={{ y: -3 }} href="https://github.com/mekdelawite" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Github className="w-5 h-5" /></motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></motion.a>
          <motion.a whileHover={{ y: -3 }} href="mailto:nigusutigabu21016@gmail.com" className="text-white/40 hover:text-white transition-colors"><Mail className="w-5 h-5" /></motion.a>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-bg-dark min-h-screen selection:bg-brand-primary selection:text-bg-dark">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
