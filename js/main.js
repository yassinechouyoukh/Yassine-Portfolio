// SCRIPTS: interactions, reveal, nav active, contact behavior

// 1) Reveal-on-scroll for elements with .fade-in-up
const revealOptions = { root: null, rootMargin: '0px', threshold: 0.12 };
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);

      entry.target.querySelectorAll && entry.target.querySelectorAll('.skill-meter').forEach(m => {
        const span = m.querySelector('span');
        const level = m.getAttribute('data-level') || 0;
        setTimeout(() => { span.style.width = level + '%'; m.classList.add('visible'); }, 120);
      });
    }
  });
}, revealOptions);

document.querySelectorAll('.fade-in-up').forEach(el => revealObserver.observe(el));

document.querySelectorAll('.skill-meter').forEach(m => {
  if (!m.closest('.fade-in-up')) revealObserver.observe(m);
});

// 2) Nav active state (robust)
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section[id], footer[id]');

function onScrollNav() {
  const viewportAnchor = window.pageYOffset + window.innerHeight * 0.35;
  let current = '';

  sections.forEach(s => {
    const top = s.offsetTop;
    if (viewportAnchor >= top) {
      current = s.getAttribute('id') || current;
    }
  });

  navLinks.forEach(a => {
    const href = a.getAttribute('href') || '';

    const isActive = current && href.includes(`#${current}`);
    a.classList.toggle('active', !!isActive);
  });
}

window.addEventListener('scroll', onScrollNav, { passive: true });
window.addEventListener('resize', onScrollNav);
onScrollNav();


// 3) Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// 4) Subtle pointer-driven depth for the hero artwork.
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  heroVisual.addEventListener('pointermove', (event) => {
    if (reduceMotion.matches || event.pointerType === 'touch') return;
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroVisual.style.setProperty('--pointer-x', `${(x * 9).toFixed(2)}deg`);
    heroVisual.style.setProperty('--pointer-y', `${(y * -9).toFixed(2)}deg`);
    heroVisual.style.setProperty('--pointer-shift-x', `${(x * 12).toFixed(1)}px`);
    heroVisual.style.setProperty('--pointer-shift-y', `${(y * 12).toFixed(1)}px`);
  });
  heroVisual.addEventListener('pointerleave', () => {
    heroVisual.style.setProperty('--pointer-x', '0deg');
    heroVisual.style.setProperty('--pointer-y', '0deg');
    heroVisual.style.setProperty('--pointer-shift-x', '0px');
    heroVisual.style.setProperty('--pointer-shift-y', '0px');
  });
}


// 5) Small joy: draggable-ish subtle tilt on profile blob
const blob = document.querySelector('.blob-card');
if (blob) {
  let rect = null;
  blob.addEventListener('mouseenter', () => rect = blob.getBoundingClientRect());
  blob.addEventListener('mousemove', (e) => {
    if (!rect || window.innerWidth < 800) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const rx = (dy * 5).toFixed(2);
    const ry = (dx * -5).toFixed(2);
    const inner = blob.querySelector('.blob-inner');
    if (inner) inner.style.transform = `translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  blob.addEventListener('mouseleave', () => {
    const inner = blob.querySelector('.blob-inner');
    if (inner) inner.style.transform = '';
  });
}

// 6) Accessibility: prefer-reduced-motion respects
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.glow-orb').forEach(g => g.style.animation = 'none');
  document.querySelectorAll('.marquee-track').forEach(m => m.style.animation = 'none');
} 

