import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function About({ onOpenResume }) {
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
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Primary Languages</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-indigo)' }}>Python, Java, React.js</div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenResume}
                style={{ padding: '0.5rem 1.1rem', fontSize: '0.9rem' }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Resume</span>
              </button>
              <a
                href={PROFILE_DATA.resumeUrl}
                download="Satyam_Kumar_Sahoo_Resume.pdf"
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1.1rem', fontSize: '0.9rem' }}
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
