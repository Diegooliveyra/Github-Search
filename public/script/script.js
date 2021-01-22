import GetUser from './modules/get-user.js';

const newUser = new GetUser('.search__input', '[data-search="name"]');
newUser.init();

function backToinit() {
  const buttonBack = document.querySelector('[data-back="button"]');
  buttonBack.addEventListener('click', () => {
    document.location.reload();
  });
}

backToinit();
