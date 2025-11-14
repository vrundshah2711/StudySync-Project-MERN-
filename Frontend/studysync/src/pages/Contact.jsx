import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../assets/contact.svg";
import api from "../api/axios"; // ✅ connect to backend

export default function Contact() {
  // 🔹 Form states
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await api.post("/api/contact", form);
      setStatus(res.data?.message || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" }); // clear form
    } catch (err) {
      console.error(err);
      setStatus(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact_container" data-aos="fade-up">
      <div className="contact_left">
        <h2 className="contact_title">
          Get in <span>Touch</span>
        </h2>
        <p className="contact_desc">
          Have any questions, feedback, or collaboration ideas?
          <br />
          Fill out the form below — we’d love to hear from you.
        </p>

        {/* ✅ Added backend connection */}
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="send_btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ✅ Status message */}
        {status && (
          <p
            className="status_message"
            style={{
              marginTop: "1rem",
              color: status.includes("success") ? "green" : "#2563eb",
            }}
          >
            {status}
          </p>
        )}
      </div>

      <div className="contact_right">
        <img
          src={contactImg}
          alt="Contact illustration"
          className="contact_image"
        />
        <div className="contact_details">
          <p>📍 Ahmedabad, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@studysync.com</p>
        </div>
      </div>
    </section>
  );
}
