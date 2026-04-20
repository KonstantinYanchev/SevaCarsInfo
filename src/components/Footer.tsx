'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-carbon-950 border-t border-carbon-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.svg"
                  alt="Seva Cars"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display text-xl text-white tracking-wider">
                  SEVA CARS
                </div>
                <div className="text-xs text-racing-500 tracking-widest">
                  AUTOMOTIVE SERVICE
                </div>
              </div>
            </div>
            <p className="text-sm text-carbon-300 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-white mb-4 tracking-wider">
              {t('footer.quickLinks').toUpperCase()}
            </h3>
            <ul className="space-y-2">
              {[
                { key: 'home', href: '/' },
                { key: 'services', href: '/services' },
                { key: 'about', href: '/about' },
                { key: 'contacts', href: '/contacts' },
              ].map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-carbon-300 hover:text-racing-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-racing-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg text-white mb-4 tracking-wider">
              {t('footer.contact').toUpperCase()}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-carbon-300">
                <Phone className="w-4 h-4 mt-1 text-racing-500 flex-shrink-0" />
                <span>+359 XX XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-carbon-300">
                <Mail className="w-4 h-4 mt-1 text-racing-500 flex-shrink-0" />
                <span>info@sevacars.bg</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-carbon-300">
                <MapPin className="w-4 h-4 mt-1 text-racing-500 flex-shrink-0" />
                <span>Bulgaria</span>
              </li>
            </ul>
          </div>

          {/* Working Hours & Social */}
          <div>
            <h3 className="font-display text-lg text-white mb-4 tracking-wider">
              {t('footer.hours').toUpperCase()}
            </h3>
            <ul className="space-y-2 text-sm text-carbon-300 mb-6">
              <li className="flex justify-between">
                <span>{t('footer.workingHours.weekdays').split(':')[0]}:</span>
                <span className="text-white">{t('footer.workingHours.weekdays').split(':').slice(1).join(':').trim()}</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.workingHours.saturday').split(':')[0]}:</span>
                <span className="text-white">{t('footer.workingHours.saturday').split(':').slice(1).join(':').trim()}</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.workingHours.sunday').split(':')[0]}:</span>
                <span className="text-carbon-500">{t('footer.workingHours.sunday').split(':').slice(1).join(':').trim()}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="font-display text-sm text-white mb-3 tracking-wider">
                {t('footer.social').toUpperCase()}
              </h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Youtube, href: '#', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-carbon-800 flex items-center justify-center text-carbon-300 hover:bg-racing-500 hover:text-white transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-carbon-800 bg-carbon-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-carbon-400">
              © {currentYear} Seva Cars. {t('footer.rights')}.
            </p>
            <div className="flex items-center space-x-1 text-xs text-carbon-500">
              <span>Powered by</span>
              <span className="text-racing-500 font-semibold">Next.js</span>
              <span>&</span>
              <span className="text-racing-500 font-semibold">React 19</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative speed lines */}
      <div className="h-1 bg-gradient-to-r from-transparent via-racing-500 to-transparent opacity-50"></div>
    </footer>
  );
}
