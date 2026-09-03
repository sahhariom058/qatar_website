import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  detailsKey: string;
  image?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleKey, descKey, detailsKey, image, index }) => {
  const { t } = useLanguage();

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in your ${t(titleKey)} service. Please share more details.`
  );

  // Parse details into bullet points
  const details = t(detailsKey).split('•').filter(d => d.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="card-premium overflow-hidden flex flex-col h-full group"
    >
      {/* Image - Clear and visible, no dark overlay */}
      {image && (
        <div
  className={`relative overflow-hidden rounded-t-xl ${
    index === 12 ? "h-80" : "h-48"
  }`}
>

          <img
            src={image}
            alt={t(titleKey)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-100"
          />
          <div className="absolute bottom-4 left-4">
         <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black shadow-lg dark:ring-2 dark:ring-yellow-300">

              {icon}
            </div>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
  className={`text-lg md:text-xl font-bold text-foreground mb-3 ${
    index === 12 ? "text-center" : ""
  }`}
>

          {t(titleKey)}
        </h3>

        {/* Description */}
        <p
  className={`text-muted-foreground text-sm mb-4 leading-relaxed ${
    index === 12 ? "text-center" : ""
  }`}
>

          {t(descKey)}
        </p>

        {/* Details as bullets */}
        <ul
  className={`text-sm text-foreground/70 mb-6 flex-grow ${
    index === 12
      ? "mx-auto max-w-lg grid grid-cols-2 gap-x-8 gap-y-2 text-left"
      : "space-y-1"
  }`}
>



          {details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2">
            <span className="text-accent mt-1 text-lg">•</span>


              <span>{detail.trim()}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={`https://wa.me/97430773060?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 btn-gold px-4 py-3 rounded-lg text-sm font-semibold w-full mt-auto"
        >
          <Phone className="w-4 h-4" />
          <span>{t('services.bookNow')}</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
