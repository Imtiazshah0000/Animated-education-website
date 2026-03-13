import React from 'react';
import '../styles/Gallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600'
];

const Gallery = () => {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Our <span className="gradient-text">Campus Gallery</span></h2>
          <p className="section-subtitle">Take a visual tour of our facilities, classroom environments, and student life.</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item reveal">
              <img src={img} alt={`Gallery ${index}`} className="gallery-img" />
              <div className="gallery-hover">
                <span className="gallery-zoom">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
