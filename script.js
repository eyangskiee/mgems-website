<<<<<<< HEAD
// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll-reveal for gallery cards & service cards ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
=======
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
>>>>>>> bf2cf32505166095c1c20454e84f9f109b9c500c
    }
  });
}, { threshold: 0.15 });

<<<<<<< HEAD
document.querySelectorAll('.gallery-card, .service-card').forEach(el => {
  revealObserver.observe(el);
});

// ── Smooth active nav link highlighting ──
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ── Contact form submit simulation ──
function handleContactSubmit(btn) {
  const span = btn.querySelector('span');
  const icon = btn.querySelector('i');
  btn.disabled = true;
  span.textContent = 'Sending...';
  icon.className = 'fas fa-spinner fa-spin';

  setTimeout(() => {
    btn.classList.add('sent');
    span.textContent = 'Message Sent!';
    icon.className = 'fas fa-check';
    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove('sent');
      span.textContent = 'Send Message';
      icon.className = 'fas fa-paper-plane';
    }, 3000);
  }, 1800);
}
=======
cards.forEach(card => observer.observe(card));

// ── Smooth scroll for CTA button ───────────────────────────────────
document.querySelector('.hero-cta').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
>>>>>>> bf2cf32505166095c1c20454e84f9f109b9c500c
