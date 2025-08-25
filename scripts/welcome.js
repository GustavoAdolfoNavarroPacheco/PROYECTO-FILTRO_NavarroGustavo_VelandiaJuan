window.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('userLogged'));

  if (!user) {
    window.location.href = '../index.html';
    return;
  }

  document.getElementById('userFullName').textContent = user.fullName;

  const avatarUrl = user.avatar || 'https://i.imgur.com/U3vTGjX.jpeg';
  document.getElementById('userAvatar').style.backgroundImage = `url('${avatarUrl}')`;

  let roleText = 'Usuario Estudiante';

  if (user.role) {
    if (user.role.toLowerCase() === 'admin') roleText = 'Administrador Principal';
    else if (user.role.toLowerCase() === 'teacher') roleText = 'Profesor';
    else if (user.role.toLowerCase() === 'student') roleText = 'Usuario Estudiante';
  }

  document.getElementById('userRole').textContent = roleText;

  setTimeout(() => {
    window.location.href = './dashboard.html';
  }, 3000);
});
