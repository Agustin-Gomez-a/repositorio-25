import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiFigma,
} from "react-icons/si";
import { GiWorld } from "react-icons/gi";

const Skills = () => {
  const { t, i18n } = useTranslation();

  const skills = [
    {
      name: "React",
      icon: <SiReact className="h-8 w-8" />,
      level: "nivel_avanzado",
      percentage: 90,
      color: "from-[#61DAFB] to-[#00B4D8]",
      shadowColor: "shadow-[#61DAFB]/20",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-8 w-8" />,
      level: "nivel_avanzado",
      percentage: 85,
      color: "from-[#F7DF1E] to-[#FFD700]",
      shadowColor: "shadow-[#F7DF1E]/20",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="h-8 w-8" />,
      level: "nivel_avanzado",
      percentage: 95,
      color: "from-[#E34F26] to-[#FF5722]",
      shadowColor: "shadow-[#E34F26]/20",
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="h-8 w-8" />,
      level: "nivel_avanzado",
      percentage: 90,
      color: "from-[#1572B6] to-[#00BCD4]",
      shadowColor: "shadow-[#1572B6]/20",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-8 w-8" />,
      level: "nivel_avanzado",
      percentage: 85,
      color: "from-[#38B2AC] to-[#0ED3CF]",
      shadowColor: "shadow-[#38B2AC]/20",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="h-8 w-8" />,
      level: "nivel_intermedio",
      percentage: 60,
      color: "from-[#339933] to-[#4CAF50]",
      shadowColor: "shadow-[#339933]/20",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="h-8 w-8" />,
      level: "nivel_intermedio",
      percentage: 65,
      color: "from-[#4479A1] to-[#2196F3]",
      shadowColor: "shadow-[#4479A1]/20",
    },
    {
      name: "Figma",
      icon: <SiFigma className="h-8 w-8" />,
      level: "nivel_intermedio",
      percentage: 70,
      color: "from-[#F24E1E] to-[#FF7262]",
      shadowColor: "shadow-[#F24E1E]/20",
    },
    {
      name: "English",
      icon: <GiWorld className="h-8 w-8" />,
      level: "nivel_basico",
      percentage: 50,
      color: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/20",
    },
  ];

  return (
    <div id="habilidades" className="container py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={i18n.language + "skills-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground dark:text-white">
            {t('habilidades_titulo')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('tecnologias')}
          </p>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-background to-secondary/20 p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="relative z-10 space-y-4">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex rounded-xl bg-gradient-to-r ${skill.color} p-3 text-white shadow-lg ${skill.shadowColor}`}
              >
                {skill.icon}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language + skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t(skill.level)}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-2 w-full rounded-full bg-secondary/50 overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
