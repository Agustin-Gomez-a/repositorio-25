import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navbar
      "inicio": "Home",
      "sobre_mi": "About me",
      "servicios": "Services",
      "habilidades": "Skills",
      "portfolio": "Portfolio",
      "contacto": "Contact",
      
      // Hero
      "hero_subtitle": "Front-end Developer specialized in creating modern and attractive web experiences",
      "contactame": "Contact me",
      "ver_portfolio": "View Portfolio",
      "diseno_creativo": "Creative Design",
      "diseno_creativo_desc": "Unique and attractive interfaces that captivate your users",
      "desarrollo_web": "Web Development",
      "desarrollo_web_desc": "Clean and optimized code for exceptional performance",
      "resultados": "Results",
      "resultados_desc": "Solutions that drive your business growth",
      
      // About
      "sobre_mi_titulo": "About Me",
      "sobre_mi_descripcion": "I am a passionate Front-end developer focused on creating modern and attractive web experiences. I specialize in React and current web technologies, always looking for the best way to combine design and functionality.",
      "redes_sociales": "Social Networks",
      "ver_github": "View GitHub Profile",
      "ver_linkedin": "View LinkedIn Profile",
      "enviar_email": "Send Email",
      
      // Services
      "servicios_titulo": "Services",
      "diseno_web": "Web Design",
      "diseno_web_desc": "Creation of modern and attractive user interfaces",
      "desarrollo_frontend": "Frontend Development",
      "desarrollo_frontend_desc": "Development of responsive and interactive web applications",
      "optimizacion": "Optimization",
      "optimizacion_desc": "Performance improvement and code optimization",
      
      // Skills
      "habilidades_titulo": "Skills & Technologies",
      "tecnologias": "Technologies I Use",
      "herramientas": "Tools",
      "nivel_basico": "Basic",
      "nivel_intermedio": "Intermediate",
      "nivel_avanzado": "Advanced",
      
      // Portfolio
      "portfolio_titulo": "Portfolio",
      "portfolio_subtitulo": "Explore my latest projects and designs",
      "desarrollo_web": "Web Development",
      "diseno_uxui": "UX/UI Design",
      "ver_proyecto": "View Project",
      "ver_codigo": "View Code",
      "tecnologias_usadas": "Technologies Used",
      
      // Projects
      "proyecto_laba_desc": "Comprehensive management system for clinical laboratory with interactive dashboard and patient management",
      "proyecto_laba_admin_desc": "Laboratory administration panel with results management and statistics",
      "proyecto_renovar_desc": "Web portal for renewable energy company with service information and budget requests",
      "proyecto_vacunar_desc": "Vaccination management system with patient registration and dose tracking",
      "proyecto_viazzo_desc": "Web platform for service company with product catalog and online quotation",
      "proyecto_bder_desc": "Modern interface design for banking application focused on user experience",
      "proyecto_check_desc": "Intuitive interface for task management and productivity application",
      "proyecto_mirage_desc": "Platform design for digital events and immersive experiences",
      "proyecto_reciclar_desc": "Interface for recycling and waste management application",
      "proyecto_renovar_app_desc": "Mobile application design for renewable energy services management",
      
      // Contact
      "contacto_titulo": "Contact Me",
      "contacto_subtitulo": "Have a project in mind? Let's talk",
      "nombre": "Name",
      "nombre_placeholder": "Enter your name",
      "email": "Email",
      "email_placeholder": "Enter your email",
      "mensaje": "Message",
      "mensaje_placeholder": "Tell me about your project...",
      "enviar": "Send Message",
      "enviando": "Sending...",
      "email_valor": "contact@portostar.com",
      "telefono": "Phone",
      "telefono_valor": "+1 234 567 890",
      "ubicacion": "Location",
      "ubicacion_valor": "City, Country",
      
      // Footer
      "derechos": "All rights reserved",
      "sigueme": "Follow me",
      "volver_arriba": "Back to top"
    }
  },
  es: {
    translation: {
      // Navbar
      "inicio": "Inicio",
      "sobre_mi": "Sobre mí",
      "servicios": "Servicios",
      "habilidades": "Habilidades",
      "portfolio": "Portfolio",
      "contacto": "Contacto",
      
      // Hero
      "hero_subtitle": "Desarrollador Front-end especializado en crear experiencias web modernas y atractivas",
      "contactame": "Contáctame",
      "ver_portfolio": "Ver Portfolio",
      "diseno_creativo": "Diseño Creativo",
      "diseno_creativo_desc": "Interfaces únicas y atractivas que cautivan a tus usuarios",
      "desarrollo_web": "Desarrollo Web",
      "desarrollo_web_desc": "Código limpio y optimizado para un rendimiento excepcional",
      "resultados": "Resultados",
      "resultados_desc": "Soluciones que impulsan el crecimiento de tu negocio",
      
      // About
      "sobre_mi_titulo": "Sobre Mí",
      "sobre_mi_descripcion": "Soy un desarrollador Front-end apasionado por crear experiencias web modernas y atractivas. Me especializo en React y tecnologías web actuales, siempre buscando la mejor manera de combinar diseño y funcionalidad.",
      "redes_sociales": "Redes Sociales",
      "ver_github": "Ver Perfil de GitHub",
      "ver_linkedin": "Ver Perfil de LinkedIn",
      "enviar_email": "Enviar Email",
      
      // Services
      "servicios_titulo": "Servicios",
      "diseno_web": "Diseño Web",
      "diseno_web_desc": "Creación de interfaces de usuario modernas y atractivas",
      "desarrollo_frontend": "Desarrollo Frontend",
      "desarrollo_frontend_desc": "Desarrollo de aplicaciones web responsivas e interactivas",
      "optimizacion": "Optimización",
      "optimizacion_desc": "Mejora del rendimiento y optimización del código",
      
      // Skills
      "habilidades_titulo": "Habilidades y Tecnologías",
      "tecnologias": "Tecnologías que Uso",
      "herramientas": "Herramientas",
      "nivel_basico": "Básico",
      "nivel_intermedio": "Intermedio",
      "nivel_avanzado": "Avanzado",
      
      // Portfolio
      "portfolio_titulo": "Portfolio",
      "portfolio_subtitulo": "Explora mis últimos proyectos y diseños",
      "desarrollo_web": "Desarrollo Web",
      "diseno_uxui": "Diseño UX/UI",
      "ver_proyecto": "Ver Proyecto",
      "ver_codigo": "Ver Código",
      "tecnologias_usadas": "Tecnologías Utilizadas",
      
      // Projects
      "proyecto_laba_desc": "Sistema de gestión integral para laboratorio de análisis clínicos con dashboard interactivo y gestión de pacientes",
      "proyecto_laba_admin_desc": "Panel de administración para laboratorio con gestión de resultados y estadísticas",
      "proyecto_renovar_desc": "Portal web para empresa de energías renovables con información sobre servicios y solicitud de presupuestos",
      "proyecto_vacunar_desc": "Sistema de gestión de vacunación con registro de pacientes y seguimiento de dosis",
      "proyecto_viazzo_desc": "Plataforma web para empresa de servicios con catálogo de productos y cotización online",
      "proyecto_bder_desc": "Diseño de interfaz moderna para aplicación bancaria con enfoque en experiencia de usuario",
      "proyecto_check_desc": "Interfaz intuitiva para aplicación de gestión de tareas y productividad",
      "proyecto_mirage_desc": "Diseño de plataforma para eventos digitales y experiencias inmersivas",
      "proyecto_reciclar_desc": "Interfaz para aplicación de reciclaje y gestión de residuos",
      "proyecto_renovar_app_desc": "Diseño de aplicación móvil para gestión de servicios de energías renovables",
      
      // Contact
      "contacto_titulo": "Contáctame",
      "contacto_subtitulo": "¿Tienes un proyecto en mente? Hablemos",
      "nombre": "Nombre",
      "nombre_placeholder": "Ingresa tu nombre",
      "email": "Correo",
      "email_placeholder": "Ingresa tu correo",
      "mensaje": "Mensaje",
      "mensaje_placeholder": "Cuéntame sobre tu proyecto...",
      "enviar": "Enviar Mensaje",
      "enviando": "Enviando...",
      "email_valor": "contacto@portostar.com",
      "telefono": "Teléfono",
      "telefono_valor": "+1 234 567 890",
      "ubicacion": "Ubicación",
      "ubicacion_valor": "Ciudad, País",
      
      // Footer
      "derechos": "Todos los derechos reservados",
      "sigueme": "Sígueme",
      "volver_arriba": "Volver arriba"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
