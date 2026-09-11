import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">Learning &amp; Credentials</span>
          <h2 className="section-title">
            Domain <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Specialized training completed to strengthen technical foundations and problem-solving abilities.
          </p>
        </div>

        <div className="skills-wrapper">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div key={cert.id} className="card-spotlight skill-category-card" data-reveal>
              <div className="skill-category-header">
                <div className="skill-icon-wrap">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="skill-category-title" style={{ fontSize: '1.2rem' }}>{cert.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{cert.category}</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
