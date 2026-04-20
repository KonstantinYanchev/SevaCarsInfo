'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Target, Heart, TrendingUp } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-carbon-900 bg-noise overflow-hidden">
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
              {t('about.title').toUpperCase()}
            </h1>
            <div className="w-24 h-1 bg-racing-500 mx-auto mb-6"></div>
            <p className="text-lg text-carbon-200 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-carbon-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="font-display text-4xl text-white mb-6 tracking-wide text-center">
              {t('about.story.title').toUpperCase()}
            </h2>
            <div className="w-16 h-1 bg-racing-500 mx-auto mb-8"></div>
            
            <div className="space-y-6 text-carbon-200 text-lg leading-relaxed">
              <p>
                {t('about.story.content')}
              </p>
              <p>
                {t('about.mission.content')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-carbon-900 border-t border-carbon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-wider">
              {t('about.values.title').toUpperCase()}
            </h2>
            <div className="w-20 h-1 bg-racing-500 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Users,
                titleKey: 'about.values.list.customer.title',
                descKey: 'about.values.list.customer.desc',
              },
              {
                icon: Target,
                titleKey: 'about.values.list.excellence.title',
                descKey: 'about.values.list.excellence.desc',
              },
              {
                icon: Heart,
                titleKey: 'about.values.list.honesty.title',
                descKey: 'about.values.list.honesty.desc',
              },
              {
                icon: TrendingUp,
                titleKey: 'about.values.list.passion.title',
                descKey: 'about.values.list.passion.desc',
              },
            ].map((value, index) => (
              <motion.div
                key={value.titleKey}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative p-6 bg-carbon-900 border border-carbon-800 hover:border-racing-500/50 rounded-lg transition-all duration-300"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-racing-500/5 rounded-full blur-3xl group-hover:bg-racing-500/10 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-racing-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-racing-500/20 transition-colors">
                    <value.icon className="w-7 h-7 text-racing-500" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2 tracking-wide">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-carbon-300 text-sm leading-relaxed">
                    {t(value.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="relative py-20 bg-carbon-950 border-t border-carbon-800 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-tire-track opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-wider">
              {t('about.team.title').toUpperCase()}
            </h2>
            <div className="w-20 h-1 bg-racing-500 mx-auto mb-8"></div>
            <p className="text-lg text-carbon-300 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
