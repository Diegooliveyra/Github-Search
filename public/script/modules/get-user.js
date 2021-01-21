export default class GetUser {
  constructor(btn, inputValue) {
    this.buttonSearch = document.querySelector(btn);
    this.searchPage = document.querySelector('.search');
    this.inputValue = inputValue;
    this.getUserName = this.getUserName.bind(this);
  }

  getUserName() {
    this.loader();
    this.userName = document.querySelector(this.inputValue).value;
    this.userFetch();
    this.starFetch();
    this.repositorieFetch();
    this.searchPage.classList.remove('active');
  }

  getUserEvent() {
    this.buttonSearch.addEventListener('click', this.getUserName);
  }

  async userFetch() {
    const response = await fetch(`https://api.github.com/users/${this.userName}`);
    this.jsonUser = await response.json();
    this.createProfile();
  }

  async starFetch() {
    const response = await fetch(`https://api.github.com/users/${this.userName}/starred`);
    this.jsonStar = await response.json();
    this.totalStar = this.jsonStar.length;
    this.createProfile();
  }

  async repositorieFetch() {
    const response = await fetch(`https://api.github.com/users/${this.userName}/repos`);
    this.jsonRepositorie = await response.json();
    this.createRepositories();
  }

  createProfile() {
    this.profileSection = document.querySelector('.user');
    this.profileSection.classList.add('user');
    const header = document.querySelector('.header');
    const profileMarkup = `
      <div class="user__avatar">
      <img src= ${this.jsonUser.avatar_url} />
    </div>
    <div class="user__profile">
      <h2>${this.jsonUser.name}</h2>
      <p>@${this.jsonUser.login}</p>
      <div class="user__location">
        <span class="iconify" data-icon="fa-solid:map-marker-alt" data-inline="false"></span>
        <p>${this.jsonUser.location}</p>
        ${
  this.jsonUser.company
    ? '<span class="iconify" data-icon="ic:baseline-business-center" data-inline="false"></span>'
    : ''
}
        <p>${this.jsonUser.company || ''}</p>
      </div>
      <div class="user__data">
        <span class="iconify" data-icon="fluent:people-team-28-filled" data-inline="false"></span>
        <p>${this.jsonUser.followers}</p>
        <span class="iconify" data-icon="fluent:people-team-28-regular" data-inline="false"></span>
        <p>${this.jsonUser.following}</p>
        <span class="iconify" data-icon="dashicons:star-filled" data-inline="false"></span>
        <p>${this.totalStar}</p>
      </div>
    </div>
    <div class="user__branchs">
      <h3>Total Repositories</h3>
      <div class="user__total-branchs">
        <span class="iconify" data-icon="bx:bx-git-branch" data-inline="false"></span>
        <p>${this.jsonUser.public_repos}</p>
      </div>
    </div>
    `;
    this.profileSection.innerHTML = profileMarkup;
    header.parentNode.insertBefore(this.profileSection, header.nextSibling);
  }

  createRepositories() {
    this.repositorySection = document.querySelector('.repositories');
    this.jsonRepositorie.forEach((repository) => {
      const repositoryMarkup = `
      <div class="repositories__repositorie">
      <div class="repositories__content">
        <h2>${repository.name}</h2>
        <p>${repository.description || ''}</p>
      </div>
      <div class="repositories__info">
        <span class="iconify" data-icon="dashicons:star-filled" data-inline="false"></span>
        <p>${repository.stargazers_count}</p>
        <span class="iconify" data-icon="bx:bx-git-branch" data-inline="false"></span>
        <p>${repository.forks}</p>
      </div>
    </div>
      `;
      this.repositorySection.innerHTML += repositoryMarkup;
      this.profileSection.parentNode.insertBefore(
        this.repositorySection, this.profileSection.nextSibling
      );
    });
  }

  loader() {
    const loader = document.querySelector("[data-loader]");
    loader.classList.remove("hidden");
    setTimeout(() => {
        loader.classList.add("hidden");
        this.profileSection.classList.add('active');
        this.repositorySection.classList.add('active');
    }, 1000);
  }

  init() {
    this.getUserEvent();
  }
}
