import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import PersonalLocker from "@/components/PersonalLocker";
import CultureCore from "@/components/CultureCore";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Challenges />
      <PersonalLocker />
      <CultureCore />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Index;
