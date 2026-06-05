const menu = document.getElementById('mobile-menu');
const hamburger = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.mobile-menu-close');
const navLinks = document.querySelectorAll('.mobile-nav-links a');

function openMenu() {
  menu.style.transform = 'translateX(0)';
  menu.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';

  // backdrop
  if (!document.getElementById('menu-backdrop')) {
    const bd = document.createElement('div');
    bd.id = 'menu-backdrop';
    bd.style.cssText = 'position:fixed;inset:0;background:rgba(5,10,20,0.7);backdrop-filter:blur(4px);z-index:199;';
    bd.addEventListener('click', closeMenu);
    document.body.appendChild(bd);
  }
}

function closeMenu() {
  menu.style.transform = 'translateX(100%)';
  menu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';

  const bd = document.getElementById('menu-backdrop');
  if (bd) bd.remove();
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

// ESC key closes menu
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});