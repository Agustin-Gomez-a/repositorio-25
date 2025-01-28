import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Palette, Rocket } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        duration: 1000
      });
    }
  };

  return (
    <div id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente y efecto de blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-500/20 dark:from-primary/10 dark:via-background dark:to-purple-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 pb-4">
              Agustin Dev
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4">
              {t('hero_subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("contacto")}
              className="group px-8 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contactame')}
              <Rocket className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              className="group px-8 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground dark:text-white font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('ver_portfolio')}
              <Code className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: <Palette className="h-8 w-8 text-foreground dark:text-white" />,
                title: 'diseno_creativo',
                description: 'diseno_creativo_desc',
              },
              {
                icon: <Code className="h-8 w-8 text-foreground dark:text-white" />,
                title: 'desarrollo_web',
                description: 'desarrollo_web_desc',
              },
              {
                icon: <Rocket className="h-8 w-8 text-foreground dark:text-white" />,
                title: 'resultados',
                description: 'resultados_desc',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col items-center space-y-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">
                    {t(feature.title)}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {t(feature.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollToSection("about")}
          className="fixed bottom-8 right-8 z-50 p-5 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:bg-gradient-to-r hover:from-primary/90 hover:to-purple-600/90 transition-all duration-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, 8, 0]
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.5
            },
            scale: {
              duration: 0.5
            }
          }}
        >
          <ArrowDown className="h-7 w-7" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
