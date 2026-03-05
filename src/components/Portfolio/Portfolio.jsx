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
  },
  {
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
    title: "Consultoría",
    description: "Proyecto Consultoría",
    image: "/img/consultoria.png",
    category: "web",
    link: "https://consultoria5556999954hpllo.vercel.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Julieta CV",
    description: "Proyecto Julieta CV",
    image: "/img/julietacv.png",
    category: "web",
    link: "https://julietaporfolio.netlify.app/",
    github: "#",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "Amsterdam BarberShop",
    description: "Proyecto Amsterdam BarberShop",
    image: "/img/amsterdam.png",
    category: "web",
    link: "https://ambsterdambarbershop.netlify.app/",
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

const tagColors = {
  'React': 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Tailwind': 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/20',
  'Vite': 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Astro': 'bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'JavaScript': 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  'Node.js': 'bg-green-500/15 text-green-600 dark:text-green-400 border-green-500/20',
  'MySQL': 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/20',
  'Figma': 'bg-pink-500/15 text-pink-600 dark:text-pink-400 border-pink-500/20',
  'UI Design': 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/20',
  'UX Research': 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'Prototyping': 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  'User Testing': 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'User Flow': 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/20',
};

const getTagColor = (tag) => {
  return tagColors[tag] || 'bg-secondary text-muted-foreground border-border';
};

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("web");

  const categories = [
    { id: "web", label: "desarrollo_web_label" },
    { id: "ux/ui", label: "diseno_ux_ui_label" },
  ];

  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="portfolio" className="container py-12 sm:py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language + "portfolio-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
            {t('portfolio_titulo')}
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
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
            className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${selectedCategory === category.id
              ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 scale-105"
              : "bg-secondary hover:bg-secondary/80 text-foreground"
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto"
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
              className="group relative bg-card rounded-xl shadow-lg hover:shadow-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image container — rounded + dark bg to mask white edges */}
              <div className="relative overflow-hidden m-3 sm:m-4 rounded-lg bg-muted/50 dark:bg-muted/20">
                <div className="aspect-[4/3] flex items-center justify-center p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {t(project.description)}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${t('ver_proyecto')}: ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                    {project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${t('ver_codigo')}: ${project.title}`}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {project.tags.map((tag, index) => index < 3 && (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getTagColor(tag)}`}
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
