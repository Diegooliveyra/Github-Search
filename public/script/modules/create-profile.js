export default function createProfile(userData, userStar) {
  const profileSection = document.querySelector('.user');
  const profileMarkup = `
    <div class="user__avatar">
    <img src= ${userData.avatar_url || '../public/assets/no-found.png'} />
  </div>
  <div class="user__profile">
    <h2>${userData.name || ''}</h2>
    <p>@${userData.login || ''}</p>
    <div class="user__location">
      <div>
      <span class="iconify" data-icon="fa-solid:map-marker-alt" data-inline="false"></span>
      <p>${userData.location || ''}</p>
      </div>
      <div>
      ${
        userData.company
          ? '<span class="iconify" data-icon="ic:baseline-business-center" data-inline="false"></span>'
          : ''
      }
      <p>${userData.company || ''}</p>
      </div>
    </div>
    <div class="user__data">
      <span class="iconify" data-icon="fluent:people-team-28-filled" data-inline="false"></span>
      <p>${userData.followers || 0}</p>
      <span class="iconify" data-icon="fluent:people-team-28-regular" data-inline="false"></span>
      <p>${userData.following || 0}</p>
      <span class="iconify" data-icon="dashicons:star-filled" data-inline="false"></span>
      <p>${userStar || 0}</p>
    </div>
  </div>
  <div class="user__branchs">
    <h3>Total Repositories</h3>
    <div class="user__total-branchs">
      <span class="iconify" data-icon="bx:bx-git-branch" data-inline="false"></span>
      <p>${userData.public_repos || 0}</p>
    </div>
  </div>
  `;
  profileSection.innerHTML = profileMarkup;
}