// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    {/* Icône du soleil */}
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 5.22a1 1 0 011.42 0L6.64 6.22a1 1 0 11-1.42 1.42L4.22 6.64a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 8a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zm5.78-2.78a1 1 0 00-1.42 0L13.36 13.78a1 1 0 001.42 1.42l1.22-1.22a1 1 0 000-1.42zM17 9h-1a1 1 0 100 2h1a1 1 0 100-2zm-3.64-3.36a1 1 0 00-1.42 1.42L13.78 6.64a1 1 0 001.42-1.42l-1.22-1.22z" />
                    <circle cx="10" cy="10" r="3" />
                </svg>
            ) : (
                <svg className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                    {/* Icône de la lune */}
                    <path
                        fillRule="evenodd"
                        d="M17.293 13.293A8 8 0 016.707 2.707a8 8 0 1010.586 10.586z"
                        clipRule="evenodd"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
