// src/components/EducationRoadmap.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant
import { faCheck } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône checkmark

const EducationRoadmap = () => {
    const roadmapItems = [
        {
            year: '2023-2024',
            title: "Concepteur Développeur d'Applications (Bac +3/+4)",
            description:
                'Formation en cours chez Simplon à Valenciennes, visant un niveau Bac +3/+4, financée par la région Hauts-de-France.',
            isCurrent: true,
            isCompleted: false,
            link: '/formations/concepteur-developpeur-applications',
        },
        {
            year: '2022-2023',
            title: 'DWWM (Développeur Web et Web Mobile) (Bac +2)',
            description:
                'Formation à AFPA, acquisition des compétences de développement web de base, front-end et back-end.',
            isCurrent: false,
            isCompleted: true,
            link: '/formations/dwwm',
        },
        {
            year: '2019-2022',
            title: 'Bac Général Technologique STI2D S.I.N',
            description:
                'Obtention du Baccalauréat Technologique Sciences et Technologies de l’Industrie et du Développement Durable, spécialité Systèmes d’Information et Numérique.',
            isCurrent: false,
            isCompleted: true,
            link: '/formations/bac-sti2d-sin',
        },
    ];

    // Utilisation de useInView pour l'animation au scroll
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="mt-16 px-10" ref={ref}>
            <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                Mes Études
            </motion.h2>
            <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute top-0 left-10 w-1 bg-indigo-600 h-full"></div>
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`relative mb-8 flex items-start ${
                            item.isCurrent ? 'font-bold' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        {/* Point pour chaque étape */}
                        <div className="relative z-10 flex items-center justify-center">
                            {item.isCompleted ? (
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-white" />
                                </div>
                            ) : item.isCurrent ? (
                                <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white animate-pulse"></div>
                            ) : (
                                <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                            )}
                        </div>

                        {/* Contenu de chaque étape */}
                        <div className="ml-8 w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <div className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold mb-2">
                                {item.year}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-gray-800 dark:text-gray-300 text-sm mb-4">
                                {item.description}
                            </p>
                            {/* Bouton Voir plus */}
                            <Link
                                to={item.link}
                                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                            >
                                Voir plus &rarr;
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EducationRoadmap;
