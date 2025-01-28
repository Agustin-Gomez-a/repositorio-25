import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Code, Smartphone, Search } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t, i18n } = useTranslation();

  const services = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "diseno_web",
      description: "diseno_web_desc",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "desarrollo_frontend",
      description: "desarrollo_frontend_desc",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "diseno_creativo",
      description: "diseno_creativo_desc",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "optimizacion",
      description: "optimizacion_desc",
      gradient: "from-red-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
        </motion.div>
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background to-secondary/20 p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.gradient}`} />
            
            <div className="relative z-10 space-y-4">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex rounded-xl bg-gradient-to-r p-3 text-white shadow-lg ${service.gradient}`}
              >
                {service.icon}
              </motion.div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language + service.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-foreground dark:text-white">
                    {t(service.title)}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {t(service.description)}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              <motion.div
                className="mt-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-1 w-12 rounded-full bg-gradient-to-r shadow-lg transition-all duration-300 group-hover:w-16 group-hover:shadow-xl" style={{
                  backgroundImage: `linear-gradient(to right, var(--${service.gradient.split('-')[2]}-500), var(--${service.gradient.split('-')[4]}-500))`
                }} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
