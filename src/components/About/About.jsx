import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LazyImage from '../LazyImage/LazyImage';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about" className="py-12 sm:py-20 bg-background relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr,auto] gap-8 sm:gap-12 items-center">
            {/* Contenido */}
            <div className="space-y-5 sm:space-y-8 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                  {t('sobre_mi')}
                </h2>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={i18n.language + "desc1"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed"
                >
                  {t('sobre_mi_descripcion')}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4 sm:gap-6"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.a
                    href="/cv/cv-español.pdf"
                    download="cv-español.pdf"
                    onClick={(e) => {
                      if (!e.currentTarget.href.endsWith('.pdf')) {
                        e.preventDefault();
                        alert('CV en español estará disponible próximamente');
                      }
                    }}
                    className="group px-5 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t('descargar_cv_espanol')}</span>
                    <svg
                      className="inline-block ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="/cv/cv-ingles.pdf"
                    download="cv-ingles.pdf"
                    onClick={(e) => {
                      if (!e.currentTarget.href.endsWith('.pdf')) {
                        e.preventDefault();
                        alert('CV in English will be available soon');
                      }
                    }}
                    className="group px-5 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-primary/30 text-foreground text-sm sm:text-base font-medium hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t('descargar_cv_ingles')}</span>
                    <svg
                      className="inline-block ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.a>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={i18n.language + "desc2"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                  >
                    {t('sobre_mi_descripcion2')}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3 sm:gap-4"
              >
                <a
                  href="https://github.com/Agustin-Gomez-a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground hover:text-primary transition-all duration-300 hover:shadow-md"
                  aria-label={t('ver_github')}
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/agustin-gomez-aranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground hover:text-primary transition-all duration-300 hover:shadow-md"
                  aria-label={t('ver_linkedin')}
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="mailto:marceloagustingomezaranda@gmail.com"
                  className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground hover:text-primary transition-all duration-300 hover:shadow-md"
                  aria-label={t('enviar_email')}
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.button
                  key={i18n.language + "contact"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 py-2 sm:px-6 sm:py-2 text-sm sm:text-base rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                  onClick={() => {
                    document.getElementById("contacto").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest"
                    });
                  }}
                >
                  {t('contactame')}
                </motion.button>
              </AnimatePresence>
            </div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <LazyImage
                  src="/img/yo.png"
                  alt="Agustín Gómez Aranda"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
