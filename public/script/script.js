import GetUser from './modules/get-user.js';

const newUser = new GetUser('.search__input', '[data-search="name"]');
newUser.init();


