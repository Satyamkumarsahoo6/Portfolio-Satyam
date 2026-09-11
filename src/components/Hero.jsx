import React, { useState, useEffect } from 'react';
import { PROFILE_DATA, OPPORTUNITY_STATUS } from '../data/portfolioData';

const PHRASES = [
  'Computer Science & Engineering Student',
  'Software Development & Web Enthusiast',
  'AI & Machine Learning Learner',
  'Data Science & Problem Solving'
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timer;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    } else {
      const speed = isDeleting ? 45 : 90;
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const displayedText = PHRASES[phraseIndex].substring(0, charIndex);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text-wrap" data-reveal>
          <div className="hero-greeting internship-badge">
            <span className="status-dot"></span>
            <span>{OPPORTUNITY_STATUS.statusText}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{PROFILE_DATA.name}</span>.<br />
            Building Innovative Solutions.
          </h1>

          <div className="hero-dynamic-role">
            <span id="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="hero-bio">
            {PROFILE_DATA.headline}
          </p>

          <div className="hero-cta-group">
            <a href="#about" className="btn btn-primary">
              <span>Explore Profile</span>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            <a href={`mailto:${PROFILE_DATA.email}`} className="btn btn-secondary resume-btn">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>Email Me</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="code-mockup-card">
            <div className="code-header">
              <div className="code-dots">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <span className="code-title">engineer_profile.ts</span>
            </div>
            <div className="code-body">
              <p><span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">name</span>: <span className="code-string">'{PROFILE_DATA.name}'</span>,</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">role</span>: <span className="code-string">'CSE Student'</span>,</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">careerGoal</span>: <span className="code-string">'{PROFILE_DATA.careerGoal}'</span>,</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">location</span>: <span className="code-string">'{PROFILE_DATA.location}'</span>,</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">coreSkills</span>: [<span className="code-string">'Java'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'DSA'</span>, <span className="code-string">'Web Dev'</span>],</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">interests</span>: [<span className="code-string">'AI'</span>, <span className="code-string">'Machine Learning'</span>, <span className="code-string">'Data Science'</span>],</p>
              <p style={{ paddingLeft: '1.25rem' }}><span className="code-prop">seekingOpportunities</span>: <span className="code-keyword">true</span></p>
              <p>&#125;;</p>
              <p className="code-comment">// Passionate about continuous learning &amp; problem solving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
