"use client";

// src/app/page.tsx
import { motion } from "framer-motion";
import ThemeToggle from '../components/ThemeToggle';
import ProjectsSection from '../components/ProjectsSection';
import EducationRoadmap from '../components/EducationRoadmap';
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
import {faCode, faDatabase, faFire, faLeaf, faPaperPlane} from "@fortawesome/free-solid-svg-icons"; // Importer depuis le package des icônes de marques

const stacks = [
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'Bootstrap', icon: faBootstrap },
  { name: 'React', icon: faReact },
  { name: 'Symfony', icon: faCode }, // 'faCode' provient du package 'free-solid-svg-icons'
  { name: 'PHP', icon: faPhp },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Postman', icon: faPaperPlane }, // 'faPaperPlane' provient du package 'free-solid-svg-icons'
  { name: 'GitHub', icon: faGithub },
  { name: 'Git', icon: faGitAlt }, // 'faGitAlt' provient du package 'free-brands-svg-icons'
  { name: 'GitLab', icon: faGitlab },
  { name: 'Docker', icon: faDocker },
  { name: 'MySQL', icon: faDatabase }, // 'faDatabase' provient du package 'free-solid-svg-icons'
  { name: 'PostgreSQL', icon: faDatabase }, // 'faDatabase' provient du package 'free-solid-svg-icons'
  { name: 'MongoDB', icon: faLeaf }, // 'faLeaf' provient du package 'free-solid-svg-icons'
  { name: 'Firebase', icon: faFire }, // 'faFire' provient du package 'free-solid-svg-icons'
];

export default function Home() {
  return (
      <div className="px-10 py-6">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="text-center">
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
        </div>

        {/* Stacks */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {stacks.map((stack, index) => (
              <div
                  key={index}
                  className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full"
              >
                <FontAwesomeIcon icon={stack.icon} className="mr-2" />
                {stack.name}
              </div>
          ))}
        </div>

        {/* Projets et roadmap */}
        <ProjectsSection />
        <EducationRoadmap />
      </div>
  );
}
