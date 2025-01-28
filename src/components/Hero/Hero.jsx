import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Code, Palette, Terminal, ChartBar, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "diseno_creativo",
      description: "diseno_creativo_desc"
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "desarrollo_web",
      description: "desarrollo_web_desc"
    },
    {
      icon: <ChartBar className="h-6 w-6" />,
      title: "resultados",
      description: "resultados_desc"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Fondo con gradiente y efecto de blur */}
      <div className="absolute inset-0">
        {/* Blur superior */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
        {/* Blur inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        {/* Gradiente de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-500/20 dark:from-primary/10 dark:via-background dark:to-purple-500/10" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 pt-8 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language + "-hero"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h1 className="text-4xl py-2 sm:py-10 md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                Agustin Dev
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-4">
                {t('hero_subtitle')}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language + "-hero-buttons"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow relative overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('contactame')}</span>
                <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto group px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-border text-black dark:text-white font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('ver_portfolio')}</span>
                <Code className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <AnimatePresence mode="wait">
              {services.map((service, index) => (
                <motion.div
                  key={i18n.language + service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2">
                    {t(service.title)}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-300">
                    {t(service.description)}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Botón de scroll */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ y: 5 }}
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
