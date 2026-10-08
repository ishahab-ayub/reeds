const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
reveals.forEach(el => observer.observe(el));

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '82px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 5vw';
  nav.style.background = 'rgba(10,13,16,.97)';
  nav.style.flexDirection = 'column';
  nav.style.gap = '18px';
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) nav.style.display = '';
  });
});
