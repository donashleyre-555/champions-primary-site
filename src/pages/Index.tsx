import React from 'react';
import Hero from './Hero';
import Meditation from './Meditation';
import FibonacciChallenge from './FibonacciChallenge';
import Challenges from './Challenges';
import Newsletter from './Newsletter';
import Contact from './Contact';
import Footer from './Footer';

const Index = () => {
  return (
    <div>
      <Hero />
      <Meditation />
      <FibonacciChallenge />
      <Challenges />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;