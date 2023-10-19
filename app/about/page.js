import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stories from '../components/sections/Stories';
import HorizontalLine from '../components/HorizontalLine';
import Experts from '../components/sections/Experts';
import CompanyIntro from '../components/sections/CompanyIntro';
import Contact from '../components/sections/Contact';

export const page = () => {
  return (
    <>
      <Navbar />
      <CompanyIntro />
      <HorizontalLine />
      <Experts />
      <HorizontalLine />
      <Stories />
      <HorizontalLine />
      <Contact />
      <Footer />
    </>
  );
};

export default page;