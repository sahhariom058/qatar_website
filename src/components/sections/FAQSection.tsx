import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: 'faq.q1', answer: 'faq.a1' },
    { question: 'faq.q2', answer: 'faq.a2' },
    { question: 'faq.q3', answer: 'faq.a3' },
    { question: 'faq.q4', answer: 'faq.a4' },
    { question: 'faq.q5', answer: 'faq.a5' },
    { question: 'faq.q6', answer: 'faq.a6' },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* FAQ + IMAGE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">


          {/* LEFT: FAQ (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden data-[state=open]:border-accent/50 transition-all"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent py-5 hover:no-underline">
                    {t(faq.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {t(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* RIGHT: IMAGE (NEW) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-3xl" />
            <img
              src="/images/faq-right.jpg"
              alt="Cleaning services in Qatar"
              className="relative w-full h-[520px] object-cover rounded-3xl shadow-xl border border-border"

            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
