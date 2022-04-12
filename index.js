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

const projects = [
  {
    id: 1,
    img: "url('./assets/images/projectXperia.jpg')",
    imgMobile: "url('./assets/images/img-popup-mobile.png')",
    title: 'Random Song Lyrics Generator App',
    skills: ['GitHub', 'Javascript', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
    linkLiveVersion: 'https://www.youtube.com/',
    linkSource: 'https://github.com/fahdrahali/fahdrahali.github.io',
  },
  {
    id: 2,
    img: "url('./assets/images/foss.jpg')",
    imgMobile: "url('./assets/images/img-popup-mobile.png')",
    title: 'Multi-Post Stories Gain and Glory',
    skills: ['Ruby on rails', 'css', 'Javascript', 'HTML'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
    linkLiveVersion: 'https://www.youtube.com/',
    linkSource: 'https://github.com/fahdrahali/fahdrahali.github.io',
  },
  {
    id: 3,
    img: "url('./assets/images/projectXperia.jpg')",
    imgMobile: "url('./assets/images/img-popup-mobile.png')",
    title: 'Keeping track of hundreds of components',
    skills: ['Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
    linkLiveVersion: 'https://www.youtube.com/',
    linkSource: 'https://github.com/fahdrahali/fahdrahali.github.io',
  },
  {
    id: 4,
    img: "url('./assets/images/pankaj.jpg')",
    imgMobile: "url('./assets/images/img-popup-mobile.png')",
    title: 'Professional Singer Audio App',
    skills: ['Terminal', 'Codepen', 'css', 'Html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
    linkLiveVersion: 'https://www.youtube.com/',
    linkSource: 'https://github.com/fahdrahali/fahdrahali.github.io',
  },
  {
    id: 5,
    img: "url('./assets/images/foss.jpg')",
    imgMobile: "url('./assets/images/img-popup-mobile.png')",
    title: 'Social Network for Mental Health',
    skills: ['Codekit', 'Bootstrap', 'Codepen', 'React'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
    linkLiveVersion: 'https://www.youtube.com/',
    linkSource: 'https://github.com/fahdrahali/fahdrahali.github.io',
  },
  {
    id: 6,
    img: "url('./assets/images/projectXperia.jpg')",
    imgMobile: "url('./assets/images/img-popup-mobile.png')",
    title: 'Professional Art and Printing Data',
    skills: ['Bootstrap', 'Terminal', 'Codepen', 'Angular'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione, provident corporis cumque reprehenderit consectetur excepturi obcaecati dignissimos dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel veniam illo quod facilis consequatur odio eaque, commodi eligendi? Repellat ratione.',
    linkLiveVersion: 'https://www.youtube.com/',
    linkSource: 'https://github.com/fahdrahali/fahdrahali.github.io',
  },
];

function createTitleSectionWorks() {
  const liTitle = document.createElement('li');
  const liImage = document.createElement('li');

  const h2 = document.createElement('h2');
  const img = document.createElement('img');

  h2.textContent = 'My Recent Works';
  h2.className = 'title works-title second-mobile-title';
  liImage.className = 'indicator';
  img.src = './assets//images/Indicator.png';
  img.alt = 'indicator';

  liTitle.appendChild(h2);
  liImage.appendChild(img);

  const ul = document.createElement('ul');
  ul.className = 'flex-header';
  ul.appendChild(liTitle);
  ul.appendChild(liImage);

  const worksSection = document.querySelector('.works');
  worksSection.appendChild(ul);
}

createTitleSectionWorks();

function createCardsSectionWorks() {
  const divCards = document.createElement('div');
  divCards.className = 'cards';

  projects.map((card) => {
    const divCard = document.createElement('div');
    divCard.className = 'card';

    const divImgCard = document.createElement('div');
    divImgCard.className = 'img-card';
    divCard.appendChild(divImgCard);

    divImgCard.style.backgroundImage = card.img;

    const divContentCard = document.createElement('div');
    divContentCard.className = 'card-content';

    const h2 = document.createElement('h2');
    h2.className = 'card-title';
    h2.textContent = card.title;

    divContentCard.appendChild(h2);

    const ul = document.createElement('ul');
    ul.className = 'badge-list';
    for (let i = 0; i < card.skills.length; i += 1) {
      const li = document.createElement('li');
      li.className = 'badge bg-gray oil';
      li.textContent = card.skills[i];
      ul.appendChild(li);
    }
    divContentCard.appendChild(ul);
    const button = document.createElement('button');
    button.className = 'btn-green btn-projects';
    button.textContent = 'See Project';
    divContentCard.appendChild(button);
    divCard.appendChild(divContentCard);
    divCards.appendChild(divCard);
    return 1;
  });
  const worksSection = document.querySelector('.works');
  worksSection.appendChild(divCards);
}

createCardsSectionWorks();

const btn = document.querySelectorAll('.btn-projects');
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    const hiddenPopupDesktop = document.getElementById('popup');
    document.querySelector('.popup-desktop-image').style.backgroundImage = projects[i].img;
    document.querySelector('.title-popup-desktop').innerHTML = projects[i].title;
    const list = document.querySelector('.popup-badge-list');

    for (let j = 0; j < projects[i].skills.length; j += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(projects[i].skills[j]));
      list.appendChild(li);
    }
    document.querySelector('.popup-desktop-content').innerHTML = projects[i].description;

    hiddenPopupDesktop.classList.remove('hide');
    document.getElementById('container').classList.add('bg-container-popup');
  });
}

const btnMobile = document.querySelectorAll('.btn-projects');
for (let i = 0; i < btn.length; i += 1) {
  btnMobile[i].addEventListener('click', () => {
    const hiddenPopupMobile = document.getElementById('popup-mobile');
    document.querySelector('.popup-mobile-image').style.backgroundImage = projects[i].img;
    document.querySelector('.title-popup-mobile').innerHTML = projects[i].title;
    const list = document.querySelector('.popup-badge-list-mobile');

    for (let j = 0; j < projects[i].skills.length; j += 1) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(projects[i].skills[j]));
      list.appendChild(li);
    }
    document.querySelector('.popup-mobile-content').innerHTML = projects[i].description;

    hiddenPopupMobile.classList.remove('hide');
    document
      .getElementById('container')
      .classList.add('bg-container-popup-mobile');
  });
}

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
  return (/^[a-z\-0-9\\.\\*\\#\\$\\!\\~\\%\\^\\&\-\\+\\?]+@+[a-z\-0-9]+.+[a-z]$/g.test(email));
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

form.addEventListener('submit', (e) => {
  const isEmailValid = checkEmail();

  if (!isEmailValid) {
    e.preventDefault();
  }
});
