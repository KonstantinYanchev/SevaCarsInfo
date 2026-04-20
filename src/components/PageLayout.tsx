'use client';

import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { pageTransition } from '@/lib/animations';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <motion.main
        variants={pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex-grow pt-20"
      >
        {children}
      </motion.main>
      
      <Footer />
    </div>
  );
}
