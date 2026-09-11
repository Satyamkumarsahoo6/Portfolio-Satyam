import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Contact({ onShowToast, onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      onShowToast('Please fix the errors in the form.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate dispatch
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onShowToast('Message sent successfully! I will get back to you shortly.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      onShowToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Let's Connect &amp; <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Interested in discussing software engineering opportunities, technology, or academic collaborations? Reach out!
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Info */}
          <div className="card-spotlight contact-info-card" data-reveal>
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Feel free to connect via email, GitHub, or LinkedIn. I am always excited to discuss software engineering, AI, and technology projects.
            </p>

            <div className="contact-details-list">
              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="contact-item-val" style={{ wordBreak: 'break-all', color: 'var(--text-primary)' }}>
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-val">{PROFILE_DATA.location}</div>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item-val" style={{ color: 'var(--accent-cyan)' }}>
                    satyam-kumar-sahoo
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-item">
                 <div className="contact-icon-box">
                   <svg fill="currentColor" viewBox="0 0 24 24">
                     <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                   </svg>
                 </div>
                 <div>
                   <div className="contact-item-label">GitHub</div>
                   <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="contact-item-val" style={{ color: 'var(--accent-cyan)' }}>
                     {PROFILE_DATA.githubUsername}
                   </a>
                 </div>
              </div>

              {/* Resume Quick Access */}
              <div className="contact-item">
                <div className="contact-icon-box" style={{ background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)' }}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Curriculum Vitae</div>
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                    <button
                      type="button"
                      onClick={onOpenResume}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        font: 'inherit',
                        color: 'var(--accent-cyan)',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontSize: '0.95rem',
                        fontWeight: 600
                      }}
                    >
                      View Resume PDF
                    </button>
                    <span style={{ color: 'var(--text-muted)' }}>•</span>
                    <a
                      href={PROFILE_DATA.resumeUrl}
                      download="Satyam_Kumar_Sahoo_Resume.pdf"
                      style={{
                        color: 'var(--accent-indigo)',
                        textDecoration: 'underline',
                        fontSize: '0.95rem',
                        fontWeight: 600
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-spotlight contact-form-card" data-reveal>
            <form id="contact-form" noValidate onSubmit={handleSubmit}>
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="user-name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="user-name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="form-error-msg">{errors.name}</span>
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="user-email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="user-email"
                  name="email"
                  className="form-input"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="form-error-msg">{errors.email}</span>
              </div>

              <div className="form-group">
                <label htmlFor="user-subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="user-subject"
                  name="subject"
                  className="form-input"
                  placeholder="Opportunity / Collaboration Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="user-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="user-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <span className="form-error-msg">{errors.message}</span>
              </div>

              <button
                type="submit"
                id="form-submit-btn"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
