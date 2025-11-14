// src/components/Companies.jsx
import React from 'react';
import googleLogo from "../assets/Google.svg";
import msLogo from "../assets/Microsoft.svg";
import linkdin from "../assets/linkedin.svg";
import vectorEdu from "../assets/VectorEdu.svg";


const companies = [
  { name: "Google", img: googleLogo },
  { name: "Microsoft", img: msLogo },
  { name: "Linkdin", img: linkdin },
  { name: "Vectoredu", img: vectorEdu },
];

export default function Companies() {
  return (
    <section className="company_content" data-aos="fade-up">
      <h3 className="companytitle">Trusted by</h3>
      <div className="company_grid">
        {companies.map((c, i) => (
          <div className="company_logo" key={i}>
            <img className="svgimg" src={c.img} alt={c.name} />
            <div className="logotext">{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
