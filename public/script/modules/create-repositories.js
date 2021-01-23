export default function createRepositories(jsonRepositorie) {
  const repositorySection = document.querySelector('.repositories');

  const listRepository = jsonRepositorie.reduce((acc, repository) => {
    let accumulador = acc;
    accumulador += `<div class="repositories__repositorie">
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
  </div>`;
    return accumulador;
  }, '');

  repositorySection.innerHTML = listRepository;
}
