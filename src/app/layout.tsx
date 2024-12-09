// src/app/layout.tsx
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
  title: "Portfolio | Abdelkarim Boucharafa",
  description: "Développeur Symfony - Portfolio personnel.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="fr">
      <body className="bg-gray-100 dark:bg-gray-900">
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
