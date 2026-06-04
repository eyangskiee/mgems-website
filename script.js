// MGEMS Website - Scroll Animations & Gallery Visibility

document.addEventListener('DOMContentLoaded', function() {
  
  // Gallery card animation on scroll
  const galleryCards = document.querySelectorAll('.gallery-card');
  
  function checkVisibility() {
    galleryCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      if (isVisible) {
        card.classList.add('visible');
      }
    });
  }
  
  // Initial check
  checkVisibility();
  
  // Check on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
});