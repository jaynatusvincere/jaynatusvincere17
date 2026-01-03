'use client';

import React, { useState, useRef } from 'react';
import { Github, Mail, Send, Heart, ExternalLink, Code2, Terminal, Globe, Smartphone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionSection = ({ children, className = '', delay = 0 }: MotionSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

interface MotionItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionItem = ({ children, className = '', delay = 0 }: MotionItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const projects = [
    {
      name: 'Web Dashboard',
      description: 'Modern dashboard with real-time analytics',
      tech: ['React', 'Tailwind', 'Node.js'],
      year: '2024'
    },
    {
      name: 'Mobile App',
      description: 'Cross-platform mobile application',
      tech: ['React Native', 'Firebase'],
      year: '2024'
    },
    {
      name: 'API Service',
      description: 'RESTful API with authentication',
      tech: ['Python', 'FastAPI', 'PostgreSQL'],
      year: '2023'
    },
    {
      name: 'E-Commerce',
      description: 'Full-stack shopping platform',
      tech: ['Next.js', 'Prisma', 'Stripe'],
      year: '2023'
    },
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio with modern design',
      tech: ['HTML', 'CSS', 'JavaScript'],
      year: '2022'
    },
    {
      name: 'CLI Tool',
      description: 'Command line utility for developers',
      tech: ['Python', 'Click'],
      year: '2022'
    }
  ];

  const skills = [
    {
      year: '2025',
      title: 'Full Stack Developer',
      skills: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      year: '2024',
      title: 'Advanced Frontend',
      skills: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'REST APIs']
    },
    {
      year: '2023',
      title: 'Python & JavaScript',
      skills: ['Python', 'JavaScript', 'Django', 'Express.js', 'MySQL']
    },
    {
      year: '2022',
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'Basic JavaScript', 'Git']
    }
  ];

  const contacts = [
    { name: 'WhatsApp', link: 'https://wa.me/6282197350500', icon: Send, color: 'text-green-400' },
    { name: 'TikTok', link: 'https://tiktok.com/@jayellstr', icon: Smartphone, color: 'text-pink-400' },
    { name: 'Instagram', link: 'https://instagram.com/senazqt', icon: Heart, color: 'text-purple-400' },
    { name: 'GitHub', link: 'https://github.com/jaynatusvincere', icon: Github, color: 'text-gray-300' },
    { name: 'Telegram', link: 'https://t.me/holaajay', icon: Send, color: 'text-blue-400' },
    { name: 'WhatsApp Channel', link: 'https://whatsapp.com/channel/0029Vb6s2vYDeON4gU4i4N2J', icon: Send, color: 'text-green-400' },
    { name: 'Discord', link: 'https://discord.gg/W2XGp9Bt', icon: Terminal, color: 'text-indigo-400' },
    { name: 'Email', link: 'mailto:jayforcooding@gmail.com', icon: Mail, color: 'text-red-400' }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('jayforcooding@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black"></div>
      </div>

      <main className="relative z-10 flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
          <motion.div
            className="flex gap-3 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }}
              transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 0.9, 1] }}
              transition={{ duration: 2, delay: 0.4, repeat: Infinity, repeatType: "reverse" }}
            ></motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Jay Natus Vincere
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-200 mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-16 text-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Code2 className="w-16 h-16" />
          </motion.div>
        </section>

        <MotionSection id="skills" className="py-16">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              <span className="text-blue-500">&lt;</span> Skills Journey
              <span className="text-blue-500"> /&gt;</span>
            </h2>
            <p className="text-blue-200/60">My learning path and expertise</p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <MotionItem
                key={index}
                delay={index * 0.1}
                className="group relative border border-blue-500/30 bg-blue-950/20 rounded-lg p-6 hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-3xl font-bold text-blue-400 font-mono">
                      {skill.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((s, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        <MotionSection id="projects" className="py-16" delay={0.2}>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              <span className="text-blue-500">#</span> Projects
            </h2>
            <p className="text-blue-200/60">Featured projects and work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <MotionItem
                key={index}
                delay={index * 0.1}
                className="group border border-blue-500/30 bg-black/50 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  <span className="text-xs text-blue-400/60 font-mono">{project.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-blue-200/70 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                  <Globe className="w-4 h-4" />
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </MotionItem>
            ))}
          </div>
        </MotionSection>

        <MotionSection id="contact" className="py-16" delay={0.3}>
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              <span className="text-blue-500">@</span> Contact Me
            </h2>
            <p className="text-blue-200/60">Let's connect and collaborate</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((contact, index) => (
              <MotionItem key={index} delay={index * 0.05}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 border border-blue-500/30 bg-blue-950/20 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                >
                  <contact.icon className={`w-6 h-6 ${contact.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <div className="text-sm text-blue-200/60">{contact.name}</div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors text-sm">
                      {contact.name === 'Email' ? 'jayforcooding@gmail.com' : contact.name}
                    </div>
                  </div>
                </a>
              </MotionItem>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              <Mail className="w-5 h-5" />
              {copied ? 'Email Copied! ✓' : 'Copy Email Address'}
            </button>
          </motion.div>
        </MotionSection>
      </main>

      <footer className="relative z-10 border-t border-blue-500/30 bg-black/80 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-blue-400 font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © Jay Portfolio - 2025
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
