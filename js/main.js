// ═══════════════════════════════════════
// TYPING EFFECT
// ═══════════════════════════════════════
const roles = [
'Full Stack Developer',
'MERN Stack Developer',
'Competitive Programmer',
'CSE @ NIT Agartala',
'Building Scalable Web Apps'
];
let rIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typedText');

function type() {
  const word = roles[rIdx];
  if (!deleting) {
    el.textContent = word.slice(0, ++cIdx);
    if (cIdx === word.length) {
      deleting = true;
      setTimeout(type, 1600);
      return;
    }
  } else {
    el.textContent = word.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      rIdx = (rIdx + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();

// ═══════════════════════════════════════
// NAV SCROLL + HAMBURGER
// ═══════════════════════════════════════
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ═══════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════
const revealEls = document.querySelectorAll(
  '.project-card, .skill-group, .achieve-card, .edu-card, .cert-card, .contact-card, .stat-card, .about-text p, .section-title, .hero-content > *'
);
revealEls.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => io.observe(el));

// Immediately reveal hero content
document.querySelectorAll('.hero-content > *').forEach((el, i) => {
  setTimeout(() => el.classList.add('visible'), 100 + i * 120);
});
