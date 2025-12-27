import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, ChevronDown, Award, Users, Shield, Clock, Mail, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Award, key: 'trust.experience' },
    { icon: Users, key: 'trust.clients' },
    { icon: Shield, key: 'trust.staff' },
    { icon: Clock, key: 'trust.reliable' },
  ];

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
<div className="absolute inset-0 bg-black/30 dark:bg-black/50" />

      {/* Decorative Blobs */}
      <div className="absolute top-16 right-8 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 left-8 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/50 mb-4 text-xs"
              style={{
                background: 'linear-gradient(135deg, hsla(43, 74%, 49%, 0.2) 0%, hsla(43, 80%, 60%, 0.1) 100%)',
                boxShadow: '0 0 15px hsla(43, 74%, 49%, 0.3)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold">{t('hero.badge')}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-md"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/90 dark:text-white mb-5 max-w-lg"

            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Contact Block - Only +974 3077 3060 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-5 border border-white/20"
            >
              <div className="grid grid-cols-[1fr_2fr] gap-4">
                {/* Left: WhatsApp - single number */}
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white dark:text-white
 text-sm block mb-1">WhatsApp</span>
                    <a href="tel:+97430773060" className="block text-white dark:text-white
 hover:text-accent text-sm">
                      +974 3077 3060
                    </a>
                  </div>
                </div>

                {/* Right: Emails - 4 emails in 2×2 grid */}
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="w-full">
                    <span className="font-semibold text-white dark:text-white
 text-sm block mb-1">Email</span>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                      <a href="mailto:info@excitel-ts.com" className="text-white dark:text-white
 hover:text-accent truncate">
                        info@excitel-ts.com
                      </a>
                      <a href="mailto:shaahi@excitel-ts.com" className="text-white dark:text-white
 hover:text-accent truncate">
                        shaahi@excitel-ts.com
                      </a>
                      <a href="mailto:aftab@excitel-ts.com" className="text-white dark:text-white
 hover:text-accent truncate">
                        aftab@excitel-ts.com
                      </a>
                      <a href="mailto:syed@excitel-ts.com" className="text-white dark:text-white
hover:text-accent truncate">
                        syed@excitel-ts.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-5"
            >
              <a
                href="https://wa.me/97430773060?text=Hello%2C%20I%20am%20interested%20in%20your%20professional%20cleaning%20and%20facility%20management%20services.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-gold px-6 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                {t('hero.cta')}
              </a>
              <button
  onClick={scrollToServices}
  className="px-6 py-3 rounded-lg text-sm font-medium
             bg-white/15 text-white
             border border-white/40
             hover:bg-white/25
             transition-all"
>
  {t('hero.learnMore')}
</button>

            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-2"
            >
              {trustItems.map((item) => (
                <div
  key={item.key}
  className="flex items-center gap-2 p-2 rounded-lg
             bg-white/10
             border border-white/40
             text-xs"
>

                  <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-white font-medium
">
                    {t(item.key)}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-3xl transform -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=90"
                alt="Professional cleaning service in Qatar"
                className="relative w-full h-[240px] sm:h-[300px] md:h-[380px] object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
              <div className="absolute -bottom-3 -left-3 bg-card p-3 rounded-lg shadow-lg border border-border hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">10+ Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-card p-2.5 rounded-lg shadow-lg border border-border hidden sm:block">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold">Doha, Qatar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
        <ChevronDown className="w-5 h-5 text-white/80 hover:text-white animate-bounce" />

          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;