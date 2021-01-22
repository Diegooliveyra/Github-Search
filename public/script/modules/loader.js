export default function loader() {
  const profileSection = document.querySelector('.user');
  const footer = document.querySelector('.footer');
  const repositorySection = document.querySelector('.repositories');
  const loader = document.querySelector('[data-loader]');
  loader.classList.remove('hidden');
  setTimeout(() => {
    loader.classList.add('hidden');
    footer.classList.add('active');
    profileSection.classList.add('active');
    repositorySection.classList.add('active');
  }, 2000);
}
