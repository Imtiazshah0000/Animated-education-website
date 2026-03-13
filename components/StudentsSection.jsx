import React from 'react';
import { Quote } from 'lucide-react';
import '../styles/StudentsSection.css';

const students = [
  {
    name: 'Sarah Johnson',
    role: 'Full Stack Developer',
    text: 'EduSync changed my life. The curriculum is top-notch and the mentors are incredibly supportive.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300'
  },
  {
    name: 'Emily Chen',
    role: 'Data Scientist',
    text: 'I learned everything I needed to land my dream job in tech. The hands-on projects were invaluable.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300'
  },
  {
    name: 'Jessica Williams',
    role: 'UX Designer',
    text: 'The community at EduSync is amazing. I found a great network of like-minded professionals.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300'
  }
];

const StudentsSection = () => {
  return (
    <section id="students" className="section students-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">What Our <span className="gradient-text">Students Say</span></h2>
          <p className="section-subtitle">Hear from our graduates who have transformed their careers through our programs.</p>
        </div>
        <div className="students-grid">
          {students.map((student, index) => (
            <div key={index} className="student-card reveal">
              <div className="student-header">
                <Quote className="quote-icon" size={32} />
                <img src={student.img} alt={student.name} className="student-img" />
              </div>
              <p className="student-text">{student.text}</p>
              <div className="student-info">
                <h4 className="student-name">{student.name}</h4>
                <p className="student-role">{student.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
