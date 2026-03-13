import React from 'react';
import { Code, Terminal, Monitor, Cpu } from 'lucide-react';
import '../styles/Services.css';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'Learn modern web technologies like React, Node.js, and advanced CSS to build stunning websites.'
  },
  {
    icon: <Terminal size={40} />,
    title: 'Programming Courses',
    description: 'Master languages like Python, JavaScript, and C++ with our comprehensive, project-based curriculum.'
  },
  {
    icon: <Monitor size={40} />,
    title: 'Computer Lab Training',
    description: 'Hands-on experience in our state-of-the-art computer labs with the latest hardware and software.'
  },
  {
    icon: <Cpu size={40} />,
    title: 'IT Skills',
    description: 'Develop essential IT skills including networking, cybersecurity, and cloud computing foundations.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Our <span className="gradient-text">Premium Services</span></h2>
          <p className="section-subtitle">We provide world-class education with a focus on practical skills and industry standards.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a href="#" className="service-link">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
