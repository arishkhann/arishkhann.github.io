import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Student",
      "Problem Solver",
      "UI Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          const height = ref.current.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = sectionRefs[section as keyof typeof sectionRefs].current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full stack e-commerce solution with payment integration and user authentication",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      image: "/placeholder.svg",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with interactive charts",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      image: "/placeholder.svg",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates",
      stack: ["React", "Firebase", "Material UI", "Redux"],
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen text-gray-100 bg-gradient-to-b from-black to-gray-900">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500"
          >
            AK
          </motion.div>
          <div className="hidden md:flex items-center space-x-10">
            {Object.keys(sectionRefs).map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm hover:text-teal-400 transition-colors ${
                  activeSection === section ? "text-teal-400 font-medium" : ""
                }`}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={sectionRefs.home}
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ParticleBackground />

        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                Arish Khan
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl mb-6 text-gray-300">
              <span>{text}</span>
              <Cursor cursorColor="#14b8a6" />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            I create responsive web applications with focus on both performance
            and design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#0f766e" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-teal-600 rounded-full text-white font-medium"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-white/20 rounded-full text-white font-medium"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center mt-14 space-x-6"
          >
            {[
              { Icon: FaGithub, url: "https://github.com/arishkhann" },
              //   { Icon: FaLinkedin, url: "#" },
              { Icon: FaTwitter, url: "https://x.com/arish_khann" },
              { Icon: FaEnvelope, url: "mailto:mohdarish9448@gmail.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                whileHover={{ scale: 1.2, color: "#14b8a6" }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <item.Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={sectionRefs.about}
        className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="About Me" />

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-purple-500 rounded-lg transform rotate-3"></div>
                <img
                  src="/arish.jpg"
                  alt="Arish Khan"
                  className="w-full h-auto aspect-square object-cover rounded-lg relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate full stack developer currently pursuing my
                  degree in Computer Science. With a strong foundation in both
                  frontend and backend technologies, I enjoy building web
                  applications that are not only functional but also provide
                  exceptional user experiences.
                </p>
                <p>
                  My journey in tech started when I built my first HTML website
                  in school. Since then, I've expanded my skills to include
                  modern frameworks and technologies. I'm particularly
                  interested in creating seamless, responsive interfaces and
                  optimizing backend performance.
                </p>
                <p>
                  Currently, I'm focused on deepening my knowledge in
                  distributed systems and cloud architecture while working on
                  side projects that challenge my abilities and help me grow as
                  a developer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section
        ref={sectionRefs.skills}
        className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
      >
        <div className="max-w-5xl mx-auto w-full">
          <SectionTitle title="Skills" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: SiHtml5, name: "HTML", color: "#E34F26" },
              { icon: SiCss3, name: "CSS", color: "#1572B6" },
              { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
              { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
              { icon: SiReact, name: "React", color: "#61DAFB" },
              { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
              { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
              { icon: SiExpress, name: "Express", color: "#ffffff" },
              { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
              { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
            ].map((skill, index) => (
              <SkillCard key={index} {...skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={sectionRefs.projects}
        className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
      >
        <div className="max-w-5xl mx-auto w-full">
          <SectionTitle title="Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
      >
        <div className="max-w-5xl mx-auto w-full">
          <SectionTitle title="Contact Me" />

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-2/5"
            >
              <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind or just want to say hello,
                I'd love to hear from you!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:mohdarish9448@gmail.com"
                  target="_blank"
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">Email</h4>
                    <p className="text-white">mohdarish9448@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://x.com/arish_khann"
                  target="_blank"
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <FaTwitter className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400">LinkedIn</h4>
                    <p className="text-white">twitter.com/arish_khann</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-3/5"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-medium mb-4">Send me a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-400 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-400 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-gray-400 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-400 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-purple-600 rounded-lg text-white font-medium"
                    type="button"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 text-center text-gray-400">
        <div className="max-w-5xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Arish Khan. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            {[
              { Icon: FaGithub, url: "https://github.com/arishkhann" },
              //   { Icon: FaLinkedin, url: "#" },
              { Icon: FaTwitter, url: "https://x.com/arish_khann" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                whileHover={{ scale: 1.2, color: "#14b8a6" }}
                className="text-xl text-gray-500 hover:text-white transition-colors"
              >
                <item.Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

// Component for section titles with animation
const SectionTitle = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
        {title}
      </span>
    </h2>
    <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
  </motion.div>
);

// Component for skill cards with animation
const SkillCard = ({
  icon: Icon,
  name,
  color,
  index,
}: {
  icon: React.ElementType;
  name: string;
  color: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
  >
    <Icon className="text-4xl mb-3" style={{ color }} />
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </motion.div>
);

// Component for project cards with animation
const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h3 className="text-xl font-bold px-6 py-4">{project.title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-teal-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Background particle effect component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: i % 5 === 0 ? "#14b8a6" : "#a855f7",
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.fillStyle = p.color + "40";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle =
              p.color + Math.floor(20 - distance / 5).toString(16);
            ctx.lineWidth = 0.3;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    };

    createParticles();
    animateParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default Index;
