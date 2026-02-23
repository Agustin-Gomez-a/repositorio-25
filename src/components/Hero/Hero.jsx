import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Code, Palette, Terminal, ChartBar, ChevronDown } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

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
      icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "diseno_creativo",
      description: "diseno_creativo_desc"
    },
    {
      icon: <Terminal className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "desarrollo_web",
      description: "desarrollo_web_desc"
    },
    {
      icon: <ChartBar className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "resultados",
      description: "resultados_desc"
    }
  ];

  // Typewriter sequences per language
  const getTypeSequence = () => {
    if (i18n.language === 'en') {
      return [
        'Modern interfaces', 2000,
        'Web applications', 2000,
        'Digital experiences', 2000,
        'Responsive designs', 2000,
      ];
    }
    return [
      'Interfaces modernas', 2000,
      'Aplicaciones web', 2000,
      'Experiencias digitales', 2000,
      'Diseños responsivos', 2000,
    ];
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden -mt-16">
      {/* Fondo con gradiente y efecto de blur */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-500/20 dark:from-primary/10 dark:via-background dark:to-purple-500/10" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob dark:mix-blend-screen" />
        <div className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 dark:mix-blend-screen" />
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 dark:mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 pt-6 sm:pt-8 pb-8 sm:pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language + "-hero"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-3 sm:space-y-4"
            >
              {/* Greeting */}
              <p className="text-base sm:text-lg text-muted-foreground tracking-wide">
                {t('hero_greeting')}
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
                <span className="text-foreground">Agustín</span>{' '}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Gómez
                </span>
              </h1>

              {/* Typewriter role */}
              <div className="h-10 sm:h-12 flex items-center justify-center">
                <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                  {t('hero_role_prefix')}&nbsp;
                </span>
                <TypeAnimation
                  key={i18n.language}
                  sequence={getTypeSequence()}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={65}
                  className="text-lg sm:text-xl md:text-2xl font-mono font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language + "-hero-buttons"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <motion.button
                onClick={() => scrollToSection('contacto')}
                className="group px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow relative overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('contactame')}</span>
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('portfolio')}
                className="group px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-secondary border border-border text-foreground text-sm sm:text-base font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('ver_portfolio')}</span>
                <Code className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20"
          >
            <AnimatePresence mode="wait">
              {services.map((service, index) => (
                <motion.div
                  key={i18n.language + service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary inline-block mb-3 sm:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                    {t(service.title)}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 p-1.5 sm:p-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border text-foreground hover:bg-secondary transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ y: 5 }}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
