import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Founders = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const founderRefs = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Title and divider animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      dividerRef.current,
      { width: 0 },
      {
        width: 96,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Founders cards staggered animation
    gsap.fromTo(
      founderRefs.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Reset refs array
  const setFounderRef = (el) => {
    if (el && !founderRefs.current.includes(el)) {
      founderRefs.current.push(el);
    }
  };

  return (
    <section id="founders" className="py-16 bg-green-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4" ref={titleRef}>
            Our Founders
          </h2>
          <div className="h-1 bg-green-500 mx-auto" ref={dividerRef}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Founder Florence Leong */}
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden" 
            ref={setFounderRef}
          >
            <div className="p-8">
              <div className="w-64 h-64 rounded-full bg-green-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/KosmodeHealth/images/florence-leong.jpg"
                  alt="Florence Leong"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-800 text-center mb-4">Florence Leong</h3>
              <p className="text-gray-700 mb-4">
                Former pharmaceutical executive with extensive experience in organizational and market development within top pharmaceutical multinationals, venture capital investment, and management.
              </p>
              <p className="text-gray-700 mb-4">
                Contributes to Singapore's startup ecosystem as an advisor, mentor, instructor, founder, and angel investor.
              </p>
              <p className="text-gray-700">
                Currently serves as an Industry Advisor in the Singapore Biodesign Program, mentor at NUS Enterprise, and Medtech Track Instructor in the LeanLaunchPad Program.
              </p>
            </div>
          </div>

          {/* Founder "Dr. Huang Dejian */}
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            ref={setFounderRef}
          >
            <div className="p-8">
              <div className="w-64 h-64 rounded-full bg-green-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/KosmodeHealth/images/HUANG-Dejian-1.jpg"
                  alt="Dr. Huang Dejian"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-800 text-center mb-4">Dr. Huang Dejian</h3>
              <p className="text-gray-700 mb-4">
                Associate Professor and Deputy Head of the Department of Food Science Technology at the National University of Singapore.
              </p>
              <p className="text-gray-700 mb-4">
                Recognized as one of the most cited agri-scientists globally in 2014 and 2015 by Thomson Reuters.
              </p>
              <p className="text-gray-700">
                Serves as an Associate Editor for the Journal of Food and has been honored with the Suzhou Industrial Park Talent Program award.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;