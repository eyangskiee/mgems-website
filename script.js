// ── Scroll-triggered reveal for gallery cards ──────────────────────
const cards = document.querySelectorAll('.gallery-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, parseInt(delay));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// ── Smooth scroll for CTA button ───────────────────────────────────
document.querySelector('.hero-cta').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});