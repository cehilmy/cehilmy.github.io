const revealEls = document.querySelectorAll('.reveal');
const projectToggles = document.querySelectorAll('.project-toggle');

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

projectToggles.forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = toggle.getAttribute('data-target');
    const project = toggle.closest('[data-project]');

    if (!project || !targetId) return;

    const isOpen = project.classList.contains('is-open');
    const mediaToggle = project.querySelector('.project-media');
    const detailPanel = project.querySelector('.project-detail');

    project.classList.toggle('is-open');
    const expanded = !isOpen;

    if (mediaToggle) {
      mediaToggle.setAttribute('aria-expanded', expanded);
    }

    if (detailPanel) {
      detailPanel.setAttribute('aria-hidden', !expanded);
    }
  });
});
