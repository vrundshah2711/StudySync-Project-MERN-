// src/components/Features.jsx
import React from "react";
import "../index.css"; // since you use global CSS
import feature1 from "../assets/PersonalizedLearn.svg";
import feature2 from "../assets/IndustryPatner.svg";
import feature3 from "../assets/Analytics.svg";
import feature4 from "../assets/InnovativeTech.svg";
import feature5 from "../assets/Affordability.svg";
import feature6 from "../assets/Analytics.svg";

const features = [
  {
    img: feature1,
    title: "Personalized Learning",
    desc: "Customized courses that fit your goals and pace.",
  },
  {
    img: feature2,
    title: "Expert Mentorship",
    desc: "Learn from industry professionals and mentors.",
  },
  {
    img: feature3,
    title: "Real-World Projects",
    desc: "Build live projects to gain hands-on experience.",
  },
  {
    img: feature4,
    title: "Career Guidance",
    desc: "Get career advice and placement assistance.",
  },
  {
    img: feature5,
    title: "Community Learning",
    desc: "Join a collaborative network of learners worldwide.",
  },
  {
    img: feature6,
    title: "24/7 Support",
    desc: "Our team is here to help you at every step.",
  },
];

export default function Features() {
  return (
    <section className="feature_container" id="features">
      <div className="feature_content">
        <div className="maininfo">
          <h2 className="maintitle">Why Choose StudySync?</h2>
          <p className="maindesc">
            Explore our powerful set of features designed to make your learning
            experience efficient, engaging, and fun.
          </p>
        </div>

        <div className="featuregrid">
          {features.map((feature, index) => (
            <div className="featurecard" key={index}>
              <div className="icon_container">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="feature_svg"
                />
              </div>
              <div className="featureinfo">
                <h3 className="featuretitle">{feature.title}</h3>
                <p className="featuredesc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
