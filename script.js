const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');
const hero = document.getElementById('hero');

const toggleNav = () => {
  navLinks.classList.toggle('open');
  const expanded = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-expanded', expanded.toString());
};

navToggle?.addEventListener('click', toggleNav);
navLinks?.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const setNavbarState = () => {
  const threshold = hero?.offsetHeight || 100;
  if (window.scrollY > threshold - 80) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', setNavbarState);
window.addEventListener('load', setNavbarState);

const revealElements = () => {
  const headers = document.querySelectorAll('.section-header');
  const contents = document.querySelectorAll('.section-content');

  const createObserver = (elements, delayIncrement = 0) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * delayIncrement);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    elements.forEach((el) => observer.observe(el));
  };

  createObserver(headers, 120);
  createObserver(contents, 120);
};

window.addEventListener('DOMContentLoaded', revealElements);
