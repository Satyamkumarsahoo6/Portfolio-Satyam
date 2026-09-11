/**
 * Contact Form Controller & Toast Notification Manager
 */

class ContactManager {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.nameInput = document.getElementById('user-name');
    this.emailInput = document.getElementById('user-email');
    this.subjectInput = document.getElementById('user-subject');
    this.messageInput = document.getElementById('user-message');
    this.submitBtn = document.getElementById('form-submit-btn');
    this.toastContainer = document.getElementById('toast-container');

    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  validate() {
    let isValid = true;

    // Name Validation
    if (!this.nameInput.value.trim()) {
      this.setError(this.nameInput, 'Name is required');
      isValid = false;
    } else {
      this.clearError(this.nameInput);
    }

    // Email Validation
    if (!this.emailInput.value.trim()) {
      this.setError(this.emailInput, 'Email address is required');
      isValid = false;
    } else if (!this.validateEmail(this.emailInput.value.trim())) {
      this.setError(this.emailInput, 'Please provide a valid email');
      isValid = false;
    } else {
      this.clearError(this.emailInput);
    }

    // Message Validation
    if (!this.messageInput.value.trim()) {
      this.setError(this.messageInput, 'Message cannot be empty');
      isValid = false;
    } else if (this.messageInput.value.trim().length < 10) {
      this.setError(this.messageInput, 'Message should be at least 10 characters');
      isValid = false;
    } else {
      this.clearError(this.messageInput);
    }

    return isValid;
  }

  setError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    formGroup.classList.add('has-error');
    const errorSpan = formGroup.querySelector('.form-error-msg');
    if (errorSpan) errorSpan.textContent = message;
  }

  clearError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    formGroup.classList.remove('has-error');
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validate()) {
      this.showToast('Please fix the errors in the form.', 'error');
      return;
    }

    // Set loading state
    const originalText = this.submitBtn.innerHTML;
    this.submitBtn.disabled = true;
    this.submitBtn.innerHTML = `<span>Sending...</span>`;

    try {
      // Simulate network dispatch
      await new Promise((resolve) => setTimeout(resolve, 1000));

      this.showToast('Message sent successfully! I will get back to you shortly.', 'success');
      this.form.reset();
    } catch (err) {
      this.showToast('Failed to send message. Please try again.', 'error');
    } finally {
      this.submitBtn.disabled = false;
      this.submitBtn.innerHTML = originalText;
    }
  }

  showToast(message, type = 'success') {
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : '⚠'}</span>
      <span>${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    // Trigger reveal
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
}
