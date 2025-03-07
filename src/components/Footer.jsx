import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/Styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <h3 className="footer-title">🚩 श्री भैरव शक्ति जन कल्याण रथ 🚩</h3>
      <h5 className="footer-subtitle">- ज्योतिष परामर्श केन्द्र</h5>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.8001224414022!2d75.79442508872322!3d22.74309513213104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396301e2cce98cc5%3A0xe1d817ea85595bfe!2sSri%20Bhadesar%20Bhairav%20Mandir!5e0!3m2!1sen!2sin!4v1741344202815!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Call-to-Action Button */}
      <div className="cta-container">
        <a
          href="https://maps.google.com/?q=Sri+Bhadesar+Bhairav+Mandir"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Visit Our Office
        </a>
      </div>

      {/* Office Address */}
      <div className="office-address">
        <h4>Our Office Address</h4>
        <p>Sri Bhadesar Bhairav Mandir, Indore, Madhya Pradesh, India</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h4>Contact Us</h4>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <a
          className="instagram"
          href="https://instagram.com/shree_bherav_nath?igshid=ZDdkNTZiNTM="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span>@shree_bherav_nath</span>
        </a>
        <a
          className="youtube"
          href="https://www.youtube.com/@shreebheravnath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
          <span>shree bherav nath</span>
        </a>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* Copyright Notice */}
      <p className="copyright">
        &copy; {new Date().getFullYear()} श्री भैरव शक्ति. All rights reserved.
      </p>
    </footer>
  );
}