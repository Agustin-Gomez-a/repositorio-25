import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
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
      "hero_greeting": "Hola, soy Agustín \uD83D\uDC4B",
      "hero_role_prefix": "Desarrollo",
      "hero_subtitle": "Desarrollador Front-end especializado en crear experiencias web modernas y atractivas",
      "contactame": "Contáctame",
      "ver_portfolio": "Ver Portfolio",

      // About
      "sobre_mi_titulo": "Sobre Mí",
      "sobre_mi_descripcion": "Soy un programador recibido en la Facultad Tecnológica de San Rafael (UTN-FRSR), apasionado por el desarrollo Front-end y la creación de experiencias web modernas.",
      "sobre_mi_descripcion2": "¡Bienvenido a mi portfolio! Si te interesa mi trabajo, no dudes en descargar mi CV para conocer más sobre mi experiencia y habilidades.",
      "redes_sociales": "Redes Sociales",
      "ver_github": "Ver Perfil de GitHub",
      "ver_linkedin": "Ver Perfil de LinkedIn",
      "descargar_cv_espanol": "Descargar CV en Español",
      "descargar_cv_ingles": "Download CV in English",

      // Services
      "servicios_titulo": "Servicios",
      "servicios_subtitulo": "Lo que puedo hacer por ti",
      "diseno_web": "Diseño Web",
      "diseno_web_desc": "Creación de interfaces de usuario modernas y atractivas",
      "desarrollo_frontend": "Desarrollo Frontend",
      "desarrollo_frontend_desc": "Desarrollo de aplicaciones web responsivas e interactivas",
      "diseno_creativo": "Diseño Creativo",
      "diseno_creativo_desc": "Interfaces únicas y atractivas que cautivan a tus usuarios",
      "desarrollo_web": "Desarrollo Web",
      "desarrollo_web_desc": "Código limpio y optimizado para un rendimiento excepcional",
      "resultados": "Resultados",
      "resultados_desc": "Soluciones que impulsan el crecimiento de tu negocio",
      "optimizacion": "Optimización",
      "optimizacion_desc": "Mejora del rendimiento y optimización del código",

      // Skills
      "habilidades_titulo": "Habilidades",
      "habilidades_subtitulo": "Tecnologías que domino",
      "tecnologias": "Tecnologías que domino",
      "frontend": "Frontend",
      "backend": "Backend",
      "herramientas": "Herramientas",

      // Portfolio
      "portfolio_titulo": "Portfolio",
      "portfolio_subtitulo": "Mis proyectos más recientes",
      "ver_proyecto": "Ver Proyecto",
      "ver_codigo": "Ver Código",
      "Proyecto App LABA": "Panel administrativo para gestión de operaciones de transporte",
      "Proyecto LABA Admin": "Dashboard de administración con gestión de usuarios y métricas",
      "Proyecto Portfolio Claudio": "Portfolio profesional con diseño moderno y responsivo",
      "Proyecto MFGA": "Sitio web institucional con contenido dinámico",
      "Proyecto PowerFit": "Landing page para gimnasio con diseño dinámico y atractivo",
      "Proyecto Humito Artesanal": "E-commerce artesanal con catálogo de productos y diseño cálido",
      "Proyecto RenovARG": "Plataforma de concientización sobre reciclaje y sustentabilidad",
      "Proyecto VacunARG": "Sistema de información sobre vacunación con seguimiento de calendario",
      "Proyecto Viazzo": "Sitio web corporativo con diseño elegante y profesional",
      "proyect Bder app": "Diseño UX/UI de aplicación móvil con investigación de usuario",
      "Proyecto Check App": "Prototipo de app de gestión de tareas con flujo intuitivo",
      "Proyecto Digital Mirage": "Concepto de app con testing de usabilidad y diseño visual",
      "Proyecto ReciclARG": "Diseño de flujo de usuario para app de reciclaje",
      "Proyecto RenovARG App": "Diseño UX/UI de aplicación móvil de sustentabilidad",

      // Contact
      "contacto_titulo": "Contacto",
      "contacto_subtitulo": "¿Tienes un proyecto en mente? ¡Hablemos!",
      "nombre": "Nombre",
      "email": "Correo electrónico",
      "mensaje": "Mensaje",
      "enviar": "Enviar mensaje",
      "enviando": "Enviando...",
      "nombre_placeholder": "Escribe tu nombre",
      "email_placeholder": "Escribe tu correo electrónico",
      "mensaje_placeholder": "Escribe tu mensaje",
      "nombre_requerido": "El nombre es requerido",
      "email_requerido": "El correo electrónico es requerido",
      "email_invalido": "Por favor, ingresa un correo electrónico válido",
      "mensaje_requerido": "El mensaje es requerido",
      "ubicacion": "Ubicación",
      "telefono": "Teléfono",
      "mensaje_enviado": "¡Mensaje enviado con éxito!",
      "error_mensaje": "Hubo un error al enviar el mensaje",
      "derechos_reservados": "Todos los derechos reservados",
      "enlaces_rapidos": "Enlaces rápidos",
      "desarrollo_web_button": "Desarrollo Web",
      "diseno_ux_ui_button": "Diseño UX/UI",
      "desarrollo_web_label": "Desarrollo Web",
      "diseno_ux_ui_label": "Diseño UX/UI",
      "nivel avanzado": "Avanzado",
      "nivel intermedio": "Intermedio",
      "nivel basico": "Básico",
      "ver_github": "Ver Perfil de GitHub",
      "ver_linkedin": "Ver Perfil de LinkedIn",
      "enviar_email": "Enviar Email"
    }
  },
  en: {
    translation: {
      // Navbar
      "inicio": "Home",
      "sobre_mi": "About",
      "servicios": "Services",
      "habilidades": "Skills",
      "portfolio": "Portfolio",
      "contacto": "Contact",

      // Hero
      "hero_greeting": "Hi, I'm Agustín \uD83D\uDC4B",
      "hero_role_prefix": "I build",
      "hero_subtitle": "Front-end Developer specialized in creating modern and attractive web experiences",
      "contactame": "Contact Me",
      "ver_portfolio": "View Portfolio",

      // About
      "sobre_mi_titulo": "About Me",
      "sobre_mi_descripcion": "I am a graduate programmer from the San Rafael Technological Faculty (UTN-FRSR), passionate about Front-end development and creating modern web experiences.",
      "sobre_mi_descripcion2": "Welcome to my portfolio! If you're interested in my work, feel free to download my CV to learn more about my experience and skills.",
      "redes_sociales": "Social Networks",
      "ver_github": "View GitHub Profile",
      "ver_linkedin": "View LinkedIn Profile",
      "descargar_cv_espanol": "Download CV in Spanish",
      "descargar_cv_ingles": "Download CV in English",

      // Services
      "servicios_titulo": "Services",
      "servicios_subtitulo": "What I can do for you",
      "diseno_web": "Web Design",
      "diseno_web_desc": "Creation of modern and attractive user interfaces",
      "desarrollo_frontend": "Frontend Development",
      "desarrollo_frontend_desc": "Development of responsive and interactive web applications",
      "diseno_creativo": "Creative Design",
      "diseno_creativo_desc": "Unique and attractive interfaces that captivate your users",
      "desarrollo_web": "Web Development",
      "desarrollo_web_desc": "Clean and optimized code for exceptional performance",
      "resultados": "Results",
      "resultados_desc": "Solutions that drive your business growth",
      "optimizacion": "Optimization",
      "optimizacion_desc": "Performance improvement and code optimization",

      // Skills
      "habilidades_titulo": "Skills",
      "habilidades_subtitulo": "Technologies I master",
      "tecnologias": "Technologies I master",
      "frontend": "Frontend",
      "backend": "Backend",
      "herramientas": "Tools",

      // Portfolio
      "portfolio_titulo": "Portfolio",
      "portfolio_subtitulo": "My latest projects",
      "ver_proyecto": "View Project",
      "ver_codigo": "View Code",
      "Proyecto App LABA": "Admin panel for transport operations management",
      "Proyecto LABA Admin": "Administration dashboard with user management and metrics",
      "Proyecto Portfolio Claudio": "Professional portfolio with modern and responsive design",
      "Proyecto MFGA": "Institutional website with dynamic content",
      "Proyecto PowerFit": "Gym landing page with dynamic and attractive design",
      "Proyecto Humito Artesanal": "Artisan e-commerce with product catalog and warm design",
      "Proyecto RenovARG": "Recycling and sustainability awareness platform",
      "Proyecto VacunARG": "Vaccination information system with calendar tracking",
      "Proyecto Viazzo": "Corporate website with elegant and professional design",
      "proyect Bder app": "Mobile app UX/UI design with user research",
      "Proyecto Check App": "Task management app prototype with intuitive flow",
      "Proyecto Digital Mirage": "App concept with usability testing and visual design",
      "Proyecto ReciclARG": "User flow design for recycling app",
      "Proyecto RenovARG App": "Sustainability mobile app UX/UI design",

      // Contact
      "contacto_titulo": "Contact",
      "contacto_subtitulo": "Have a project in mind? Let's talk!",
      "nombre": "Name",
      "email": "Email",
      "mensaje": "Message",
      "enviar": "Send message",
      "enviando": "Sending...",
      "nombre_placeholder": "Enter your name",
      "email_placeholder": "Enter your email",
      "mensaje_placeholder": "Write your message",
      "nombre_requerido": "Name is required",
      "email_requerido": "Email is required",
      "email_invalido": "Please enter a valid email",
      "mensaje_requerido": "Message is required",
      "ubicacion": "Location",
      "telefono": "Phone",
      "mensaje_enviado": "Message sent successfully!",
      "error_mensaje": "There was an error sending the message",
      "derechos_reservados": "All rights reserved",
      "enlaces_rapidos": "Quick Links",
      "desarrollo_web_button": "Web Development",
      "diseno_ux_ui_button": "UX/UI Design",
      "desarrollo_web_label": "Web Development",
      "diseno_ux_ui_label": "UX/UI Design",
      "nivel avanzado": "Advanced",
      "nivel intermedio": "Intermediate",
      "nivel basico": "Basic",
      "ver_github": "View GitHub Profile",
      "ver_linkedin": "View LinkedIn Profile",
      "enviar_email": "Send Email"
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
