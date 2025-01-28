import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Code, Smartphone, Search, Paintbrush, Code2, BarChart3, Terminal } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();

  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: t('diseno_web'),
      description: t('diseno_web_desc'),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: t('desarrollo_frontend'),
      description: t('desarrollo_frontend_desc'),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Paintbrush className="h-6 w-6" />,
      title: t('diseno_creativo'),
      description: t('diseno_creativo_desc'),
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: t('optimizacion'),
      description: t('optimizacion_desc'),
      gradient: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div id="servicios" className="container py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language + "services-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground dark:text-white">
            {t('servicios_titulo')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('servicios_subtitulo')}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="absolute -top-4 -left-4"
            >
              <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white`}>
                {service.icon}
              </div>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language + service.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2 mt-2">
                  {t(service.title)}
                </h3>
                <p className="text-muted-foreground">
                  {t(service.description)}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
