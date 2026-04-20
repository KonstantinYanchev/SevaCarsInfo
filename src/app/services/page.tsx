'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Settings, Cpu, Droplet, Zap, Gauge, Shield } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

export default function ServicesPage() {
  const { t } = useTranslation('common');

  const services = [
    {
      icon: Settings,
      titleKey: 'services.list.maintenance.title',
      descKey: 'services.list.maintenance.desc',
    },
    {
      icon: Cpu,
      titleKey: 'services.list.diagnostics.title',
      descKey: 'services.list.diagnostics.desc',
    },
    {
      icon: Droplet,
      titleKey: 'services.list.brakes.title',
      descKey: 'services.list.brakes.desc',
    },
    {
      icon: Zap,
      titleKey: 'services.list.electrical.title',
      descKey: 'services.list.electrical.desc',
    },
    {
      icon: Gauge,
      titleKey: 'services.list.suspension.title',
      descKey: 'services.list.suspension.desc',
    },
    {
      icon: Shield,
      titleKey: 'services.list.transmission.title',
      descKey: 'services.list.transmission.desc',
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20"></div>
        <div className="absolute inset-0 speed-lines opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6 tracking-wider">
              {t('services.title').toUpperCase()}
            </h1>
            <div className="w-24 h-1 bg-racing-500 mx-auto mb-6"></div>
            <p className="text-lg text-carbon-200 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-racing-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-racing-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.titleKey}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 bg-slate-900 border border-slate-800 hover:border-racing-500/50 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-racing-500/5 rounded-full blur-3xl group-hover:bg-racing-500/10 transition-colors"></div>
                
                {/* Hexagonal overlay on hover */}
                <div className="absolute inset-0 bg-hex-pattern opacity-0 group-hover:opacity-10 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-racing-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-racing-500/20 transition-colors">
                    <service.icon className="w-8 h-8 text-racing-500" />
                  </div>
                  
                  <h3 className="font-display text-2xl text-white mb-3 tracking-wide">
                    {t(service.titleKey)}
                  </h3>
                  
                  <p className="text-carbon-300 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-0 group-hover:w-12 bg-racing-500 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-slate-900 border-t border-slate-800 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-tire-track opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 tracking-wider">
              {t('services.cta.title').toUpperCase()}
            </h2>
            <p className="text-lg text-carbon-200 mb-8">
              {t('services.cta.subtitle')}
            </p>
            <motion.a
              href="/contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-racing-500 hover:bg-racing-600 text-white font-sans font-bold rounded-lg transition-colors"
            >
              {t('services.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
