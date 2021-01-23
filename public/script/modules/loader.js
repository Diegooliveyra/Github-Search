export default function loader() {
  const header = document.querySelector('.header');
  const profileSection = document.querySelector('.user');
  const footer = document.querySelector('.footer');
  const repositorySection = document.querySelector('.repositories');
  const loading = document.querySelector('[data-loader]');

  loading.classList.remove('hidden');
  setTimeout(() => {
    loading.classList.add('hidden');
    header.classList.add('active');
    footer.classList.add('active');
    profileSection.classList.add('active');
    repositorySection.classList.add('active');
  }, 2000);
}
