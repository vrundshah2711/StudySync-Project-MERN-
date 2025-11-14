// src/pages/About.jsx
import React from "react";
import aboutImg from "../assets/2672292.jpg";
import values from "../assets/values.svg";
import vision from "../assets/vision.svg";
import mission from "../assets/space-shuttle.svg";
import "./About.css";

export default function About() {
  return (
    <section className="about_container" data-aos="fade-up">
      <div className="about_left">
        <h2 className="about_title">About <span>StudySync</span></h2>
        <p className="about_desc">
          StudySync is a digital learning platform designed to bridge the gap
          between students and technology. We aim to make learning more engaging,
          collaborative, and accessible for everyone.
        </p>

        <div className="about_highlights">
          <div className="about_item">
            <img src={mission} alt="Mission" />
            <div>
              <h3>Our Mission</h3>
              <p>To empower learners through interactive education anywhere in the world.</p>
            </div>
          </div>
          <div className="about_item">
            <img src={vision} alt="Vision" />
            <div>
              <h3>Our Vision</h3>
              <p>To build a global community of motivated learners and expert mentors.</p>
            </div>
          </div>
          <div className="about_item">
            <img src={values} alt="Values" />
            <div>
              <h3>Our Values</h3>
              <p>Innovation, inclusivity, and integrity drive everything we do.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_right">
        <img src={aboutImg} alt="About StudySync" className="about_image" />
      </div>
    </section>
  );
}
