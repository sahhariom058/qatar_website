import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
      style={{ boxShadow: '0 4px 20px -4px hsla(43, 74%, 49%, 0.15)' }}
    >
      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <span className="font-bold text-foreground text-lg mb-2">{title}</span>
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
};

export default ValueCard;
