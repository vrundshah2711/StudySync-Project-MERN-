import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import studysyncImg from "../assets/StudySyn.svg";
import menu from "../assets/menu.svg";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header_content">
      {/* Logo */}
      <div
        style={{ display: "flex", alignItems: "center", gap: ".5rem", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <img className="logoicon" src={studysyncImg} alt="studysync" />
        <div className="logo_text">StudySync</div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${open ? "open" : ""}`}>
        <Link to="/" className="nav_link" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className="nav_link" onClick={() => setOpen(false)}>About</Link>
        <Link to="/courses" className="nav_link" onClick={() => setOpen(false)}>Courses</Link>
        <Link to="/contact" className="nav_link" onClick={() => setOpen(false)}>Contact</Link>
      </nav>

      {/* Right Section (Auth + Theme + Menu) */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {user ? (
          <>
            <span className="navbar-user">👋 {user.name}</span>
            <button
              onClick={logout}
              className="logout-btn"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-color)",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav_link">
            Login / Register
          </Link>
        )}

        {/* Theme Toggle and Menu Button */}
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <button
          className="menu_button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <img className="menu_icon" src={menu} alt="menu" />
        </button>
      </div>
    </header>
  );
}
