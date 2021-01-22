import createProfile from './create-profile.js';
import createRepositories from './create-repositories.js'
import loader from './loader.js';

export default class GetUser {
  constructor(btn, inputValue) {
    this.buttonSearch = document.querySelector(btn);
    this.searchPage = document.querySelector('.search');
    this.inputValue = inputValue;
    this.getUserName = this.getUserName.bind(this);
    this.initLoader = loader;
    this.createNewProfile = createProfile;
    this.createRepositories = createRepositories
  }

  getUserName() {
    this.userName = document.querySelector(this.inputValue).value;
    if (this.userName) {
      this.initLoader()
      this.userFetch();
      this.starFetch();
      this.repositorieFetch();
      this.searchPage.classList.remove('active');
    }
  }

  getUserEvent() {
    this.buttonSearch.addEventListener('click', this.getUserName);
  }

  async userFetch() {
    const response = await fetch(`https://api.github.com/users/${this.userName}`);
    this.jsonUser = await response.json();
    this.createNewProfile(this.jsonUser)
  }

  async starFetch() {
    const response = await fetch(`https://api.github.com/users/${this.userName}/starred`);
    this.jsonStar = await response.json();
    this.totalStar = this.jsonStar.length;
    this.createNewProfile(this.jsonUser, this.totalStar)
  }

  async repositorieFetch() {
    const response = await fetch(`https://api.github.com/users/${this.userName}/repos`);
    this.jsonRepositorie = await response.json();
    this.createRepositories(this.jsonRepositorie);
  }

  backToinit() {
    const buttonBack = document.querySelector('[data-back="button"]');
    buttonBack.addEventListener('click', () => {
      document.location.reload();
    });
  }

  init() {
    this.getUserEvent();
    this.backToinit();
  }
}
