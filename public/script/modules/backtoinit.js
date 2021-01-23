export default function backToinit() {
  const buttonBack = document.querySelector('[data-back="button"]');
  buttonBack.addEventListener('click', () => {
    document.location.reload();
  });
}

