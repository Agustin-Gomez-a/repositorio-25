import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { motion } from 'framer-motion';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Divider = () => (
  <div className="w-full max-w-4xl mx-auto py-8">
    <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased transition-colors duration-300">
          <StagewiseToolbar 
            config={{
              plugins: [ReactPlugin]
            }}
          />
          <Navbar />
          <main className="pt-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <section id="inicio" className="scroll-mt-16 py-16">
                <Hero />
              </section>
              <Divider />
              <section id="about" className="scroll-mt-16 py-16">
                <About />
              </section>
              <Divider />
              <section id="servicios" className="scroll-mt-16 py-16">
                <Services />
              </section>
              <Divider />
              <section id="habilidades" className="scroll-mt-16 py-16">
                <Skills />
              </section>
              <Divider />
              <section id="portfolio" className="scroll-mt-16 py-16">
                <Portfolio />
              </section>
              <Divider />
              <section id="contacto" className="scroll-mt-16 py-16">
                <Contact />
              </section>
            </motion.div>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
