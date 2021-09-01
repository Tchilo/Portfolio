const openMenuButton = document.querySelector('.open-menu-btn');
const closeMenuButton = document.querySelector('.fa-times');
const mobileMenu = document.querySelector('.d-menu-li');
const links = document.querySelectorAll('.nav-bar-list li a');
const popupData = document.querySelector('.popup-modal');
function grab(e) {
  return document.getElementById(e);
}
// Mobile menu code

openMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('d-block');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('d-block');
});

links.forEach((item) => item.addEventListener('click', () => mobileMenu.classList.remove('d-block')));
window.addEventListener('resize', () => {
  if (window.innerWidth > 767.98) {
    openMenuButton.classList.remove('d-block');
  }
});

// Popup data array

const mobilePopup = [
  {
    image: 'img/modal-popup.png',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'Css', 'JavaScript'],
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy 
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
             text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    links: ['See Live', 'See Source'],
  },
];

// Project cards data

const projectCards = [
  {
    id: 'card1',
    image: '',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    button: 'See Project',
  },
  {
    id: 'card2',
    image: '',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    button: 'See Project',
  },
  {
    id: 'card3',
    image: '',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    button: 'See Project',
  },
  {
    id: 'card4',
    image: '',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    button: 'See Project',
  },
  {
    id: 'card5',
    image: '',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    button: 'See Project',
  },
  {
    id: 'card6',
    image: '',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    button: 'See Project',
  },
];

// popup data template

mobilePopup.forEach((el) => {
  let languages = '';
  el.languages.forEach((lang) => {
    languages += `<li class="buttons font-f">${lang}</li>`;
  });

  popupData.innerHTML = `
<li class=" popup">
          <div class="bg-popup">
            <div class="popup-data">
              <i class="fa fa-times popup-close-btn" aria-hidden="true"></i>
              <img class="img-block" src="${mobilePopup[0].image}" alt="#">

              <div class="bottom-card-popup">
                <h3 class="card-heading-popup font-f">${mobilePopup[0].title}</h3>
                <ul class="btns">
                  ${languages}
                </ul>
                <p class="popup-text font-f">${mobilePopup[0].text}</p>
                <div class="popup-btn-container">
                  <a href="#" class="popup-btn font-f">${mobilePopup[0].links[0]} <span><i class="fa fa-external-link"></i></span></a>
                  <a href="#" class="popup-btn font-f">${mobilePopup[0].links[1]} <span><i class="fa fa-github"></i></span></a>
                </div>
              </div>
            </div>
          </div>
        </li>`;
});

// project card code

projectCards.forEach((el) => {
  let languages = '';
  el.technologies.forEach((lang) => {
    languages += `<li class="buttons font-f">${lang}</li>`;
  });
  const projectButtons = document.querySelectorAll('.popOpen');

  projectButtons.forEach((el) => {
    el.addEventListener('click', () => {
      const pop = document.querySelector('.bg-popup');
      pop.style.display = 'block';
  const popupCloseButton = document.querySelector('.popup-close-btn');

      popupCloseButton.addEventListener('click', () => {
        const pop = document.querySelector('.bg-popup');
        pop.style.display = 'none';
      });
    });
  });

  const template = document.createElement('template');

  template.innerHTML = `<li class="container">
          <div class="bottom-card">
            <h3 class="card-heading font-f">${el.name}</h3>
            <ul class="btns">
              ${languages}
            </ul>
            <button type="button" class="green-btn font-f popOpen">${el.button}</button>
          </div>
        </li>`;

  grab('cards').appendChild(template.content.firstChild);
});