document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
  
    if (hamburger && navLinks) {
      // Toggle menu on hamburger click
      hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Accessibility
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
      });
  
      // Close menu when clicking on nav links
      navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.classList.remove('menu-open');
          hamburger.setAttribute('aria-expanded', false);
        }
      });
  
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.classList.remove('menu-open');
          hamburger.setAttribute('aria-expanded', false);
        }
      });
  
      // Close menu on ESC key press
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.classList.remove('menu-open');
          hamburger.setAttribute('aria-expanded', false);
        }
      });
    }
  });