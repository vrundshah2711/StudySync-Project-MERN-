// src/components/Hero.jsx
import React from 'react';
import { ReactTyped } from "react-typed";
import heroImg from '../assets/hero.jpg'

import { useNavigate } from 'react-router-dom';

export default function Hero(){
  const navigate = useNavigate();
  return (
    <section className="main_section" id="home" data-aos="fade-up">
      <div className="content_left">
        <div className="section_label">Learn Smarter</div>
       <div className="section_title">
  <ReactTyped
    strings={["Build your skills", "Study with mentors", "Crack interviews"]}
    typeSpeed={50}
    backSpeed={40}
    loop
  />
</div>

        <p className="section_desc">StudySync gives structured learning paths for developers.</p>
        <div className="button_group">
          <button className="start_button" onClick={() => navigate('/courses')}>Get Started</button>
          <button className="tour_button" onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})}>Take a Tour</button>
        </div>
      </div>

      <div className="content_right">
        <div className="image_container">
          <img className="sectionimage" src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
}
