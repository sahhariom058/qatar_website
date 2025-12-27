import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.reviews', href: '#reviews' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const emails = [
    'aftab@excitel-ts.com',
    'shaahi@excitel-ts.com',
    'syed@excitel-ts.com',
    'info@excitel-ts.com',
  ];

  const whatsappNumbers = [
    { number: '+974 30773060', display: '+974 30773060' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="text-left space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-primary font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">EXCITEL</h3>
                <p className="text-primary-foreground/70 text-sm">Trading & Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              {t('footer.companyName')}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {t('footer.crNo')}
            </p>
            
            {/* Social Icons */}
            <SocialIcons className="mt-4" iconSize={18} />

            {/* Language Toggle */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-sm text-primary-foreground/70">
                {language === 'en' ? 'Language:' : 'اللغة:'}
              </span>
              <div className="flex items-center border border-primary-foreground/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                    language === 'en'
                      ? 'bg-accent text-primary'
                      : 'bg-transparent text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                    language === 'ar'
                      ? 'bg-accent text-primary'
                      : 'bg-transparent text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-semibold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm text-left"
                >
                  {t(link.key)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h4 className="font-semibold text-lg mb-6">{t('footer.contactInfo')}</h4>
            
            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-primary-foreground/80 text-sm">
                  {t('contact.addressLine')}
                </p>
                <a
                  href="https://maps.google.com/?q=Doha+Qatar+Zone+7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:underline mt-1 inline-block"
                >
                  {t('contact.getDirections')}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                {whatsappNumbers.map((item) => (
                  <a
                    key={item.number}
                    href={`https://wa.me/${item.number.replace(/\s/g, '').replace('+', '')}?text=Hello%2C%20I%20contacted%20you%20from%20your%20website.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {item.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Email Addresses */}
          <div className="text-left">
            <h4 className="font-semibold text-lg mb-6">{t('contact.email')}</h4>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="flex flex-col gap-2">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} {t('footer.companyName')}. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcons iconSize={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
