const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    // Stagger interno (fica com cara de designer)
    if (entry.target.classList.contains('about-reveal')) {
      const kids = entry.target.querySelectorAll('[data-stagger]');
      kids.forEach((el, i) => {
        el.style.transitionDelay = `${i * 120}ms`;
        el.classList.add('visible');
      });
    }

    io.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

revealEls.forEach(el => io.observe(el));
