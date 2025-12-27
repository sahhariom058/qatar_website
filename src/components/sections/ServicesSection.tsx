import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import { 
  Bed, 
  Home, 
  Building2, 
  User, 
  ChefHat, 
  Sofa, 
  Layers, 
  Sparkles, 
  Gem, 
  PartyPopper, 
  UtensilsCrossed, 
  CookingPot,
  Briefcase 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { 
      icon: <Home className="w-7 h-7" />, 
      titleKey: 'service.housekeepingRoom.title',
      descKey: 'service.housekeepingRoom.desc',
      detailsKey: 'service.housekeepingRoom.details',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Bed className="w-7 h-7" />, 
      titleKey: 'service.roomAttendant.title',
      descKey: 'service.roomAttendant.desc',
      detailsKey: 'service.roomAttendant.details',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Building2 className="w-7 h-7" />, 
      titleKey: 'service.officeCleaning.title',
      descKey: 'service.officeCleaning.desc',
      detailsKey: 'service.officeCleaning.details',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <User className="w-7 h-7" />, 
      titleKey: 'service.houseMaid.title',
      descKey: 'service.houseMaid.desc',
      detailsKey: 'service.houseMaid.details',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <ChefHat className="w-7 h-7" />, 
      titleKey: 'service.cooking.title',
      descKey: 'service.cooking.desc',
      detailsKey: 'service.cooking.details',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Sofa className="w-7 h-7" />, 
      titleKey: 'service.sofaCleaning.title',
      descKey: 'service.sofaCleaning.desc',
      detailsKey: 'service.sofaCleaning.details',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Layers className="w-7 h-7" />, 
      titleKey: 'service.carpetCleaning.title',
      descKey: 'service.carpetCleaning.desc',
      detailsKey: 'service.carpetCleaning.details',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Sparkles className="w-7 h-7" />, 
      titleKey: 'service.generalCleaning.title',
      descKey: 'service.generalCleaning.desc',
      detailsKey: 'service.generalCleaning.details',
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Gem className="w-7 h-7" />, 
      titleKey: 'service.marbleStain.title',
      descKey: 'service.marbleStain.desc',
      detailsKey: 'service.marbleStain.details',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <PartyPopper className="w-7 h-7" />, 
      titleKey: 'service.roomDecoration.title',
      descKey: 'service.roomDecoration.desc',
      detailsKey: 'service.roomDecoration.details',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <UtensilsCrossed className="w-7 h-7" />, 
      titleKey: 'service.hotelService.title',
      descKey: 'service.hotelService.desc',
      detailsKey: 'service.hotelService.details',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <CookingPot className="w-7 h-7" />, 
      titleKey: 'service.kitchenHelper.title',
      descKey: 'service.kitchenHelper.desc',
      detailsKey: 'service.kitchenHelper.details',
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Briefcase className="w-7 h-7" />, 
      titleKey: 'service.facilityManagement.title',
      descKey: 'service.facilityManagement.desc',
      detailsKey: 'service.facilityManagement.details',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
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
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              titleKey={service.titleKey}
              descKey={service.descKey}
              detailsKey={service.detailsKey}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
