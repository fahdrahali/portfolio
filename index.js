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

document.addEventListener('DOMContentLoaded', displayMenu);
document.addEventListener('DOMContentLoaded', displayContactSection);
document.addEventListener('DOMContentLoaded', displayAboutSection);
document.addEventListener('DOMContentLoaded', displayHomeSection);