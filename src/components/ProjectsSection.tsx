import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectsSection: React.FC = () => {
    const projects = [
        {
            title: 'Projet 1 : Bot Discord',
            description: 'Un bot Discord pour faciliter l\'onboarding et la gestion des membres.',
            detailsLink: '/projects/bot-discord', // URL interne
        },
        {
            title: 'Projet 2 : Application de Gestion',
            description: 'Une application de gestion de tâches développée avec React et Symfony.',
            detailsLink: '/projects/gestion-app', // URL interne
        },
        {
            title: 'Projet 3 : API RESTful',
            description: 'API RESTful construite avec Node.js et MongoDB pour un service de gestion des utilisateurs.',
            detailsLink: '/projects/api-restful', // URL interne
        },
    ];

    return (
        <div className="mt-20 px-20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
                Projets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[300px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 * index }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-800 dark:text-gray-300 mb-6">
                                {project.description}
                            </p>
                        </div>
                        <div>
                            <Link
                                href={project.detailsLink}
                                className="bg-indigo-600 tenpmnpm xt-white px-4 py-2 rounded-full hover:bg-indigo-700 transition self-end block text-center"
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
