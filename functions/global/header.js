let menu = document.querySelector('nav ul');
let menuIcon = document.querySelector('.menu-icon');

let getProfilePicture = localStorage.getItem('profile-picture');
const profilePictureURL = './images/profile_picture.png'
const file_name = (location.href).substring((location.href).lastIndexOf('/') + 1, (location.href).length - 5);
if (!getProfilePicture) getProfilePicture = profilePictureURL;
if (localStorage.getItem('profile-picture') === 'false') getProfilePicture = profilePictureURL
if (file_name !== 'index') if (!localStorage.getItem('profile-picture')) getProfilePicture = '.' + profilePictureURL; else if (localStorage.getItem('profile-picture') === 'false') getProfilePicture = '.' + profilePictureURL;
document.getElementById('profile-picture').src = getProfilePicture;

function abrirMenu() {
    var ulElement = document.querySelector('nav ul');
    ulElement.classList.toggle('open');

    if (ulElement.classList.contains('open')) {
        var newUlElement = document.createElement('ul');
        ulElem.classList.toggle('open');
        // Configurar o novo elemento <ul>, se necessário

        // Mover os elementos <li> para o novo elemento <ul>
        var liElements = ulElement.querySelectorAll('li');
        liElements.forEach(function(li) {
            newUlElement.appendChild(li);
        });
        
        ulElement.appendChild(newUlElement);
    }
}