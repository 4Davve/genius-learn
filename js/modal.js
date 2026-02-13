const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnMobileOpen = document.querySelector('.modal-btn-mobile-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const openModal = () => modal.classList.remove('is-hidden');
const openMobileOpen = () => modal.classList.remove('is-hidden');
const closeModal = () => modal.classList.add('is-hidden');

modalBtnOpen.addEventListener('click', openModal);
modalBtnMobileOpen.addEventListener('click', openModal);
modalBtnClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    closeModal();
  }
});
