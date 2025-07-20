
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const References = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Featured Project */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Some of our most memorable sound and lighting installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glassmorphism p-1 h-full animate-fade-in">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
                  alt="Summer Music Festival"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Festival
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Summer Music Festival 2023</h3>
                  <p className="text-gray-300 mb-4">Complete sound system and dynamic lighting setup for the main stage, serving an audience of 15,000 people.</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-100">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80"
                  alt="Corporate Gala"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Corporate
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">TechCorp Annual Gala</h3>
                  <p className="text-gray-300 mb-4">Custom lighting design incorporating brand colors and theme elements, with pristine audio for presentations and live music.</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-200">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="/lovable-uploads/48e75083-18aa-4df9-bc91-8515485aa465.png"
                  alt="Monegros Festival 2024"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-psyco-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2 self-start">
                    Festival
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Monegros Festival 2024 - Industry City PA</h3>
                  <p className="text-gray-300 mb-4">Professional PA system installation providing crystal-clear sound coverage for the entire Industry City Stage in collaboration with KWS and UF.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;
