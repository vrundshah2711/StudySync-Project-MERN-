// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home(){
  return (
    <main>
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
