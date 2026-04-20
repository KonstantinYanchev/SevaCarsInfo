'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function ContactsPage() {
  const { t } = useTranslation('common');

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
              {t('contacts.title').toUpperCase()}
            </h1>
            <div className="w-24 h-1 bg-racing-500 mx-auto mb-6"></div>
            <p className="text-lg text-carbon-200 max-w-2xl mx-auto">
              {t('contacts.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl text-white mb-6 tracking-wide">
                  {t('contacts.info.title').toUpperCase()}
                </h2>
                <p className="text-carbon-300 leading-relaxed mb-8">
                  {t('contacts.subtitle')}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: t('contacts.info.phone'),
                    content: '+359 XX XXX XXXX',
                    subtitle: t('footer.workingHours.weekdays'),
                  },
                  {
                    icon: Mail,
                    title: t('contacts.info.email'),
                    content: 'info@sevacars.bg',
                    subtitle: t('contacts.form.success'),
                  },
                  {
                    icon: MapPin,
                    title: t('contacts.info.address'),
                    content: 'Bulgaria',
                    subtitle: t('contacts.map.title'),
                  },
                  {
                    icon: Clock,
                    title: t('contacts.info.hours'),
                    content: t('footer.workingHours.weekdays'),
                    subtitle: `${t('footer.workingHours.saturday')}`,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-900 transition-colors"
                  >
                    <div className="w-12 h-12 bg-racing-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-racing-500" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-carbon-100 mb-1">{item.content}</p>
                      <p className="text-sm text-carbon-400">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 border border-slate-800 rounded-lg p-8"
            >
              <h2 className="font-display text-3xl text-white mb-6 tracking-wide">
                {t('contacts.form.title').toUpperCase()}
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-sans font-semibold text-carbon-200 mb-2">
                    {t('contacts.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:border-racing-500 transition-colors"
                    placeholder={t('contacts.form.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-sans font-semibold text-carbon-200 mb-2">
                    {t('contacts.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:border-racing-500 transition-colors"
                    placeholder={t('contacts.form.email')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-sans font-semibold text-carbon-200 mb-2">
                    {t('contacts.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:border-racing-500 transition-colors"
                    placeholder={t('contacts.form.phone')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-sans font-semibold text-carbon-200 mb-2">
                    {t('contacts.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-carbon-500 focus:outline-none focus:border-racing-500 transition-colors resize-none"
                    placeholder={t('contacts.form.message')}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-racing-500 hover:bg-racing-600 text-white font-sans font-bold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{t('contacts.form.submit')}</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="relative py-20 bg-slate-900 border-t border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl text-white mb-8 tracking-wider">
              {t('contacts.map.title').toUpperCase()}
            </h2>
            <div className="bg-slate-950 border border-slate-800 rounded-lg h-96 flex items-center justify-center">
              <p className="text-carbon-500">Map placeholder - Google Maps integration</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
