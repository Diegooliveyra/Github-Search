import Fetch from './modules/userFetch.js';

const userName = document.querySelector('[data-search="name"]').value;

const user = new Fetch(`https://api.github.com/${userName}/diegooliveyra`);
user.createUserProfile();

const repository = new Fetch(`https://api.github.com/${userName}/diegooliveyra/repos`);
repository.createUserRepository();
