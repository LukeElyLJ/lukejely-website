const animatedItems = document.querySelectorAll(
  ".project-card, .service, .quote-card, .about-img"
);

animatedItems.forEach(item => {
  item.classList.add("fade-in");
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

animatedItems.forEach(item => observer.observe(item));