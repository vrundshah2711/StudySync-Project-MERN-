import React, { useState } from "react";
import axios from "axios";
import newsletterImg from "../assets/img.png";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/newsletter", { email });
      setMsg("✅ " + res.data.message);
      setEmail("");
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <section className="newsletter_container" data-aos="fade-up">
      <div className="newsletter_content">
        {/* Left: info */}
        <div className="news_right">
          <h2 className="news_title">Subscribe to our Newsletter</h2>
          <p className="news_desc">
            Stay updated with our latest courses, tips, and insights. Sign up now!
          </p>

          <form onSubmit={handleSubmit} className="news_form">
            <input
              type="email"
              placeholder="Enter your email"
              className="news_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="news_sendbutton">
              Subscribe
            </button>
          </form>

          {msg && (
            <p
              style={{
                marginTop: "0.8rem",
                color: msg.startsWith("✅") ? "green" : "red",
                fontWeight: "500",
              }}
            >
              {msg}
            </p>
          )}

          <p className="Privacypolicy">
            We respect your privacy. Read our{" "}
            <span className="news_link">Privacy Policy</span>.
          </p>
        </div>

        {/* Right: image */}
        <div className="news_left">
          <img src={newsletterImg} alt="Newsletter Banner" />
        </div>
      </div>
    </section>
  );
}
