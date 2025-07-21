import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LazyImage from '../LazyImage/LazyImage';

const projects = [
  {
    title: "App LABA",
    description: "Proyecto App LABA",
    image: "/img/apple-app.laba.png",
    category: "web",
    link: "#",
    github: "#",
    tags: ["React", "Node.js", "MySQL", "Tailwind", "Vite"]
  },
  {
    title: "LABA Admin",
    description: "Proyecto LABA Admin",
    image: "/img/apple-laba-admin.png",
    category: "web",
    link: "https://laba-taxi.netlify.app/",
    github: "#",
    tags: ["React", "Node.js", "MySQL", "Tailwind", "Vite"]
  },
  {
    title: "Claudio Portfolio",
    description: "Proyecto Portfolio Claudio",
    image: "/img/claudio-portfolio.png",
    category: "web",
    link: "https://portfolio-claudio.pages.dev/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },  {
    title: "MFGA",
    description: "Proyecto MFGA",
    image: "/img/Mfga1.png",
    category: "web",
    link: "https://mfga.netlify.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "PowerFit",
    description: "Proyecto PowerFit",
    image: "/img/powerfit.png",
    category: "web",
    link: "https://gym-powerfit.netlify.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Humito Artesanal",
    description: "Proyecto Humito Artesanal",
    image: "/img/humito-artesanal.png",
    category: "web",
    link: "https://humitoartesanal.netlify.app/",
    github: "#",
    tags: ["Astro", "Tailwind", "JavaScript"]
  },
  {
    title: "RenovArg",
    description: "Proyecto RenovARG",
    image: "/img/apple-renovarg.png",
    category: "web",
    link: "https://renovarg.netlify.app/",
    github: "https://github.com/Agustin-Gomez-a/reciclarg2025",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "VacunARG",
    description: "Proyecto VacunARG",
    image: "/img/apple-vacunarg.png",
    category: "web",
    link: "https://vacunarg.netlify.app/",
    github: "https://github.com/Agustin-Gomez-a/sitevacunarg",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Viazzo",
    description: "Proyecto Viazzo",
    image: "/img/apple-viazzo.png",
    category: "web",
    link: "https://viazzo.netlify.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "BDER App",
    description: "proyect Bder app",
    image: "/img/iphone-bder.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "UX Research"]
  },
  {
    title: "Check App",
    description: "Proyecto Check App",
    image: "/img/iphone-check.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "Prototyping"]
  },
  {
    title: "Digital Mirage",
    description: "Proyecto Digital Mirage",
    image: "/img/iphone-digital mirage.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "User Testing"]
  },
  {
    title: "ReciclARG",
    description: "Proyecto ReciclARG",
    image: "/img/iphone-reciclarg.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "User Flow"]
  },
  {
    title: "RenovARG App",
    description: "Proyecto RenovARG App",
    image: "/img/iphone-renovarg.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "User Flow"]
  }
];

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("web");

  const categories = [
    { id: "web", label: "desarrollo_web_label" },
    { id: "ux/ui", label: "diseno_ux_ui_label" },
  ];

  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="portfolio" className="container py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language + "portfolio-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground dark:text-white">
            {t('portfolio_titulo')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('portfolio_subtitulo')}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Filtros */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-primary text-white scale-105"
                : "bg-secondary/50 hover:bg-secondary text-foreground dark:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t(category.label)}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid de proyectos */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-[#1e2533] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {project.category === "web" ? (
                // Monitor frame para proyectos web
                <div className="relative p-4 overflow-hidden">
                  <div className="relative bg-[#0f141e] rounded-md overflow-hidden">
                    {/* Screen */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <LazyImage 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center mix-blend-normal"
                      />
                    </div>
                    {/* Monitor stand */}
                    <div className="h-4 bg-gray-200 flex items-center justify-center">
                      <div className="w-6 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <div className="h-10 w-16 bg-gray-300 mx-auto rounded-b-md"></div>
                  </div>
                </div>
              ) : (
                // Phone frame para proyectos UX/UI
                <div className="relative p-4 flex justify-center">
                  <div className="relative bg-[#0f141e] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-lg">
                    {/* Notch del teléfono */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
                    
                    {/* Phone screen */}
                    <div className="aspect-[9/19.5] w-48 relative overflow-hidden bg-white">
                      <LazyImage 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top mix-blend-normal"
                      />
                    </div>
                    
                    {/* Home button */}
                    <div className="h-4 flex items-center justify-center bg-gray-800">
                      <div className="w-10 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {t(project.description)}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={t('ver_proyecto')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={t('ver_codigo')}
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map((tag, index) => index < 3 && (
                      <span
                        key={tag}
                        className={`
                          px-2 py-1 rounded text-xs font-medium
                          ${tag === 'React' ? 'bg-blue-900 text-blue-200' : ''}
                          ${tag === 'Tailwind' ? 'bg-teal-900 text-teal-200' : ''}
                          ${tag === 'Vite' ? 'bg-purple-900 text-purple-200' : ''}
                          ${tag === 'Astro' ? 'bg-orange-900 text-orange-200' : ''}
                          ${tag === 'JavaScript' ? 'bg-yellow-900 text-yellow-200' : ''}
                          ${tag === 'Node.js' ? 'bg-green-900 text-green-200' : ''}
                          ${tag === 'MySQL' ? 'bg-orange-900 text-orange-200' : ''}
                          ${tag === 'Figma' ? 'bg-pink-900 text-pink-200' : ''}
                          ${tag.includes('UI') ? 'bg-red-900 text-red-200' : ''}
                          ${tag.includes('UX') ? 'bg-yellow-900 text-yellow-200' : ''}
                          ${tag.includes('User') ? 'bg-indigo-900 text-indigo-200' : ''}
                          ${!tag.match(/(React|Tailwind|Vite|Astro|JavaScript|Node.js|MySQL|Figma|UI|UX|User)/) ? 'bg-gray-700 text-gray-200' : ''}
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
