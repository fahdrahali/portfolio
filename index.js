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

function hidePopup() {
  const hiddenPopupDesktop = document.getElementById('popup');
  hiddenPopupDesktop.classList.toggle('hide');
  document.getElementById('container').classList.remove('bg-container-popup');
  document.querySelector('.popup-badge-list').innerHTML = '';
  document.querySelector('works').scrollIntoView({ block: 'start' });
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

document.querySelectorAll(".btn-projects").forEach((btn) => {
  btn.addEventListener("click", () => {
    const hiddenPopupMobile = document.getElementById("popup-mobile");
    document.querySelector(".popup-mobile-image").style.backgroundImage =
      project.imgMobile;
    document.querySelector(".title-popup-mobile").innerHTML = project.title;
    const list = document.querySelector(".popup-badge-list-mobile");

    for (let i = 0; i < project.skills.length / 2; i += 1) {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(project.skills[i]));
      list.appendChild(li);
    }
    document.querySelector(".popup-mobile-content").innerHTML =
      project.description;

    hiddenPopupMobile.classList.remove("hide");
    document
      .getElementById("container")
      .classList.add("bg-container-popup-mobile");
  });
});
