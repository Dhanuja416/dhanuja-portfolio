import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("Programming Languages");

  const [portfolioData] = useState({
    name: "Dhanuja Surasingha",
    title: "Software Engineer Intern",
    about: "A passionate and motivated IT undergraduate and aspiring Software Engineer with a strong foundation in core programming and problem-solving. Possessing a keen interest in Cloud Computing and DevOps methodologies, I am eager to apply my foundational development skills and commitment to continuous learning in a challenging Software Engineering Internship. Seeking to contribute to innovative projects and gain hands-on experience in building efficient, scalable systems.",
    tagline: "A dynamic and modern personal portfolio website built to showcase my skills, projects, and professional experience.",
    contact: {
      email: "dhanuja.surasingha@gmail.com",
      linkedin: "https://linkedin.com/in/Dhanuja-Surasingha",
      github: "https://github.com/Dhanuja-Surasingha"
    },
    education: [
      {
        institution: "University of Moratuwa",
        degree: "B.Sc. (Hons) in Information Technology"
      },
      {
        institution: "Ananda National College, Chilaw",
        degree: "GCE Advanced Level - 2021, Biological Science Stream"
      }
    ],
    experience: [
      {
        role: "Company Coordinator",
        organization: "FIT Future Careers - 2024",
        description: "Took part in communication and logistics between assigned companies and student teams to ensure smooth participation during the event."
      },
      {
        role: "Floor Coordinator",
        organization: "FIT Future Careers 2025",
        description: "Managed coordination of one entire floor between companies and students assigned to companies for facilitating to their needs."
      }
    ],
    projects: [
      {
        title: "Personal Portfolio Website",
        description: "A dynamic and modern personal portfolio website showcasing my skills, projects, and professional experience. Designed with a focus on performance and a state-of-the-art technology stack.",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        liveUrl: "#",
        sourceUrl: "#"
      },
      {
        title: "Tea Factory Supply Chain Management System",
        description: "Developed a full-stack system to digitize and automate key processes, enhancing efficiency and data accuracy. My core responsibility was designing and implementing the Ledger Management and Reporting modules.",
        technologies: ["Angular", "ASP.NET", "Flutter", "MSSQL", "Azure"],
        liveUrl: "",
        sourceUrl: "#"
      },
      {
        title: "LinkedIn Job Application Tracker",
        description: "A Chrome extension to automate job application tracking and management for LinkedIn users. Implements intelligent data extraction and real-time status tracking with analytics capabilities.",
        technologies: ["JavaScript ES6+", "Chrome Extension APIs", "HTML5", "CSS3"],
        liveUrl: "",
        sourceUrl: "#"
      },
      {
        title: "Condition controlled plant maintaining system",
        description: "Developed an IoT-based automated plant care system for urban residents using an ESP32 microcontroller with integrated environmental monitoring and control capabilities.",
        technologies: ["Arduino", "ESP32", "DHT22/DS18B20", "C++", "Proteus", "EasyEDA"],
        liveUrl: "",
        sourceUrl: "#"
      }
    ],
    skills: {
      "Programming Languages": [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "C", icon: "⚙️" },
        { name: "C#", icon: "#️⃣" },
        { name: "JavaScript", icon: "📜" }
      ],
      "Frontend": [
        { name: "React.js", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "Next.js", icon: "✨" },
        { name: "HTML5", icon: "📄" },
        { name: "Tailwind CSS", icon: "🍃" }
      ],
      "Backend": [
        { name: "ASP.NET Core", icon: "🌐" },
        { name: "Firebase", icon: "🔥" }
      ],
      "Databases": [
        { name: "MSSQL", icon: "🗄️" },
        { name: "MySQL", icon: "🐘" },
        { name: "MongoDB", icon: "🌿" },
        { name: "PostgreSQL", icon: "🐬" }
      ],
      "Tools & Others": [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐱" },
        { name: "Figma", icon: "🎨" },
        { name: "Jira", icon: "🧩" },
        { name: "Postman", icon: "📬" },
        { name: "TestNG", icon: "✔️" },
        { name: "Vercel", icon: "▲" },
        { name: "Azure App Service", icon: "☁️" },
        { name: "Framer Motion", icon: "✨" }
      ]
    }
  });

  const { scrollYProgress } = useScroll();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We will get back to you shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const SkillCard = ({ skill }) => (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-md text-center border-2 border-transparent hover:border-orange-500 transition-colors duration-300 backdrop-filter backdrop-blur-lg bg-opacity-30"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <span className="text-5xl">{skill.icon}</span>
      <h3 className="mt-2 text-xl font-semibold">{skill.name}</h3>
    </motion.div>
  );

  const ProjectCard = ({ project }) => {
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    
    return (
      <motion.div
        className="rounded-xl p-8 shadow-md border-2 border-transparent transition-colors duration-300 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-800 border-gray-700 hover:border-orange-500"
        style={{ y: y }}
        whileHover={{
          y: -5,
          borderColor: '#f97316',
          boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.5), 0 4px 6px -2px rgba(249, 115, 22, 0.05)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-500 mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-orange-600 text-white text-sm font-medium px-2.5 py-0.5 rounded-full">{tech}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && <a href={project.liveUrl} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">Live Demo</a>}
          {project.sourceUrl && <a href={project.sourceUrl} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">Source Code</a>}
        </div>
      </motion.div>
    );
  };

  const Card = ({ title, content }) => (
    <motion.div
        className="rounded-xl p-8 shadow-md border-2 border-transparent transition-colors duration-300 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gray-800 border-gray-700"
        whileHover={{
            y: -5,
            borderColor: '#f97316',
            boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.5), 0 4px 6px -2px rgba(249, 115, 22, 0.05)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    >
        <h3 className="text-2xl font-bold text-orange-500 mb-4">{title}</h3>
        {content}
    </motion.div>
  );

  return (
    <div className={`dark bg-gray-950 text-white font-sans`}>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/framer-motion@6.5.1/dist/framer-motion.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <style>
        {`
        body { font-family: 'Inter', sans-serif; transition: background-color 0.3s, color 0.3s; }
        .dark body { @apply bg-gray-950 text-white; }
        .container { max-width: 1280px; margin-left: auto; margin-right: auto; padding: 2rem; }
        .section-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 2rem; text-align: center; }
        @media (min-width: 640px) { .section-title { text-align: left; } }
        .nav-link { transition: color 0.3s ease; }
        .nav-link:hover { color: #f97316; }
        .star {
          position: absolute;
          background: #fff;
          border-radius: 50%;
          animation: fall linear infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-10vh) scale(0.5); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(110vh) scale(1); opacity: 0; }
        }
      `}
      </style>

      {/* Falling stars animation */}
      <>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </>

      {/* Navigation bar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <nav className="container flex justify-between items-center py-4">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-orange-500"
            whileHover={{ scale: 1.1 }}
          >
            {portfolioData.name}
          </motion.a>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 nav-link">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 nav-link">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 nav-link">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 nav-link">Contact</button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center bg-gray-950">
        <div className="container">
          <motion.img
            src="/unnamed (1).png"
            alt="Dhanuja Surasingha"
            className="w-36 h-36 rounded-full border-4 border-orange-500 mb-6 object-cover mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-orange-500">{portfolioData.name}</span>.
          </motion.h1>
          <motion.h2
            className="text-2xl text-gray-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioData.title}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.tagline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href={`mailto:${portfolioData.contact.email}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">Email Me</a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">LinkedIn</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container">
          <motion.h2
            className="section-title text-center text-orange-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {portfolioData.about}
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-950">
        <div className="container">
          <motion.h2
            className="section-title text-center text-orange-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Education & Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container">
            <motion.h2
                className="section-title text-center text-orange-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Education & Experience
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card
                    title="Education"
                    content={
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            {portfolioData.education.map((edu, index) => (
                                <li key={index}>
                                    <strong>{edu.institution}</strong> - {edu.degree}
                                </li>
                            ))}
                        </ul>
                    }
                />
                <Card
                    title="Experience"
                    content={
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            {portfolioData.experience.map((exp, index) => (
                                <li key={index}>
                                    <strong>{exp.organization}</strong> - {exp.description}
                                </li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
      </section>

      {/* Skills Section with Tabs */}
      <section id="skills" className="py-20 bg-gray-950">
        <div className="container">
          <motion.h2
            className="section-title text-center text-orange-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(portfolioData.skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillTab(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${activeSkillTab === category ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {portfolioData.skills[activeSkillTab].map((skill, skillIndex) => (
              <SkillCard key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container text-center">
          <motion.h2
            className="section-title text-center text-orange-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm currently seeking a software engineering internship and would love to connect. Please feel free to reach out to me via email.
          </motion.p>
          
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto glass-panel p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-left">
              <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="subject" className="block text-gray-400 text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="mb-6 text-left">
              <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-gray-500 border-t border-gray-800">
        <div className="container">
            <p>&copy; 2025 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
