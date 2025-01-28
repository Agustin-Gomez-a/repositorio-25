import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const menuItems = [
    { href: "#hero", label: "inicio" },
    { href: "#about", label: "sobre_mi" },
    { href: "#servicios", label: "servicios" },
    { href: "#habilidades", label: "habilidades" },
    { href: "#portfolio", label: "portfolio" },
    { href: "#contacto", label: "contacto" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/agustingomez1986",
      icon: <Github className="h-5 w-5" />,
      label: "ver_github",
    },
    {
      href: "https://www.linkedin.com/in/agustin-gomez-aranda",
      icon: <Linkedin className="h-5 w-5" />,
      label: "ver_linkedin",
    },
    {
      href: "mailto:agustingomez1986@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "enviar_email",
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Agustin Dev
            </h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={i18n.language + "footer-description"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground"
              >
                {t('hero_subtitle')}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.h4
                key={i18n.language + "footer-nav"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-semibold mb-4 text-foreground"
              >
                {t('navegacion')}
              </motion.h4>
            </AnimatePresence>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={i18n.language + item.label}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t(item.label)}
                    </motion.a>
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.h4
                key={i18n.language + "footer-social"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="font-semibold mb-4 text-foreground"
              >
                {t('redes_sociales')}
              </motion.h4>
            </AnimatePresence>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  aria-label={t(link.label)}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={i18n.language + "footer-copyright"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              &copy; {new Date().getFullYear()} Agustin Dev. {t('derechos')}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
