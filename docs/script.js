const revealEls = document.querySelectorAll('.reveal, .reveal-line');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const delay = entry.target.dataset.delay;
    const duration = entry.target.dataset.duration;

    if (delay) {
      entry.target.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    if (duration) {
      entry.target.style.setProperty('--reveal-duration', `${duration}ms`);
    }

    entry.target.classList.add('visible');

    io.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

revealEls.forEach(el => io.observe(el));
