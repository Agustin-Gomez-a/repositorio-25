import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { ArgentinaFlag, USAFlag } from "../Icons/Flags";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { isDark, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const menuItems = [
    { href: "#inicio", label: "inicio" },
    { href: "#about", label: "sobre_mi" },
    { href: "#servicios", label: "servicios" },
    { href: "#habilidades", label: "habilidades" },
    { href: "#portfolio", label: "portfolio" },
    { href: "#contacto", label: "contacto" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking with IntersectionObserver
  useEffect(() => {
    const sectionIds = menuItems.map(item => item.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg ${isScrolled ? "shadow-lg shadow-primary/5" : ""
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <AnimatePresence mode="wait">
            <motion.a
              key={i18n.language + "-logo"}
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="relative text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block pb-1">
                Agustin
                <span className="ml-1.5 font-mono font-black">Dev</span>
              </span>
            </motion.a>
          </AnimatePresence>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <AnimatePresence mode="wait">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.href + i18n.language}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group ${isActive
                      ? "text-foreground dark:text-white"
                      : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                      }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {t(item.label)}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  {i18n.language === 'es' ? <ArgentinaFlag /> : <USAFlag />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors md:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border shadow-lg"
            >
              <div className="container mx-auto py-4">
                <nav className="flex flex-col items-center space-y-4">
                  {menuItems.map((item, index) => {
                    const isActive = activeSection === item.href.replace('#', '');
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`relative w-full text-center px-4 py-2 text-base font-medium transition-colors group ${isActive
                          ? "text-foreground dark:text-white"
                          : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                          }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {t(item.label)}
                        <span
                          className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`}
                        />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
