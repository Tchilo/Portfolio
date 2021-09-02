const openMenuButton = document.querySelector('.open-menu-btn');
const closeMenuButton = document.querySelector('.fa-times');
const mobileMenu = document.querySelector('.d-menu-li');
const links = document.querySelectorAll('.nav-bar-list li a');
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

// Project cards data

const projectCards = [
  {
    id: 'card1',
    image: 'img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card2',
    image: 'img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card3',
    image: 'img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card4',
    image: 'img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['www.google.com', 'www.facebook.com'],
  },
  {
    id: 'card5',
    image: 'img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
  {
    id: 'card6',
    image: 'img/modal-popup.png',
    name: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    button: 'See Project',
    links: ['https://www.google.com', 'https://github.com/'],
  },
];

function popupCode(position) {
  const el = projectCards[position];

  const pop = document.querySelector('.bg-popup');
  pop.style.display = 'block';

  const firstCard = document.querySelector('.img-block');
  firstCard.src = `${el.image}`;

  const seeLive = document.querySelector('.see-live');
  seeLive.href = `${el.links[0]}`;

  const seeSource = document.querySelector('.see-source');
  seeSource.href = `${el.links[1]}`;

  document.querySelector('.card-heading-popup').innerText = el.name;

  const btnContiner = document.getElementById('foo');
  btnContiner.innerHTML = '';

  const paragraph = document.querySelector('.popup-text');
  paragraph.textContent = `${el.description}`;

  el.technologies.forEach((btn) => {
    const liBtn = document.createElement('li');
    liBtn.className = 'buttons font-f';
    liBtn.innerText = btn;
    btnContiner.appendChild(liBtn);
  });

  document.querySelector('.popup-text').innerText = el.description;

  const popupCloseButton = document.querySelector('.popup-close-btn');
  popupCloseButton.addEventListener('click', () => {
    const pop = document.querySelector('.bg-popup');
    pop.style.display = 'none';
  });
}
// project card code

projectCards.forEach((el, i) => {
  let languages = '';
  el.technologies.forEach((lang) => {
    languages += `<li class="buttons font-f">${lang}</li>`;
  });

  const template = document.createElement('template');

  const btn = document.createElement('button');
  btn.className = 'green-btn font-f popOpen';
  btn.innerText = el.button;
  btn.addEventListener('click', () => {
    popupCode(i);
  });

  template.innerHTML = `<li class="container">
      <div class="bottom-card">
        <h3 class="card-heading font-f">${el.name}</h3>
        <ul class="btns">
          ${languages}
        </ul>
      </div>
    </li>`;

  const far = template.content.firstChild;
  far.childNodes[1].appendChild(btn);
  grab('cards').appendChild(far);
});

// FORM ELEMENT SELECTION

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);
const errorMessage = document.querySelector('.error-message');
const form = document.forms['contact-form'];
const mail = form.email;
const messageInput = form.comment;
const nameInput = form.fullName;
const formElts = form.querySelectorAll('input, textarea');

// SAVE TO LOCAL STORAGE

const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getFromLocalStorage('formData');
if (formData !== null) {
  nameInput.value = formData.name;
  mail.value = formData.email;
  messageInput.value = formData.message;
}
formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    errorMessage.style.display = 'none';
    const objectForLocalStorage = {
      name: nameInput.value,
      email: mail.value,
      message: messageInput.value,
    };
    saveToLocalStorage('formData', objectForLocalStorage);
  });
});

// EMAIL VALIDATION
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = mail.value;
  if (!isLowerCase(email)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    form.submit();
  }
});
