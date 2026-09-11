import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate About Learning &amp; <span className="gradient-text">Problem Solving</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into my background, technical interests, and career ambitions.
          </p>
        </div>

        <div className="card-spotlight about-content-card" data-reveal style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.8' }}>
            {PROFILE_DATA.about.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Location</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{PROFILE_DATA.location}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Career Goal</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>{PROFILE_DATA.careerGoal}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Primary Language Focus</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>Java &amp; Python</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
