import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  CheckCircle2,
  Target,
  Eye,
  Award,
  Shield,
  Heart,
  Star,
  Users,
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    'about.reason1',
    'about.reason2',
    'about.reason3',
    'about.reason4',
  ];

  const values = [
    { icon: Star, key: 'values.excellence', descKey: 'values.excellenceDesc' },
    { icon: Shield, key: 'values.integrity', descKey: 'values.integrityDesc' },
    { icon: Award, key: 'values.reliability', descKey: 'values.reliabilityDesc' },
    { icon: Users, key: 'values.professionalism', descKey: 'values.professionalismDesc' },
    { icon: Heart, key: 'values.satisfaction', descKey: 'values.satisfactionDesc' },
  ];

  return (
    <>
      {/* ABOUT – LIGHT PREMIUM SECTION */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto">

          {/* WHO WE ARE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gold-line mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('about.description')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                {t('about.description2')}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-5">
                {t('about.whyUs')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-medium text-slate-800 text-sm">
                      {t(reason)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-3xl rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Professional Team"
                className="relative w-full h-[420px] object-cover rounded-3xl shadow-xl border border-slate-200"
              />

              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-slate-200 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                    <Users className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">500+</p>
                    <p className="text-sm text-slate-500">Happy Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* STORY – MISSION – VISION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
            {[
              { icon: Award, title: 'story.title', content: 'story.content' },
              { icon: Target, title: 'mission.title', content: 'mission.content' },
              { icon: Eye, title: 'vision.title', content: 'vision.content' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="
                  bg-white p-10 rounded-3xl
                  border border-slate-200
                  shadow-[0_25px_70px_rgba(15,23,42,0.08)]
                  hover:shadow-[0_40px_100px_rgba(15,23,42,0.15)]
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >
                <div className="
                  w-16 h-16 rounded-2xl mb-6
                  bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/5
                  flex items-center justify-center
                  shadow-lg shadow-[#D4AF37]/20
                ">
                  <item.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t(item.title)}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {t(item.content)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES – DARK LUXURY */}
      <section className="py-28 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0A101F]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="w-28 h-1.5 bg-[#D4AF37] mx-auto mb-8 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('values.title')}
            </h2>
            <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="
                  bg-[#1E293B]/80 backdrop-blur-lg
                  rounded-3xl p-10 text-center
                  border border-[#334155]
                  hover:border-[#D4AF37]/50
                  hover:shadow-2xl hover:shadow-[#D4AF37]/20
                  transition-all duration-700
                  hover:-translate-y-4
                "
              >
                <div className="
                  w-24 h-24 mx-auto mb-8 rounded-3xl
                  bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10
                  flex items-center justify-center
                  shadow-xl shadow-[#D4AF37]/20
                ">
                  <value.icon className="w-12 h-12 text-[#D4AF37]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {t(value.key)}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {t(value.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
