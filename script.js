// MGEMS Website - Scroll Animations & Gallery Visibility

document.addEventListener('DOMContentLoaded', function() {
  
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
  
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
  
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
