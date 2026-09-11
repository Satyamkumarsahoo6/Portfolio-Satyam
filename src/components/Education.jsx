import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            My formal engineering education and foundational science studies.
          </p>
        </div>

        <div className="timeline-container">
          {EDUCATION_DATA.map((item) => (
            <div key={item.id} className="timeline-item" data-reveal>
              <div className="timeline-marker"></div>
              <div className="card-spotlight timeline-card">
                <div className="timeline-meta">
                  <h3 className="timeline-role">{item.degree}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-company">{item.institution}</div>
                <p className="timeline-description">
                  {item.field} • <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{item.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
