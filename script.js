const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navigation.classList.toggle('is-open', !isExpanded);
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.main-navigation a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.setAttribute('aria-current', 'page');
  }
});
