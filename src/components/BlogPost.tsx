
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageSrc: string;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const BlogPost = ({
  id,
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  imageSrc,
  featured = false,
  className,
  style
}: BlogPostProps) => {
  return (
    <article 
      className={cn(
        "glassmorphism overflow-hidden card-hover",
        featured ? "md:col-span-2" : "",
        className
      )}
      style={style}
    >
      <Link to={`/blog/${id}`}>
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent z-10"></div>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold text-white mb-2 hover:text-psyco-green-light transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-300 mb-4 text-sm line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center text-xs text-gray-400 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center">
            <User className="h-3.5 w-3.5 mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
