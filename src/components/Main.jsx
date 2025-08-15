import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Founders from './Founders';
import Technologies from './Technologies';
import Industries from './Industries';
import Footer from './Footer';
import CallToAction from './subpages/CallToAction';
import Testimonials from './Testimonials';
import ProTEGO from './ProTEGO';

const Main = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="block sm:hidden">
        <CallToAction />
      </div>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Founders />
      <Technologies />
      <Industries />
      <ProTEGO />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Main;
