
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard = ({
  name,
  position,
  company,
  testimonial,
  rating,
  imageSrc,
  className,
  style
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "glassmorphism p-6 relative card-hover",
        className
      )}
      style={style}
    >
      <div className="absolute top-6 right-6 text-psyco-green-DEFAULT opacity-20">
        <Quote size={48} />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center">
        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-psyco-green-muted flex-shrink-0">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">
            {position}, {company}
          </p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={14}
                className={cn(
                  i < rating ? "text-psyco-green-light fill-psyco-green-light" : "text-gray-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 relative z-10">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
