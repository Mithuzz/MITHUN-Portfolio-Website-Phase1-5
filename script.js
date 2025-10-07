// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  