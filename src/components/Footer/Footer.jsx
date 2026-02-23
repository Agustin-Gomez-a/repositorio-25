import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const menuItems = [
    { href: "#inicio", label: "inicio" },
    { href: "#about", label: "sobre_mi" },
    { href: "#servicios", label: "servicios" },
    { href: "#habilidades", label: "habilidades" },
    { href: "#portfolio", label: "portfolio" },
    { href: "#contacto", label: "contacto" },
  ];

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: "https://github.com/Agustin-Gomez-a", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/agustin-gomez-aranda", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, href: "mailto:marceloagustingomezaranda@gmail.com", label: "Email" },
    { icon: <FaWhatsapp className="h-4 w-4" />, href: "https://wa.me/543816236718", label: "WhatsApp" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 dark:to-muted/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-purple-500/[0.02]" />

      <div className="container relative">
        {/* Main footer content */}
        <div className="py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">

            {/* Brand + Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5 space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <span className="text-white font-mono font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Agustin
                  <span className="ml-1.5 font-mono font-black bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Dev</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                {t('hero_subtitle')}
              </p>

              {/* Social links */}
              <div className="flex gap-2 pt-1">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-secondary/60 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3"
            >
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {t('enlaces_rapidos')}
              </h3>
              <ul className="space-y-2.5">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-200" />
                      {t(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-4"
            >
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {t('contacto')}
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:marceloagustingomezaranda@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="truncate">marceloagustingomezaranda@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/543816236718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 text-primary/60 group-hover:text-primary transition-colors" />
                  <span>+54 381 623 6718</span>
                </a>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary/60" />
                  <span>Tucumán, Argentina</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
              © {new Date().getFullYear()} Agustín Gómez Aranda. {t('derechos_reservados')}
            </p>

            <div className="flex items-center gap-3">
              <p className="text-xs text-muted-foreground/70 flex items-center gap-1">
                Hecho con <Heart className="h-3 w-3 text-red-500 fill-red-500 inline-block" /> y React
              </p>
              <motion.button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-secondary/60 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Volver arriba"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
