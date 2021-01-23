export default function loader() {
  const profileSection = document.querySelector('.user');
  const footer = document.querySelector('.footer');
  const repositorySection = document.querySelector('.repositories');
  const loading = document.querySelector('[data-loader]');
  loading.classList.remove('hidden');
  setTimeout(() => {
    loading.classList.add('hidden');
    footer.classList.add('active');
    profileSection.classList.add('active');
    repositorySection.classList.add('active');
  }, 2000);
}
