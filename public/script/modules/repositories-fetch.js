import createRepository from './create-repositories.js';

const createRepositories = createRepository;

export default async function repositorieFetch(url) {
  try {
    const response = await fetch(`${url}/repos`);
    this.jsonRepositorie = await response.json();
    setTimeout(()=>{
      createRepositories(this.jsonRepositorie);
    },1000)
  } catch (error) {
    console.log('Usuario não encontrado', error);
  }
}

