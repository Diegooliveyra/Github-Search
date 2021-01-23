import createProfile from './create-profile.js';

export default async function userFetch(url) {
  const createNewProfile = createProfile
  try {
    const responseUser = await fetch(url);
    this.jsonUser = await responseUser.json();
    const responseStar = await fetch(`${url}/starred`);
    this.jsonStar = await responseStar.json();
    this.totalStar = this.jsonStar.length;
    createNewProfile(this.jsonUser, this.totalStar);
  } catch (error) {
    console.log('Usuario não encontrado', error);
  }
}