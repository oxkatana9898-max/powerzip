const modal = document.getElementById('promoModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');

const closeAction = () => {
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
  });
});

modalClose.addEventListener('click', closeAction);
modalOverlay.addEventListener('click', closeAction);
document.querySelector('.modal__btn').addEventListener('click', closeAction);