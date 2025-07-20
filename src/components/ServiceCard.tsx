
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc,
  link,
  className,
  style
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glassmorphism overflow-hidden group card-hover transition-all duration-500",
        className
      )}
      style={style}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent z-10"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20 bg-psyco-black-card p-2 rounded-lg">
          <div className="text-psyco-green-DEFAULT">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-psyco-green-light hover:text-psyco-green-DEFAULT transition-colors duration-300 text-sm font-medium"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
