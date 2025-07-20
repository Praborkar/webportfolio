import React, { useEffect } from "react";
import { Volume2, Lightbulb, Music2, Speaker, Mic, MonitorSpeaker, Wrench, Video, Film, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "sound",
      icon: <Volume2 size={32} />,
      title: "Sound System",
      description: "Professional sound setups tailored to your venue and event size. From intimate gatherings to large festival spaces, we provide crystal-clear audio with expert setup and operation.",
      image: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      features: [
        "6x Funktion One Res E4",
        "4x Martin Audio Bass Bin 215",
        "8x KWS Pi-Horn sub",
        "powered by 5x Labgruppen PLM 20000Q",
        "complete cabling and power management"
      ]
    },
    {
      id: "lighting",
      icon: <Lightbulb size={32} />,
      title: "Lighting Equipment",
      description: "Create the perfect atmosphere with our state-of-the-art lighting equipment. From subtle ambient lighting to dynamic stage shows, we design and operate custom lighting solutions.",
      image: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      features: [
        "Moving head fixtures",
        "LED wash lights",
        "Beam effects",
        "Stage spotlights",
        "Laser systems",
        "DMX controllers and programming"
      ]
    },
    {
      id: "dj",
      icon: <Music2 size={32} />,
      title: "DJ Services",
      description: "Our professional DJs bring the right energy to your event with perfect music selection and mixing. We work with you to create custom playlists that match your event's vibe and audience.",
      image: "https://images.unsplash.com/photo-1516873240891-4bf014728d44?auto=format&fit=crop&q=80",
      features: [
        "Experienced professional DJs",
        "High-quality controllers and equipment",
        "Extensive music library",
        "Custom playlist creation",
        "Seamless mixing",
        "MC services available"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Speaker size={24} />,
      title: "PA Rental",
      description: "Complete PA systems for events of any size."
    },
    {
      icon: <Mic size={24} />,
      title: "Microphone Systems",
      description: "Professional-grade wired and wireless microphones."
    },
    {
      icon: <MonitorSpeaker size={24} />,
      title: "Studio Monitoring",
      description: "High-quality monitoring for recording sessions."
    },
    {
      icon: <Wrench size={24} />,
      title: "Technical Support",
      description: "On-site technicians to ensure everything runs smoothly."
    },
    {
      icon: <Video size={24} />,
      title: "Visual Equipment",
      description: "Projectors, LED screens, and visual mapping solutions."
    },
    {
      icon: <Film size={24} />,
      title: "Special Effects",
      description: "Fog machines, CO2 jets, and other special effects."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional sound and lighting solutions for events of all sizes. From intimate gatherings to large-scale productions, we have the expertise and equipment to make your event exceptional.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Book a Service
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">What We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive sound and lighting solutions for any event
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">{service.id === 'sound' ? 'Our Equipment:' : 'What\'s Included:'}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized equipment and services to enhance your event
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make Your Event Exceptional?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you plan and execute the perfect audio-visual experience for your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/references"
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our References
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
