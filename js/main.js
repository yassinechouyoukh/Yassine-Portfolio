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

/* Blob profile: auto-change images */
(function () {
  const images = [
    'assets/images/avatar.jpeg',
    'assets/images/DSC_5698.jpg'
    ];

  const blobCard = document.querySelector('.blob-card');
  if (!blobCard) return;

  const svgImage = blobCard.querySelector('svg image, svg IMAGE');
  if (!svgImage) {
    console.warn('Blob image element not found (expected svg image inside .blob-card).');
    return;
  }

  const parent = svgImage.parentNode; 
  if (!parent) return;

  const attrs = {
    x: svgImage.getAttribute('x') || '0',
    y: svgImage.getAttribute('y') || '0',
    width: svgImage.getAttribute('width') || svgImage.getAttribute('width') || '400',
    height: svgImage.getAttribute('height') || svgImage.getAttribute('height') || '400',
  };

  let idx = 0;

  const initialHref = svgImage.getAttribute('href') || svgImage.getAttributeNS('http://www.w3.org/1999/xlink','href') || '';
  if (initialHref) {
    const found = images.findIndex(p => p === initialHref);
    if (found >= 0) idx = (found + 1) % images.length;
  }

  let interval = 4000;
  let timer = null;
  let paused = false;

  function setHref(el, path) {
    try {
      el.setAttribute('href', path);
    } catch (e) {
      el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
    }
}

function fadeToNext() {
  const nextPath = images[idx % images.length];
  idx = (idx + 1) % images.length;

  const ns = 'http://www.w3.org/2000/svg';
  const newImg = document.createElementNS(ns, 'image');

  newImg.setAttribute('x', attrs.x);
  newImg.setAttribute('y', attrs.y);
  newImg.setAttribute('width', attrs.width);
  newImg.setAttribute('height', attrs.height);

  newImg.style.opacity = '0';
  newImg.style.transition = 'opacity 600ms ease';
  newImg.style.display = 'block';

  setHref(newImg, nextPath);

  parent.appendChild(newImg);

  requestAnimationFrame(() => {
    newImg.style.opacity = '1';
  });

  const cleanUp = () => {
    Array.from(parent.querySelectorAll('image')).forEach(el => {
      if (el !== newImg) {
        try { parent.removeChild(el); } catch(e) {}
      }
    });
  };

  newImg.addEventListener('transitionend', () => {
    setTimeout(cleanUp, 50);
  }, { once: true });

  setTimeout(cleanUp, 1200);
}

function start() {
  stop();
  timer = setInterval(() => { if (!paused) fadeToNext(); }, interval);
}
function stop() { if (timer) { clearInterval(timer); timer = null; } }

blobCard.addEventListener('mouseenter', () => { paused = true; });
blobCard.addEventListener('mouseleave', () => { paused = false; });

blobCard.addEventListener('focusin', () => { paused = true; });
blobCard.addEventListener('focusout', () => { paused = false; });

setTimeout(start, 600);

window.addEventListener('pagehide', stop);
})();
