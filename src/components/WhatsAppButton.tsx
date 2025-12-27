import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const whatsappNumbers = [
    { number: '+974 30773060', display: '+974 30773060' },
  ];

  const defaultMessage = encodeURIComponent(t('cta.whatsappMessage'));

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white"
          aria-label="WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 md:w-7 md:h-7" />
          ) : (
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          )}
        </button>
      </div>

      {/* WhatsApp Options Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bottom-24 left-6 md:bottom-28 md:left-6"
          >
            <div className="bg-card rounded-xl shadow-premium-lg border border-border p-4 min-w-[220px]">
              <p className="text-sm font-medium text-foreground mb-3">
                {t('contact.whatsapp')}
              </p>
              <div className="flex flex-col gap-2">
                {whatsappNumbers.map((item) => (
                  <a
                    key={item.number}
                    href={`https://wa.me/${item.number.replace(/\s/g, '').replace('+', '')}?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
