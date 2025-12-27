import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Target, Eye, Award, Shield, Heart, Star, Users } from 'lucide-react';
import ValueCard from '@/components/ValueCard';

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
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Who We Are - With Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="gold-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {t('about.description')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.description2')}
            </p>

            {/* Why Choose Us */}
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('about.whyUs')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{t(reason)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-2xl transform rotate-3" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional team"
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-lg border border-border/50"
            />
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Story, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-premium p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Award className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('story.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('story.content')}</p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-premium p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('mission.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('mission.content')}</p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-premium p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('vision.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('vision.content')}</p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={value.key}
                icon={value.icon}
                title={t(value.key)}
                description={t(value.descKey)}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
