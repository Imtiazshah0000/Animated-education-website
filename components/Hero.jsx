import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content reveal active">
          <span className="hero-tag">Welcome to EduSync</span>
          <h1 className="hero-title">
            Learn <span className="gradient-text">Modern Skills</span> <br />
            for the Future
          </h1>
          <p className="hero-description">
            Empower yourself with high-demand skills in web development, programming, and IT. 
            Join thousands of students and start your journey today with our expert-led courses.
          </p>
          <div className="hero-actions">
            <button className="enroll-btn-large">
              Enroll Now <ArrowRight size={20} />
            </button>
            <button className="watch-btn">
              <div className="play-icon">
                <Play size={20} fill="currentColor" />
              </div>
              Watch Video
            </button>
          </div>
        </div>
        <div className="hero-image reveal active">
          <div className="image-wrapper">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Students learning" />
             <div className="floating-card card-1">
                <span>500+ Courses</span>
             </div>
             <div className="floating-card card-2">
                <span>Expert Mentors</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
