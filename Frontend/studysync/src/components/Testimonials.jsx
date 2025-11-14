import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const data = [
  { name: "Priya", text: "Great course!", avatar: avatar1 },
  { name: "Aman", text: "Helped me get placed!", avatar: avatar2 },
  { name: "Raju", text: "Easy to follow.", avatar: avatar3 },
];

export default function Testimonials() {
  return (
    <section className="testimonial_container" id="testimonials" data-aos="fade-up">
      <div className="testimonial_content">
        <div className="testimonial_title">What students say</div>
        <div className="testimonial_grid">
          {data.map((t, i) => (
            <div key={i} className="testimonial_card">
              <div className="testimonial_avatar">
                <img src={t.avatar} alt={`${t.name} avatar`} />
              </div>
              <div className="testimonial_text">{t.text}</div>
              <div className="testimonial_name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
