import createProfile from './create-profile.js';
import createRepositories from './create-repositories.js';
import loader from './loader.js';

export default class GetUser {
  constructor(btn, inputValue) {
    this.buttonSearch = document.querySelector(btn);
    this.searchPage = document.querySelector('.search');
    this.inputValue = inputValue;
    this.getUserName = this.getUserName.bind(this);
    this.initLoader = loader;
    this.createNewProfile = createProfile;
    this.createRepositories = createRepositories;
  }

  getUserName(e) {
    e.preventDefault();
    this.userName = document.querySelector(this.inputValue).value;
    if (this.userName) {
      this.initLoader();
      this.userFetch();
      this.starFetch();
      this.repositorieFetch();
      this.searchPage.classList.remove('active');
    }
  }

  getUserEvent() {
    this.buttonSearch.addEventListener('submit', this.getUserName);
  }

  async userFetch() {
    try {
      const response = await fetch(`https://api.github.com/users/${this.userName}`);
      this.jsonUser = await response.json();
      this.createNewProfile(this.jsonUser);
    } catch (error) {
      console.log('Usuario não encontrado', error);
    }
  }

  async starFetch() {
    try {
      const response = await fetch(`https://api.github.com/users/${this.userName}/starred`);
      this.jsonStar = await response.json();
      this.totalStar = this.jsonStar.length;
      this.createNewProfile(this.jsonUser, this.totalStar);
    } catch (error) {
      console.log('Usuario não encontrado', error);
    }
  }

  async repositorieFetch() {
    try {
      const response = await fetch(`https://api.github.com/users/${this.userName}/repos`);
      this.jsonRepositorie = await response.json();
      this.createRepositories(this.jsonRepositorie);
    } catch (error) {
      console.log('Repositorio não encontrado', error);
    }
  }

  init() {
    this.getUserEvent();
  }
}
