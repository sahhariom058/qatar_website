import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = '', iconSize = 20 }) => {
  const whatsappLink = "https://wa.me/97430773060?text=Hello%2C%20I%20contacted%20you%20from%20your%20website.";

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, label: 'WhatsApp' },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
          aria-label={social.label}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
