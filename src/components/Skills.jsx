import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'code':
        return (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        );
      case 'brain':
        return (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        );
      case 'users':
        return (
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">Skills &amp; Expertise</span>
          <h2 className="section-title">
            Technical &amp; <span className="gradient-text">Professional Skills</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, domains of interest, and key professional competencies.
          </p>
        </div>

        <div className="skills-wrapper">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="card-spotlight skill-category-card" data-reveal>
              <div className="skill-category-header">
                <div className="skill-icon-wrap">{renderIcon(cat.icon)}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags-group">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
