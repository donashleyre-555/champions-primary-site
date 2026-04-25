import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Challenges />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Index;
