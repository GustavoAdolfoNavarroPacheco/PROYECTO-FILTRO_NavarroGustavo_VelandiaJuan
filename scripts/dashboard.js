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

  if (user.role === 'student' && Array.isArray(user.progress) && user.progress.length > 0) {
    const progressData = user.progress[0];

    const unityPercentage = document.querySelector('.things1 .coursePercentage');
    if (unityPercentage) unityPercentage.textContent = progressData.cursoUnity + '%';

    const nodejsPercentage = document.querySelector('.things2 .coursePercentage');
    if (nodejsPercentage) nodejsPercentage.textContent = progressData.cursoNode + '%';

    const jsPercentage = document.querySelector('.things3 .coursePercentage');
    if (jsPercentage) jsPercentage.textContent = progressData.cursoJava + '%';

    const unrealPercentage = document.querySelector('.things4 .coursePercentage');
    if (unrealPercentage) unrealPercentage.textContent = progressData.cursoUnreal + '%';

    const gameDesignPercentage = document.querySelector('.things5 .coursePercentage');
    if (gameDesignPercentage) gameDesignPercentage.textContent = progressData.cursoGameDesign + '%';

    const apiDevPercentage = document.querySelector('.things6 .coursePercentage');
    if (apiDevPercentage) apiDevPercentage.textContent = progressData.cursoAPI + '%';

    const databaseDesignPercentage = document.querySelector('.things7 .coursePercentage');
    if (databaseDesignPercentage) databaseDesignPercentage.textContent = progressData.cursoDatabase + '%';

    const reactMasteryPercentage = document.querySelector('.things8 .coursePercentage');
    if (reactMasteryPercentage) reactMasteryPercentage.textContent = progressData.cursoReact + '%';

   
    const totalProgress = (
      parseInt(progressData.cursoUnity) +
      parseInt(progressData.cursoNode) +
      parseInt(progressData.cursoJava) +
      parseInt(progressData.cursoUnreal) +
      parseInt(progressData.cursoGameDesign) +
      parseInt(progressData.cursoAPI) +
      parseInt(progressData.cursoDatabase) +
      parseInt(progressData.cursoReact)
    ) / 8;

    const overallProgressElement = document.querySelector('.frame3 .pendingAssignmentsNumber');
    if (overallProgressElement) overallProgressElement.textContent = totalProgress + '%';
  }
});
