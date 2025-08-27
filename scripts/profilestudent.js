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
});
