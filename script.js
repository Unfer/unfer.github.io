// ナビゲーションのクリックイベント
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const navHeight = document.querySelector('nav').offsetHeight;
    const offsetTop = target.offsetTop - navHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// 制作物のモーダルウィンドウ
const modalToggles = document.querySelectorAll('.modal-toggle');

modalToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const target = document.querySelector(toggle.getAttribute('data-target'));
    target.classList.toggle('modal-active');
  });
});

const modalCloses = document.querySelectorAll('.modal-close');

modalCloses.forEach(close => {
  close.addEventListener('click', () => {
    const target = close.closest('.modal');
    target.classList.remove('modal-active');
  });
});
