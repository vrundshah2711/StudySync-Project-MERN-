import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form);
      if (res.data.success) {
        setMsg("✅ Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMsg("⚠️ " + res.data.message);
      }
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="auth_container">
      <h2 className="auth_title">Create Your Account</h2>

      <form onSubmit={handleSubmit} className="auth_form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth_btn">
          Register
        </button>
      </form>

      {msg && <p className="auth_msg">{msg}</p>}

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "var(--primary-color)",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Login here
        </Link>
      </p>
    </div>
  );
}
