/* =============================================
   FLOATING PARTICLES
   ============================================= */
const container = document.getElementById('particles');

for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    animation-duration: ${8 + Math.random() * 14}s;
    animation-delay: ${Math.random() * 10}s;
    width: ${Math.random() > 0.7 ? 3 : 2}px;
    height: ${Math.random() > 0.7 ? 3 : 2}px;
  `;
  container.appendChild(p);
}

/* =============================================
   CUSTOM CURSOR
   ============================================= */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  ring.style.left   = e.clientX + 'px';
  ring.style.top    = e.clientY + 'px';
});

document.querySelectorAll('a, button, .tool-chip').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('expand'));
  el.addEventListener('mouseleave', () => ring.classList.remove('expand'));
});

/* =============================================
   NAVBAR — SCROLL EFFECT
   ============================================= */
const navbar   = document.getElementById('navbar');
const scrollUp = document.getElementById('scrollUp');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  scrollUp.classList.toggle('active', window.scrollY > 500);
});

/* =============================================
   REVEAL ON SCROLL
   ============================================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================
   TYPING ANIMATION — HERO BADGE
   ============================================= */
const badgeTexts = [
  "✦ Web Developer",
  "✦ Graphic Designer",
  "✦ UI/UX Enthusiast",
  "✦ Frontend Engineer",
];

let bIdx       = 0;
let cIdx       = 0;
let isDeleting = false;
const badgeEl  = document.getElementById('badgeText');

function typeBadge() {
  const current = badgeTexts[bIdx];

  if (!isDeleting) {
    // Mengetik
    badgeEl.textContent = current.slice(0, ++cIdx);
    if (cIdx === current.length) {
      isDeleting = true;
      setTimeout(typeBadge, 1800); // jeda sebelum mulai hapus
      return;
    }
  } else {
    // Menghapus
    badgeEl.textContent = current.slice(0, --cIdx);
    if (cIdx === 0) {
      isDeleting = false;
      bIdx = (bIdx + 1) % badgeTexts.length; // ke teks berikutnya
    }
  }

  setTimeout(typeBadge, isDeleting ? 50 : 90);
}

typeBadge();
