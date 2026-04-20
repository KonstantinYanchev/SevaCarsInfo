'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Wrench, Clock, Award } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-carbon-900 bg-noise">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-hex-pattern opacity-30"></div>
        <div className="absolute inset-0 speed-lines opacity-20"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-900/50 via-transparent to-carbon-900"></div>

        {/* Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block px-4 py-2 bg-racing-500/10 border border-racing-500/30 rounded-full text-racing-500 text-sm font-sans font-semibold tracking-wide uppercase">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider text-glow"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-sans text-lg sm:text-xl text-carbon-200 mb-12 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-racing-500 hover:bg-racing-600 text-white font-sans font-bold rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>{t('hero.cta.primary')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/contacts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-carbon-600 hover:border-racing-500 text-white font-sans font-bold rounded-lg transition-colors"
              >
                {t('hero.cta.secondary')}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-carbon-600 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2 bg-racing-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-carbon-950 border-t border-carbon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-wider">
              {t('home.whyChoose').toUpperCase()}
            </h2>
            <div className="w-20 h-1 bg-racing-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: t('home.features.expert.title'),
                description: t('home.features.expert.desc'),
              },
              {
                icon: Clock,
                title: t('home.features.fast.title'),
                description: t('home.features.fast.desc'),
              },
              {
                icon: Award,
                title: t('home.features.quality.title'),
                description: t('home.features.quality.desc'),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-carbon-900 border border-carbon-800 hover:border-racing-500/50 rounded-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-racing-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-racing-500/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-racing-500" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-carbon-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
