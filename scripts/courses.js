window.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('userLogged'));

  if (!user) {
    window.location.href = '../index.html';
    return;
  }

  document.querySelector('.username').innerHTML = user.fullName
    .split(' ')
    .slice(0, 2)
    .join('<br>');

  document.querySelector('.profilePic').style.backgroundImage = `url('${user.avatar}')`;
  document.querySelector('.dropdown-avatar').style.backgroundImage = `url('${user.avatar}')`;
  document.getElementById('fullName').textContent = user.fullName;

  const profileButton = document.getElementById('profileButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  profileButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  window.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });

  const coursesContainer = document.getElementById('coursesContainer');

  fetch("https://68ab8a067a0bbe92cbb7bcc5.mockapi.io/users")
    .then(res => res.json())
    .then(data => {

      const courses = data.filter(item => item.slug);

      coursesContainer.innerHTML = "";

      courses.forEach(course => {
        const courseEl = document.createElement("div");
        courseEl.classList.add("coursesFrames");

        courseEl.innerHTML = `
          <div class="imgContainer">
            <img src="${course.thumbnail}" alt="${course.title}" style="width:5vw;">
          </div>
          <div class="things1">
            <p class="courseTittle">${course.title}</p>
          </div>
          <div class="courseLine"></div>
          <div class="forwardInfo">
            <p class="textInfo">${course.overview}</p>
          </div>
          <div class="things2_1">
            <button class="moreInfo">
              <p class="moreInfoText">More Info</p>
            </button>
            <a href="./infoCourses.html?slug=${course.slug}">
              <button class="enrollNow">
                <p class="enrollNowText">${course.cta}</p>
              </button>
            </a>
          </div>
        `;

        coursesContainer.appendChild(courseEl);
      });
    })
    .catch(err => console.error("Error cargando cursos:", err));
});
