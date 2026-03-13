import React from 'react';
import '../styles/LabSection.css';

const labs = [
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    title: 'Advanced Computer Lab',
    desc: 'Equipped with high-performance workstations for intensive programming tasks.'
  },
  {
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600',
    title: 'Collaborative Workspace',
    desc: 'Modern environment designed for team projects and collaborative learning.'
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    title: 'Network Operations Center',
    desc: 'Real-world simulations for networking and cybersecurity students.'
  }
];

const LabSection = () => {
  return (
    <section id="lab" className="section lab-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">State-of-the-art <span className="gradient-text">Computer Labs</span></h2>
          <p className="section-subtitle">Experience learning in our modern facilities designed to simulate real-world IT environments.</p>
        </div>
        <div className="lab-grid">
          {labs.map((lab, index) => (
            <div key={index} className="lab-card reveal">
              <div className="lab-image-container">
                <img src={lab.image} alt={lab.title} className="lab-img" />
                <div className="lab-overlay">
                  <h3 className="lab-title">{lab.title}</h3>
                  <p className="lab-desc">{lab.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabSection;
