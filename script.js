const animatedItems = document.querySelectorAll(
  ".card, .project, .service, .quote-card, .bio-panel, .about-photo, .gallery-grid img"
);

animatedItems.forEach(item => item.classList.add("fade-in"));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

animatedItems.forEach(item => observer.observe(item));
