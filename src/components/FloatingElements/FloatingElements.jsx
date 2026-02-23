import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
    const elements = [
        { char: '</', x: '8%', y: '15%', delay: 0, size: 'text-xl sm:text-2xl' },
        { char: '/>', x: '85%', y: '25%', delay: 1.5, size: 'text-lg sm:text-xl' },
        { char: '{ }', x: '12%', y: '60%', delay: 3, size: 'text-xl sm:text-2xl' },
        { char: '( )', x: '90%', y: '70%', delay: 2, size: 'text-lg sm:text-xl' },
        { char: '&&', x: '5%', y: '40%', delay: 4, size: 'text-base sm:text-lg' },
        { char: '=>', x: '92%', y: '50%', delay: 2.5, size: 'text-base sm:text-lg' },
        { char: '[]', x: '15%', y: '80%', delay: 1, size: 'text-base sm:text-lg' },
        { char: '===', x: '88%', y: '85%', delay: 3.5, size: 'text-base sm:text-lg' },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden sm:block">
            {elements.map((el, i) => (
                <motion.span
                    key={i}
                    className={`absolute font-mono font-bold ${el.size} text-primary/[0.06] dark:text-primary/[0.08] select-none`}
                    style={{ left: el.x, top: el.y }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -15, 0],
                    }}
                    transition={{
                        opacity: { delay: el.delay, duration: 0.5 },
                        y: {
                            delay: el.delay,
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    }}
                >
                    {el.char}
                </motion.span>
            ))}
        </div>
    );
};

export default FloatingElements;
