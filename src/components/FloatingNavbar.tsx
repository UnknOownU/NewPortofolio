// src/components/FloatingNavbar.tsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingNavbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                // L'utilisateur est tout en haut de la page
                setShowNavbar(true);
            } else {
                // L'utilisateur a défilé vers le bas
                setShowNavbar(false);
            }
        };

        // Vérifier la position de défilement initiale
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        // Nettoyer l'écouteur lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {showNavbar && (
                <motion.div
                    className="fixed top-16 w-full flex justify-center z-40"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 sm:px-6 sm:py-3 flex space-x-2 sm:space-x-4 items-center">
                        <button className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300">
                            Accueil
                        </button>
                        <button className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300">
                            Projets
                        </button>
                        <button className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-300">
                            Infos
                        </button>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingNavbar;
