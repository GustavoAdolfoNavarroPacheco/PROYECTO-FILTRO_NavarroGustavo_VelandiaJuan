document.querySelector('.enterButton').addEventListener('click', async (e) => {
  e.preventDefault();

  const errorMessage = document.querySelector('.errorMessage');
  errorMessage.style.display = 'none';
  errorMessage.textContent = '';

  const inputUser = document.querySelector('#username').value.trim().toLowerCase();
  const inputPass = document.querySelector('#password').value;

  if (!inputUser || !inputPass) {
    errorMessage.textContent = 'Por favor, completa usuario/correo y contraseña.';
    errorMessage.style.display = 'block';
    return;
  }

  try {
    const response = await fetch('https://68ab8a067a0bbe92cbb7bcc5.mockapi.io/users');
    if (!response.ok) throw new Error();

    const users = await response.json();

    const foundUser = users.find(user =>
      (user.username.toLowerCase() === inputUser || (user.email && user.email.toLowerCase() === inputUser)) &&
      user.password === inputPass
    );

    if (foundUser) {
      localStorage.setItem('userLogged', JSON.stringify(foundUser));
      window.location.href = './pages/welcome.html';
    } else {
      errorMessage.textContent = 'Usuario o contraseña incorrectos.';
      errorMessage.style.display = 'block';
    }
  } catch {
    errorMessage.textContent = 'Error de conexión, intenta más tarde.';
    errorMessage.style.display = 'block';
  }
});
