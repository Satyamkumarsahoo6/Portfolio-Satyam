/**
 * Dynamic Typewriter Controller
 * Smooth role typing and deleting loop
 */

class Typewriter {
  constructor(elementId, phrases, options = {}) {
    this.element = document.getElementById(elementId);
    if (!this.element) return;

    this.phrases = phrases;
    this.loop = options.loop !== undefined ? options.loop : true;
    this.typeSpeed = options.typeSpeed || 90;
    this.deleteSpeed = options.deleteSpeed || 45;
    this.delayBetween = options.delayBetween || 2200;

    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    this.tick();
  }

  tick() {
    const currentPhrase = this.phrases[this.phraseIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.element.textContent = currentPhrase.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.element.textContent = currentPhrase.substring(0, this.charIndex);
    }

    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      speed = this.delayBetween;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      speed = 400;
    }

    setTimeout(() => this.tick(), speed);
  }
}
