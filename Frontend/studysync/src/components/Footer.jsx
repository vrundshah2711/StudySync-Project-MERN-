// src/components/Footer.jsx
import React from "react";
import FaTwitter from "../assets/twitter.svg";
import FaLinkedin from "../assets/linkedin.svg";
import FaMicrosoft from "../assets/Microsoft.svg";
import FaInstagram from "../assets/instagram.svg";
import studySyncIcon from "../assets/StudySyn.svg"; // your favicon path

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer">
        {/* Left side: Logo + tagline with social icons inline */}
        <div className="footer_top">
          <div className="logo_link">
            <img src={studySyncIcon} alt="StudySync Favicon" className="logo_svg" />
            StudySync
          </div>
          <div className="fillertext_social">
            <span className="fillertext">Learn. Build. Grow.</span>
            <div className="social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={FaInstagram} alt="Instagram" className="socialicon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={FaLinkedin} alt="LinkedIn" className="socialicon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={FaTwitter} alt="Twitter" className="socialicon" />
              </a>
              <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
                <img src={FaMicrosoft} alt="Microsoft" className="socialicon" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="footer_grid">
          <div>
            <div className="footer_grid_heading">Product</div>
            <ul className="footer_links_list">
              <li className="footer_link">Features</li>
              <li className="footer_link">Courses</li>
            </ul>
          </div>
          <div>
            <div className="footer_grid_heading">Company</div>
            <ul className="footer_links_list">
              <li className="footer_link">About</li>
              <li className="footer_link">Careers</li>
            </ul>
          </div>
          <div>
            <div className="footer_grid_heading">Support</div>
            <ul className="footer_links_list">
              <li className="footer_link">Contact</li>
              <li className="footer_link">Help</li>
            </ul>
          </div>
          <div>
            <div className="footer_grid_heading">Legal</div>
            <ul className="footer_links_list">
              <li className="footer_link">Privacy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_copyright">
        © {new Date().getFullYear()} StudySync
      </div>
    </footer>
  );
}
