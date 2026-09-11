import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-credits">
          &copy; 2026 {PROFILE_DATA.name}. Built with precision, performance &amp; modern React.
        </div>
        <button
          id="back-to-top-btn"
          className="back-to-top-btn"
          aria-label="Back to Top"
          onClick={handleScrollToTop}
        >
          <span>Back to Top</span>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}
