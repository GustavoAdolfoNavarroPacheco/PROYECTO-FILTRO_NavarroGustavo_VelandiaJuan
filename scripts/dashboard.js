window.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('userLogged'));

  if (!user) {
    window.location.href = '../index.html';
    return;
  }

  document.querySelector('.username').innerHTML = user.fullName.split(' ').slice(0, 2).join('<br>');
  document.querySelector('.profilePic').style.backgroundImage = `url('${user.avatar}')`;
});
