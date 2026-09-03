import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, User } from 'lucide-react';

interface ReviewCardProps {
  review: string;
  rating: number;
  index: number;
  name?: string;
  location?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, rating, index, name, location }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-premium p-6 md:p-8"
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-foreground leading-relaxed mb-6">"{review}"</p>

      {/* Customer Info */}
      {(name || location) && (
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          {name && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-5 h-5 text-accent" />
              </div>
              <span className="font-semibold text-foreground">{name}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{location}</span>
            </div>
          )}
        </div>
      )}

      {/* Decorative Element */}
      <div className="mt-4 gold-line" />
    </motion.div>
  );
};

export default ReviewCard;
