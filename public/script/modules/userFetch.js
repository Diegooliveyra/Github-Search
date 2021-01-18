export default class Fetch {
  constructor(url) {
    this.url = url;
  }

  async getFetch() {
    const responseGithub = await fetch(this.url);
    const githubJson = await responseGithub.json();
    return githubJson;
  }

  async createUserProfile() {
    const user = await this.getFetch();
    console.log(user);
  }

  async createUserRepository() {
    const repository = await this.getFetch();
    console.log(repository);
  }
}
