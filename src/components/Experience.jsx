import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">Career Path</span>
          <h2 className="section-title">
            Work Experience &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building production-grade software.
          </p>
        </div>

        <div className="timeline-container">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.id} className="timeline-item" data-reveal>
              <div className="timeline-marker"></div>
              <div className="card-spotlight timeline-card">
                <div className="timeline-meta">
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
                <ul className="timeline-achievements">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
