import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
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

  const whatsappNumber = '+97430773060';

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-[#E2E8F0] dark:bg-gradient-to-b dark:from-[#0C1A2A] dark:to-[#0A1220]">
      <div className="container mx-auto px-4 md:px-8 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE – ALL CONTENT (UNCHANGED) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#D4AF37] text-[#0A1220] font-bold text-xl flex items-center justify-center">
                  E
                </div>
                <div>
                  <h3 className="font-bold text-lg">EXCITEL</h3>
                  <p className="text-sm text-[#CBD5E1]">Trading & Services</p>
                </div>
              </div>

              <p className="text-sm text-[#CBD5E1]">
                EXCITEL TRADING & SERVICES W.L.L
              </p>
              <p className="text-sm text-[#94A3B8]">
                C.R. No: 101445
              </p>

              <SocialIcons className="mt-4" iconSize={18} />

              {/* Language */}
              <div className="flex items-center gap-2 pt-3">
                <span className="text-sm text-[#CBD5E1]">
                  {language === 'en' ? 'Language:' : 'اللغة:'}
                </span>
                <div className="flex border border-[#475569] rounded-md overflow-hidden">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-xs font-semibold ${
                      language === 'en'
                        ? 'bg-[#D4AF37] text-[#0A1220]'
                        : 'hover:bg-[#1E293B]'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('ar')}
                    className={`px-3 py-1 text-xs font-semibold ${
                      language === 'ar'
                        ? 'bg-[#D4AF37] text-[#0A1220]'
                        : 'hover:bg-[#1E293B]'
                    }`}
                  >
                    AR
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {quickLinks.map(link => (
                  <button
                    key={link.key}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-[#CBD5E1] hover:text-[#D4AF37] text-left"
                  >
                    {t(link.key)}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Information</h4>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1" />
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  Office No: 3, Building No: 17, Street No: 910,<br />
                  Zone No: 7, Doha – Qatar
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#CBD5E1] hover:text-[#D4AF37]"
                >
                  +974 3077 3060
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Email</h4>
              <div className="flex flex-col gap-3">
                {emails.map(email => (
                  <div key={email} className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-[#CBD5E1] hover:text-[#D4AF37]"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-3xl" />
            <img
              src="/images/footer-right.jpg"
              alt="Excitel Trading & Services Qatar"
              className="relative w-full h-[340px] object-cover rounded-3xl shadow-xl border border-white/10"
            />
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#334155] mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#94A3B8]">
            © {new Date().getFullYear()} EXCITEL TRADING & SERVICES W.L.L. All Rights Reserved.
          </p>
          <SocialIcons iconSize={16} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
