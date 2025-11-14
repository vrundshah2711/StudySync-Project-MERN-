import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "./Auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      login(res.data.token); // save token & update UI
      setMsg("✅ Login successful!");
      setTimeout(() => navigate("/"), 1000); // redirect to Home after success
    } catch (err) {
      setMsg("❌ " + (err.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div className="auth_container">
      <h2 className="auth_title">Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="auth_form">
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
          Login
        </button>
      </form>

      {msg && <p className="auth_msg">{msg}</p>}

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Don’t have an account?{" "}
        <Link
          to="/register"
          style={{
            color: "var(--primary-color)",
            fontWeight: "600",
            textDecoration: "underline",
          }}
        >
          Register here
        </Link>
      </p>
    </div>
  );
}
