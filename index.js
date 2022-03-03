/* eslint-disable no-unused-vars */
function displayMenu() {
  const mobileNavMenu = document.getElementById('mobile-menu');
  const mobileNav = document.getElementById('mobile-nav');
  mobileNavMenu.style.display = 'flex';
  mobileNav.style.display = 'none';
}

function hideMenu() {
  const mobileNavMenu = document.getElementById('mobile-menu');
  const mobileNav = document.getElementById('mobile-nav');
  mobileNavMenu.style.display = 'none';
  mobileNav.style.display = 'block';
}
function displayHomeSection() {
  document.getElementById('home').scrollIntoView({ block: 'start' });
  hideMenu();
}

function displayAboutSection() {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ block: 'start' });
  hideMenu();
}

function displayContactSection() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ block: 'start' });
  hideMenu();
}

const project = {
  img: "url('./assets/images/popup-image.png')",
  imgMobile: "url('./assets/images/img-popup-mobile.png')",
  title: 'Keeping track of hundreds of components',
  skills: ['Codekit', 'GitHub', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
};

document.querySelectorAll('.btn-projects').forEach((btn) => {
  btn.addEventListener('click', () => {
    const hiddenPopupDesktop = document.getElementById('popup');
    document.querySelector('.popup-desktop-image').style.backgroundImage = project.img;
    document.querySelector('.title-popup-desktop').innerHTML = project.title;
    const list = document.querySelector('.popup-badge-list');

    for (let i = 0; i < project.skills.length; i += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(project.skills[i]));
      list.appendChild(li);
    }
    document.querySelector('.popup-desktop-content').innerHTML = project.description;

    hiddenPopupDesktop.classList.remove('hide');
    document.getElementById('container').classList.add('bg-container-popup');
  });
});

document.querySelectorAll('.btn-projects').forEach((btn) => {
  btn.addEventListener('click', () => {
    const hiddenPopupMobile = document.getElementById('popup-mobile');
    document.querySelector('.popup-mobile-image').style.backgroundImage = project.imgMobile;
    document.querySelector('.title-popup-mobile').innerHTML = project.title;
    const list = document.querySelector('.popup-badge-list-mobile');

    for (let i = 0; i < project.skills.length / 2; i += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(project.skills[i]));
      list.appendChild(li);
    }
    document.querySelector('.popup-mobile-content').innerHTML = project.description;

    hiddenPopupMobile.classList.remove('hide');
    document
      .getElementById('container')
      .classList.add('bg-container-popup-mobile');
  });
});

function hidePopup() {
  const hiddenPopup = document.getElementById('popup');
  hiddenPopup.classList.add('hide');
  document.getElementById('container').classList.remove('bg-container-popup');
  document.querySelector('.popup-badge-list').innerHTML = '';
  const hiddenPopupMobile = document.getElementById('popup-mobile');
  hiddenPopupMobile.classList.add('hide');
  document.getElementById('container').classList.remove('bg-container-popup-mobile');
  document.querySelector('.popup-badge-list-mobile').innerHTML = '';
}

function hidePopupMobile() {
  const hiddenPopupMobile = document.getElementById('popup-mobile');
  hiddenPopupMobile.classList.add('hide');
  document.getElementById('container').classList.remove('bg-container-popup-mobile');
  document.querySelector('.popup-badge-list-mobile').innerHTML = '';
  hidePopup();
}

const form = document.getElementById('form');
const emailInput = document.getElementById('email');

function isEmailValid(email) {
  return (/^[a-z\-0-9\.\*\#\$\!\~\%\^\&\-\+\?]+@+[a-z\-0-9]+.+[a-z]$/g.test(email));
}

function checkEmail() {
  let valid = false;
  const email = emailInput.value.trim();

  if (isEmailValid(email)) {
    valid = true;
  } else {
    const error = form.querySelector('small');
    error.textContent = 'Email must be lowercase';
  }

  return valid;
}

form.addEventListener("submit", (e) => {
  const isEmailValid = checkEmail();

  if (!isEmailValid) {
    e.preventDefault();
  }
});
