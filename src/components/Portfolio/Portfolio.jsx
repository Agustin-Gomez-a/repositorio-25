import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: "App LABA",
    description: "proyecto_laba_desc",
    image: "/src/assets/img/apple-app.laba.png",
    category: "web",
    link: "https://app-laba.vercel.app/",
    github: "#",
    tags: ["React", "Node.js", "MySQL", "Tailwind", "Vite"]
  },
  {
    title: "LABA Admin",
    description: "proyecto_laba_admin_desc",
    image: "/src/assets/img/apple-laba-admin.png",
    category: "web",
    link: "https://laba-web.vercel.app/",
    github: "#",
    tags: ["React", "Node.js", "MySQL", "Tailwind", "Vite"]
  },
  {
    title: "RenovAr",
    description: "proyecto_renovar_desc",
    image: "/src/assets/img/apple-renovarg.png",
    category: "web",
    link: "https://renovar-web.vercel.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "VacunAr",
    description: "proyecto_vacunar_desc",
    image: "/src/assets/img/apple-vacunarg.png",
    category: "web",
    link: "https://vacunar-web.vercel.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Viazzo",
    description: "proyecto_viazzo_desc",
    image: "/src/assets/img/apple-viazzo.png",
    category: "web",
    link: "#",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "BDER App",
    description: "proyecto_bder_desc",
    image: "/src/assets/img/iphone-bder.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "UX Research"]
  },
  {
    title: "Check App",
    description: "proyecto_check_desc",
    image: "/src/assets/img/iphone-check.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "Prototyping"]
  },
  {
    title: "Digital Mirage",
    description: "proyecto_mirage_desc",
    image: "/src/assets/img/iphone-digital mirage.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "User Testing"]
  },
  {
    title: "ReciclAr",
    description: "proyecto_reciclar_desc",
    image: "/src/assets/img/iphone-reciclarg.png",
    category: "ux/ui",
    link: "#",
    github: "#",
    tags: ["Figma", "UI Design", "User Flow"]
  },
  {
    title: "RenovAr App",
    description: "proyecto_renovar_app_desc",
    image: "/src/assets/img/iphone-renovarg.png",
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
    { id: "web", label: "desarrollo_web" },
    { id: "ux/ui", label: "diseno_uxui" },
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`overflow-hidden ${
                project.image.includes('apple-') 
                  ? 'aspect-[16/10] max-h-[240px]' // Para mockups de PC
                  : 'aspect-[9/19.5] max-h-[360px]' // Para mockups de iPhone
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.image.includes('apple-')
                      ? 'object-cover' // Para mockups de PC
                      : 'object-contain' // Para mockups de iPhone
                  } transform group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3 mb-3">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/90 text-white hover:bg-primary transition-colors"
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
                        className="p-2 rounded-full bg-secondary/90 text-foreground dark:text-white hover:bg-secondary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={t('ver_codigo')}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={i18n.language + project.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-white/80 text-sm mb-3">{t(project.description)}</p>
                      </motion.div>
                    </AnimatePresence>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={i18n.language + project.title + "-info"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t(project.description)}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Portfolio;
