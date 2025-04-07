import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Agustin-Gomez-a",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/agustin-gomez-aranda",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:agustingomez1986@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Agustin
              <span className="ml-2 font-black">Dev</span>
            </span>
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t('hero_subtitle')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {t('Enlaces rapidos')}
            </h3>
            <ul className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors relative group"
                  >
                    {t(item.label)}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {t('redes_sociales')}
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Agustin Dev. {t('derechos_reservados')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
