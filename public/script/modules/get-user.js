import loader from './loader.js';
import userFetch from './user-fetch.js';
import repositorieFetch from './repositories-fetch.js';
import backToinit from './backtoinit.js';

export default class GetUser {
  constructor(btn, inputValue) {
    this.buttonSearch = document.querySelector(btn);
    this.inputValue = inputValue;
    this.searchPage = document.querySelector('.search');
    this.getUserName = this.getUserName.bind(this);
    this.initLoader = loader;
    this.userFetch = userFetch;
    this.repositorieFetch = repositorieFetch;
  }

  getUserName(e) {
    e.preventDefault();
    this.userName = document.querySelector(this.inputValue).value;
    this.url = `https://api.github.com/users/${this.userName}`;
    if (this.userName) {
      this.initLoader();
      this.userFetch(this.url);
      this.repositorieFetch(this.url);
      this.searchPage.classList.remove('active');
    }
  }

  getUserEvent() {
    this.buttonSearch.addEventListener('submit', this.getUserName);
  }

  init() {
    this.getUserEvent();
    backToinit();
  }
}
