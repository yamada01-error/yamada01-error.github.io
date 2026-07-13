const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item');
const wipe = document.querySelector('.wipe-slash');

function goTo(id){
  wipe.classList.remove('active');
  void wipe.offsetWidth;
  wipe.classList.add('active');
  setTimeout(() => {
    pages.forEach(p => p.classList.toggle('active', p.id === id));
    navItems.forEach(n => n.classList.toggle('active', n.dataset.target === id));
    window.scrollTo(0,0);
  }, 300);
}

navItems.forEach(n => n.addEventListener('click', () => goTo(n.dataset.target)));
