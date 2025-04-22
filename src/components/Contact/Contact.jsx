import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'marceloagustingomezaranda@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "email",
      value: "marceloagustingomezaranda@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "telefono",
      value: "+54 9 381 623 6718",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "ubicacion",
      value: "San Miguel de Tucumán",
    },
  ];

  return (
    <div id="contacto" className="container py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language + "contact-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground dark:text-white">
            {t('contacto_titulo')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('contacto_subtitulo')}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="absolute -top-4 -left-4"
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  {info.icon}
                </div>
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language + info.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-foreground dark:text-white mb-2 mt-2">
                    {t(info.title)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(info.value)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-border"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl" />
          <form onSubmit={handleSubmit} className="relative space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language + "form-fields"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-foreground dark:text-white font-medium mb-2">
                    {t('nombre')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
                    required
                    placeholder={t('nombre_placeholder')}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-foreground dark:text-white font-medium mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
                    required
                    placeholder={t('email_placeholder')}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-foreground dark:text-white font-medium mb-2">
                    {t('mensaje')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border-2 border-border focus:border-primary transition-colors placeholder:text-muted-foreground"
                    required
                    placeholder={t('mensaje_placeholder')}
                  ></textarea>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group w-full inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <span>{t('enviar')}</span>
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
              {submitStatus === 'success' && (
                <div className="absolute top-full left-0 right-0 mt-2 text-green-500 text-sm">
                  {t('mensaje_enviado')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="absolute top-full left-0 right-0 mt-2 text-red-500 text-sm">
                  {t('error_mensaje')}
                </div>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
