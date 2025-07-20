
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const getBlogPostById = (id: string) => {
  const blogPosts = {
    "tentacular-urutz": {
      title: "PA Rental & Live Sets on Tentacular Urutz Party, Italy",
      date: "April 8, 2023",
      readTime: "6 min read",
      author: "Technical Crew",
      category: "Sound",
      imageSrc: "/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png",
      content: [
        {
          type: "paragraph",
          text: "Our team recently had the pleasure of providing sound reinforcement services for the Tentacular Urutz Party, an underground psychedelic trance event held in Italy. This project showcased our custom-built horn-loaded sound system, specifically designed for electronic music events that demand exceptional low-frequency performance and crystal-clear highs."
        },
        {
          type: "heading",
          text: "The Sound System Setup"
        },
        {
          type: "paragraph",
          text: "For this event, we deployed our signature horn-loaded sound system featuring custom-designed speaker cabinets. The main stack included:"
        },
        {
          type: "list",
          items: [
            "4 x Horn-loaded mid-high cabinets with compression drivers",
            "2 x Horn-loaded low-mid cabinets",
            "4 x Folded horn subwoofers for extreme low-frequency response",
            "Professional-grade amplification with digital signal processing",
            "Complete DJ and live performer audio interface setup"
          ]
        },
        {
          type: "paragraph",
          text: "The horn-loaded design offers several advantages for psychedelic trance events, including greater efficiency, better directivity control, and reduced power requirements compared to conventional speaker designs. This results in cleaner sound at high volumes with minimal distortion."
        },
        {
          type: "heading",
          text: "Technical Challenges and Solutions"
        },
        {
          type: "paragraph",
          text: "The venue presented several acoustic challenges, including a relatively low ceiling height and parallel reflective surfaces. Our team addressed these issues by:"
        },
        {
          type: "list",
          items: [
            "Carefully positioning the speakers to minimize unwanted reflections",
            "Implementing precise time alignment between all components",
            "Applying targeted equalization to compensate for room modes",
            "Using strategic acoustic treatment at critical reflection points"
          ]
        },
        {
          type: "paragraph",
          text: "The end result was a sound system that delivered exceptional clarity and impact, with the characteristic psychedelic trance sound that combines punchy, articulate bass with detailed highs that don't fatigue the ears even during long sessions."
        },
        {
          type: "heading",
          text: "Live Performance Support"
        },
        {
          type: "paragraph",
          text: "Beyond providing the sound system, our team also supported several live acts during the event. This included setting up monitoring solutions for performers, managing complex audio routing for hybrid DJ/live setups, and ensuring seamless transitions between acts."
        },
        {
          type: "paragraph",
          text: "The visual aesthetic of the sound system, featuring the distinctive artwork visible in the image, complemented the event's visual design and contributed to the immersive atmosphere that made the Tentacular Urutz Party a standout success."
        },
        {
          type: "heading",
          text: "Client Feedback"
        },
        {
          type: "quote",
          text: "The sound quality at our event exceeded our expectations. The system had incredible presence and depth while maintaining perfect clarity. Even at high volume levels, the sound remained comfortable and engaging. Many attendees commented specifically on the audio quality, which is rare and speaks to the exceptional work done by the technical team.",
          author: "Event Organizer, Tentacular Urutz"
        },
        {
          type: "paragraph",
          text: "We're proud to have contributed to the success of this event and look forward to supporting more underground electronic music events across Europe. If you're planning a similar event and require a sound system that goes beyond conventional rental options, contact us to discuss how we can help create an unforgettable sonic experience for your audience."
        }
      ],
      relatedPosts: ["1", "4", "6"]
    },
    // Placeholder for other blog posts - these would be filled in when creating those specific posts
    "1": { 
      title: "How to Choose the Right Sound System for Your Event",
      date: "January 15, 2023",
      readTime: "5 min read",
      author: "Technical Crew",
      category: "Sound",
      imageSrc: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80",
      content: [],
      relatedPosts: []
    },
    "4": { 
      title: "Setting Up the Perfect Festival Sound",
      date: "April 5, 2023",
      readTime: "8 min read",
      author: "Alex Thompson",
      category: "Sound",
      imageSrc: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80",
      content: [],
      relatedPosts: []
    },
    "6": { 
      title: "The Technical Rider: What Event Organizers Need to Know",
      date: "June 30, 2023",
      readTime: "9 min read",
      author: "Michael Stevens",
      category: "Technical",
      imageSrc: "https://images.unsplash.com/photo-1608749333098-a1783ca4b4bf?auto=format&fit=crop&q=80",
      content: [],
      relatedPosts: []
    }
  };
  
  return blogPosts[id as keyof typeof blogPosts];
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 px-6 md:px-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Blog post not found</h1>
        <Link to="/blog" className="text-psyco-green-DEFAULT hover:text-psyco-green-light">
          Return to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>
      </div>
      
      {/* Article header */}
      <article className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-psyco-green-DEFAULT px-3 py-1 text-xs font-medium text-white rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-400 gap-4 md:gap-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>
        
        {/* Featured image */}
        <div className="mb-10 rounded-lg overflow-hidden">
          <img 
            src={post.imageSrc} 
            alt={post.title} 
            className="w-full h-auto"
          />
        </div>
        
        {/* Article content */}
        <div className="prose prose-invert max-w-none">
          {post.content.map((section, index) => {
            if (section.type === "paragraph") {
              return <p key={index} className="text-gray-300 mb-6">{section.text}</p>;
            } else if (section.type === "heading") {
              return <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">{section.text}</h2>;
            } else if (section.type === "list") {
              return (
                <ul key={index} className="list-disc pl-6 mb-6 text-gray-300">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{item}</li>
                  ))}
                </ul>
              );
            } else if (section.type === "quote") {
              return (
                <blockquote key={index} className="border-l-4 border-psyco-green-DEFAULT pl-4 italic my-6">
                  <p className="text-gray-300 mb-2">"{section.text}"</p>
                  {section.author && (
                    <footer className="text-sm text-gray-400">— {section.author}</footer>
                  )}
                </blockquote>
              );
            }
            return null;
          })}
        </div>
        
        {/* Share buttons */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex items-center">
            <span className="text-gray-400 mr-4">Share this article:</span>
            <div className="flex space-x-3">
              <button className="text-gray-400 hover:text-psyco-green-DEFAULT transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedId) => {
                const relatedPost = getBlogPostById(relatedId);
                if (!relatedPost) return null;
                
                return (
                  <div key={relatedId} className="glassmorphism overflow-hidden card-hover">
                    <Link to={`/blog/${relatedId}`} className="block">
                      <div className="p-6">
                        <h4 className="text-lg font-medium text-white mb-2 hover:text-psyco-green-light transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogDetail;
