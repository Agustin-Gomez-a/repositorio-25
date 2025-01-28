import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const menuItems = [
    { href: "#hero", label: "inicio" },
    { href: "#about", label: "sobre_mi" },
    { href: "#servicios", label: "servicios" },
    { href: "#habilidades", label: "habilidades" },
    { href: "#portfolio", label: "portfolio" },
    { href: "#contacto", label: "contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 bg-background/95 backdrop-blur-lg ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo/Brand */}
          <motion.a
            href="#"
            className="relative text-xl font-bold hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Agustin
              <span className="ml-2 font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dev
              </span>
            </span>
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <AnimatePresence mode="wait">
                    <motion.a
                      key={i18n.language + item.label}
                      href={item.href}
                      className="text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors inline-block py-2"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t(item.label)}
                    </motion.a>
                  </AnimatePresence>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle, Language Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-foreground dark:text-white flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle language"
            >
              <img 
                src={i18n.language === 'es' 
                  ? "https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/es.svg"
                  : "https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg"
                } 
                alt={i18n.language === 'es' ? "Español" : "English"}
                className="w-5 h-4 object-cover rounded"
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={i18n.language}
                  className="text-sm font-medium"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {i18n.language === 'es' ? 'ESP' : 'ENG'}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-foreground dark:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary/80 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.a
                        key={i18n.language + item.label}
                        href={item.href}
                        className="block text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t(item.label)}
                      </motion.a>
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
