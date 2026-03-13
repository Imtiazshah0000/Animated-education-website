import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col footer-about">
          <div className="logo footer-logo">
            <BookOpen className="logo-icon" />
            <span>EduSync</span>
          </div>
          <p className="footer-desc">
            EduSync is a leading platform for modern education, providing students with the skills they need to succeed in the digital age.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><Facebook size={20} /></a>
            <a href="#" className="social-link"><Twitter size={20} /></a>
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#lab">Labs</a></li>
            <li><a href="#students">Students</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Programming</a></li>
            <li><a href="#">IT Skills</a></li>
            <li><a href="#">Data Science</a></li>
            <li><a href="#">Cybersecurity</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-title">Newsletter</h4>
          <p className="newsletter-desc">Subscribe to our newsletter for the latest updates and offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button className="newsletter-btn">Join</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} EduSync Education. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
