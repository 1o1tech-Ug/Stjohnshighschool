 
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

  
  const animatedElements = document.querySelectorAll('.animate-slide');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  animatedElements.forEach(el => observer.observe(el));


  
