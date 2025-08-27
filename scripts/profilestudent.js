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

  document.querySelector('#cuardro2 .inFrame').textContent = user.fullName || 'No disponible';
  document.querySelector('#cuardro4 .inFrame').textContent = user.email || 'No disponible';
  document.querySelector('#cuardro6 .inFrame').textContent = user.phone || 'No disponible';
  document.querySelector('#cuardro8 .inFrame').textContent = user.location || 'No disponible';  
  document.querySelector('#nameContainer .nameUser').textContent = user.fullName || 'No disponible';
  document.querySelector('#roleContainer .role').textContent = user.role || 'No disponible';
  document.querySelector('.imgContainer').style.backgroundImage = `url('${user.avatar}')`;
});
