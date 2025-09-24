    
     // ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (themeToggle) {
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }
  themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

// ===== Loading Screen =====
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (loading) setTimeout(() => loading.classList.add('hidden'), 500);
});

// ===== Smooth Scroll for same-page anchors =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Reveal on Scroll (features/tools) =====
const revealables = document.querySelectorAll('.feature-card, .tool-box');
if (revealables.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealables.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ===== Programs: Level Switcher =====
const levelBtns = document.querySelectorAll('.level-btn');
const levelSections = document.querySelectorAll('.level-section');
if (levelBtns.length && levelSections.length) {
  levelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const level = btn.dataset.level;
      levelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      levelSections.forEach(section => {
        section.classList.toggle('active', section.classList.contains(level));
      });
    });
  });
}

// ===== Contact/Join: Form handlers =====
const joinForm = document.getElementById('join-form');
if (joinForm) {
  joinForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('form-message');
    const data = new FormData(joinForm);
    const student = (data.get('student') || '').toString().trim();
    const age = Number(data.get('age'));
    const email = (data.get('email') || '').toString().trim();
    const program = (data.get('program') || '').toString().trim();

    if (!student || !email || !program || !(age >= 8 && age <= 15)) {
      msg.textContent = 'Please complete all fields (age must be 8–15).';
      msg.style.color = '#b91c1c';
      return;
    }
    msg.textContent = 'Thanks! Your enrollment request has been received.';
    msg.style.color = '#065f46';
    joinForm.reset();
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('contact-message');
    const data = new FormData(contactForm);
    const name = (data.get('name') || '').toString().trim();
    const contactEmail = (data.get('contactEmail') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !contactEmail || !message) {
      msg.textContent = 'Please fill out your name, email, and message.';
      msg.style.color = '#b91c1c';
      return;
    }
    msg.textContent = 'Message sent! We will reply soon.';
    msg.style.color = '#065f46';
    contactForm.reset();
  });
}
