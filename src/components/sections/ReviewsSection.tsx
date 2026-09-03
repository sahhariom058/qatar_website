import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ReviewCard from '@/components/ReviewCard';

const ReviewsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const reviews = [
    { key: 'review.1', rating: 5, nameEn: 'Ahmed Al-Thani', nameAr: 'أحمد الثاني', location: 'Doha, Qatar' },
    { key: 'review.2', rating: 5, nameEn: 'Sarah Johnson', nameAr: 'سارة جونسون', location: 'West Bay, Qatar' },
    { key: 'review.3', rating: 4, nameEn: 'Mohammed Hassan', nameAr: 'محمد حسن', location: 'Al Wakrah, Qatar' },
    { key: 'review.4', rating: 5, nameEn: 'Fatima Al-Mansouri', nameAr: 'فاطمة المنصوري', location: 'The Pearl, Qatar' },
    { key: 'review.5', rating: 4, nameEn: 'David Wilson', nameAr: 'ديفيد ويلسون', location: 'Lusail, Qatar' },
  ];

  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.key}
              review={t(review.key)}
              rating={review.rating}
              index={index}
              name={language === 'ar' ? review.nameAr : review.nameEn}
              location={review.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
