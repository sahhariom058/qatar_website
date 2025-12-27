import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialIcons from './SocialIcons';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.reviews', href: '#reviews' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">E</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-primary leading-tight">EXCITEL</h1>
              <p className="text-xs text-muted-foreground">Trading & Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Right Section: Social Icons + Theme Toggle + Language Toggle + CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Social Icons - Desktop */}
            <div className="hidden xl:block">
              <SocialIcons iconSize={16} />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Language Toggle */}
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent text-foreground hover:bg-muted'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1.5 text-xs font-semibold transition-all ${
                  language === 'ar'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent text-foreground hover:bg-muted'
                }`}
              >
                AR
              </button>
            </div>

            {/* WhatsApp CTA - Desktop */}
            <a
              href="https://wa.me/97430773176?text=Hello%2C%20I%20am%20interested%20in%20your%20professional%20cleaning%20and%20facility%20management%20services.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 btn-gold px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>{t('hero.cta')}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground z-[60]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-lg z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium py-4 px-4 rounded-lg hover:bg-muted text-left w-full active:bg-accent/10"
                  >
                    {t(item.key)}
                  </button>
                ))}
                
                {/* Social Icons - Mobile */}
                <div className="pt-4 border-t border-border mt-4">
                  <p className="text-sm text-muted-foreground mb-3 px-4">Follow Us</p>
                  <div className="px-4">
                    <SocialIcons iconSize={18} />
                  </div>
                </div>
                
                <a
                  href="https://wa.me/97430773176?text=Hello%2C%20I%20am%20interested%20in%20your%20professional%20cleaning%20and%20facility%20management%20services.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-gold px-4 py-4 rounded-lg text-sm font-semibold mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('hero.cta')}</span>
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
