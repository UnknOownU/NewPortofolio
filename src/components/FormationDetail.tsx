// src/components/FormationDetail.tsx

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faHtml5,
    faCss3Alt,
    faJsSquare as faJs,
} from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Skill {
    name: string;
    icon: IconDefinition;
}

interface Formation {
    title: string;
    description: string;
    skills: Skill[];
}

const formationsData: { [key: string]: Formation } = {
    'concepteur-developpeur-applications': {
        title: "Concepteur Développeur d'Applications (Bac +3/+4)",
        description:
            'Description détaillée de la formation Concepteur Développeur d’Applications...',
        skills: [
            { name: 'Symfony', icon: faArrowLeft }, // Remplacez par l'icône appropriée
            { name: 'React', icon: faReact },
            // Ajoutez d'autres compétences avec leurs icônes
        ],
    },
    dwwm: {
        title: 'DWWM (Développeur Web et Web Mobile) (Bac +2)',
        description: 'Description détaillée de la formation DWWM...',
        skills: [
            { name: 'HTML', icon: faHtml5 },
            { name: 'CSS', icon: faCss3Alt },
            { name: 'JavaScript', icon: faJs },
            // Ajoutez d'autres compétences avec leurs icônes
        ],
    },
    'bac-sti2d-sin': {
        title: 'Bac Général Technologique STI2D S.I.N',
        description: 'Description détaillée du Bac STI2D S.I.N...',
        skills: [
            { name: 'Électronique', icon: faMicrochip },
            // Ajoutez d'autres compétences avec leurs icônes
        ],
    },
};

const FormationDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        return (
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Formation non trouvée
                </h2>
            </div>
        );
    }

    const formation = formationsData[id];

    if (!formation) {
        return (
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Formation non trouvée
                </h2>
            </div>
        );
    }

    return (
        <div className="p-10">
            {/* Fil d'Ariane */}
            <nav className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/" className="hover:underline">
                    Accueil
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-700 dark:text-gray-300">
          {formation.title}
        </span>
            </nav>

            {/* Bouton Retour */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
            >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Retour
            </button>

            {/* Titre de la formation */}
            <motion.h2
                className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {formation.title}
            </motion.h2>

            {/* Description */}
            <motion.p
                className="text-gray-800 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {formation.description}
            </motion.p>

            {/* Compétences */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {formation.skills.map((skill: Skill, index: number) => (
                    <div key={index} className="flex flex-col items-center">
                        <FontAwesomeIcon icon={skill.icon} size="3x" className="mb-2" />
                        <span className="text-gray-900 dark:text-gray-100">
              {skill.name}
            </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default FormationDetail;
