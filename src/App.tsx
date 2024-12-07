// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';
import { ThemeProvider } from './context/ThemeContext'; // Assurez-vous que cette ligne est présente
import ThemeToggle from './components/ThemeToggle';
import FloatingNavbar from './components/FloatingNavbar';
import ProjectsSection from './components/ProjectsSection';
import EducationRoadmap from './components/EducationRoadmap';
import FormationDetail from './components/FormationDetail';

// Importation des icônes FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faBootstrap,
    faReact,
    faPhp,
    faNodeJs,
    faGitAlt,
    faGithub,
    faGitlab,
    faDocker,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faCode,
    faPaperPlane,
    faFire,
    faLeaf,
} from '@fortawesome/free-solid-svg-icons';

// Définition du tableau des stacks
const stacks = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'React', icon: faReact },
    { name: 'Symfony', icon: faCode }, // Utilisation de faCode comme alternative
    { name: 'PHP', icon: faPhp },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Postman', icon: faPaperPlane }, // Utilisation de faPaperPlane comme alternative
    { name: 'GitHub', icon: faGithub },
    { name: 'Git', icon: faGitAlt },
    { name: 'GitLab', icon: faGitlab },
    { name: 'Docker', icon: faDocker },
    { name: 'MySQL', icon: faDatabase },
    { name: 'PostgreSQL', icon: faDatabase },
    { name: 'MongoDB', icon: faLeaf }, // Utilisation de faLeaf comme alternative
    { name: 'Firebase', icon: faFire },
];

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col">
                {/* Bouton de bascule du thème */}
                <div className="flex justify-end p-4 relative z-50">
                    <ThemeToggle />
                </div>

                {/* Barre de navigation flottante */}
                <FloatingNavbar />

                {/* Contenu principal avec Routes */}
                <div className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    {/* Votre contenu principal */}
                                    <div className="flex flex-col items-start justify-start mt-10 px-10">
                                        {/* Votre nom et titre */}
                                        <motion.h1
                                            className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                        >
                                            Abdelkarim Boucharafa
                                        </motion.h1>
                                        <motion.h2
                                            className="text-2xl font-semibold mb-8 text-indigo-600 dark:text-indigo-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        >
                                            Développeur Symfony
                                        </motion.h2>

                                        {/* Stack que vous gérez */}
                                        <motion.div
                                            className="flex flex-wrap justify-start space-x-4 mb-12"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 1, delay: 1 }}
                                        >
                                            {stacks.map((stack, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full m-2"
                                                >
                                                    <FontAwesomeIcon icon={stack.icon} className="mr-2" />
                                                    <span>{stack.name}</span>
                                                </div>
                                            ))}
                                        </motion.div>

                                        {/* Bouton pour télécharger le CV ou contacter */}
                                        <motion.div
                                            className="flex space-x-4"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 1.5 }}
                                        >
                                            <a
                                                href="#contact"
                                                className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                                            >
                                                Me contacter
                                            </a>
                                            <a
                                                href="/cv.pdf" // Assurez-vous de remplacer par le bon lien
                                                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Télécharger mon CV
                                            </a>
                                        </motion.div>
                                    </div>

                                    {/* Section des projets */}
                                    <ProjectsSection />

                                    {/* Section de la roadmap des études */}
                                    <EducationRoadmap />

                                    {/* Section des expériences */}
                                    <div className="mt-20 mb-10">
                                        {/* Vous pouvez ajouter vos sections ici ultérieurement */}
                                    </div>
                                </div>
                            }
                        />
                        <Route path="/formations/:id" element={<FormationDetail />} />
                    </Routes>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
