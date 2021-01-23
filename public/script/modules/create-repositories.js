export default function createRepositories(jsonRepositorie) {
  const repositorySection = document.querySelector('.repositories');
  const listRepository = jsonRepositorie.sort((first, second) => (first.id < second.id ? 1 : -1));

  const repositories = [...listRepository].reduce((acc, repository) => {
    let accumulador = acc;
    accumulador += `<div data-anime="scroll" class="repositories__repositorie">
    <div  class="repositories__content">
      <h2><a href="${repository.svn_url}" target="_blank">${repository.name}</a></h2>
      <p>${repository.description || ''}</p>
    </div>
    <div class="repositories__info">
      <span class="iconify" data-icon="dashicons:star-filled" data-inline="false"></span>
      <p>${repository.stargazers_count}</p>
      <span class="iconify" data-icon="bx:bx-git-branch" data-inline="false"></span>
      <p>${repository.forks}</p>
      <span class="iconify" data-icon="bi:file-earmark-code-fill" data-inline="false"></span>
      <p>${repository.language || ''}</p>
      <a href="${repository.svn_url}" target="_blank">
      <span class="iconify" data-icon="bx:bx-link-external" data-inline="false"></span>
      </a>
    </div>
  </div>`;
    return accumulador;
  }, '');

  repositorySection.innerHTML = repositories;
}
