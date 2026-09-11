const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const form = document.querySelector('#contact-form');
const feedback = document.querySelector('.form-feedback');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const device = document.querySelector('#device').value;
  const message = document.querySelector('#message').value.trim();

  if (!name || !device) {
    feedback.textContent = 'Preencha seu nome e selecione o aparelho.';
    return;
  }

  const text = `Olá! Meu nome é ${name}. Preciso de ajuda com: ${device}. ${message ? `Detalhes: ${message}` : ''}`;
  const whatsappUrl = `https://wa.me/5561995994094?text=${encodeURIComponent(text)}`;
  feedback.textContent = 'Abrindo o WhatsApp...';
  feedback.style.color = '#23835b';
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
