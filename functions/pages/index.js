document.addEventListener('DOMContentLoaded', function() {
  const buttonIns = document.getElementById('buttonIns');
  const popUp = document.getElementById('PopUp');
  /*
  const mainElement = document.body.querySelector('main');
  const headerElement = document.body.querySelector('header');*/

  buttonIns.addEventListener('click', function() {
    console.log('Deu certo');
    popUp.style.display = 'flex';
  });



  const closeButton = document.getElementById('PopUp-Close')

  closeButton.addEventListener('click', function() {
    popUp.style.display = 'none';
  });
});