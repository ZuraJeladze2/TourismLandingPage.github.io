// carusel (chemi xelit gavakete nulidan :) )
let carouselImgArray = [
  './assets/images/carousel images/carousel-1.jpg',
  './assets/images/carousel images/carousel-2.jfif'
];

let currentSlide = 0;

let displaySlide = (array) => {
  let container = document.querySelector('.carousel');
  container.innerHTML += array.map((element, index) => generateHTML(element, index)).join('')
}

let generateHTML = (image, index) => {
  let activeClass = index === 0 ? 'active' : '';
  return `
      <div class="wrapper ${activeClass}">
        <img src="${image}" class="show-slide" alt="Tourism photoes"/>
        <div class="btn-center row-justify-center">
          <div class="btn-wrapper">
            <button class="start" onclick="previous()">&#8592</button>
            <button class="end" onclick="next()">&#8594</button>
          </div>
        </div>
       </div>  `;
}

let next = () => {
  let slides = document.querySelectorAll('.wrapper');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
};

let previous = () => {
  let slides = document.querySelectorAll('.wrapper');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
};

let autoNext = () => {
  setInterval(next, 5000)
}

//cardebi
const cardArray /*s1 == section 1 */ = [
  {
    title: 'flight booking',
    description: 'some description about flight booking. some description about flight booking.',
    img: '../assets/images/card-images/plane.jfif'
  },
  {
    title: 'hotel & resort booking',
    description: 'some description about flight booking. some description about flight booking.',
    img: '../assets/images/card-images/hotel.jfif'
  },
  {
    title: 'family trip planner',
    description: 'some description about flight booking. some description about flight booking.',
    img: 'assets/images/card-images/family-beach.jfif'
  },
  {
    title: 'cruise tour',
    description: 'some description about flight booking. some description about flight booking.',
    img: 'assets/images/card-images/ship.jfif'
  },
  {
    title: 'fire camp',
    description: 'some description about flight booking. some description about flight booking.',
    img: 'assets/images/card-images/camp-fire-.png'
  },
  {
    title: 'corporate holidays',
    description: 'some description about flight booking. some description about flight booking.',
    img: 'assets/images/card-images/developer.jpg'
  }
]

let generateCardHTML = (element) => {
  return `
    <div class="card-wrapper">
      <div class="img-wrapper-for-hover">
        <img src="${element.img}" alt="Photoes of our services">
      </div>
      <h3 class="card-header">${element.title}</h3>
      <div class="card-description">
      ${element.description}
      </div>
    </div>
  `
}
let displayCards = (array) => {
  let containerDiv = document.querySelector('.services-cards-wrapper');
  array.forEach(element => {
    containerDiv.innerHTML += generateCardHTML(element);
  });
}

let navbarSizing = () => {
  document.onscroll = function(){
    if (window.scrollY > 200) {
      document.documentElement.style.setProperty('--navbar-height', '70px');
    }else if(window.scrollY > 150 && window.scrollY < 250) { /* rom ar gaibagos */
      return;
    }
     else {
      document.documentElement.style.setProperty('--navbar-height', '100px');
    }
  }
}
let eventListeners = () => {
  let cards = document.querySelectorAll('.card-wrapper')
  cards.forEach(e => {
    e.addEventListener('click', function(){
      let info = {}
      info.img = e.querySelector('img').getAttribute('src')
      info.title = e.querySelector('.card-header').innerText
      info.description = e.querySelector('.card-description').innerText
      
      openModal(info)
    }, true)
  })
}

let openModal = (info) => {
  let modal = document.querySelector('.modal')
  let background = document.querySelector('.modal-wrapper')
  
  modal.querySelector('img').setAttribute('src', info.img)
  modal.querySelector('.mb-title').innerText = info.title
  modal.querySelector('.mb-description').innerText = info.description

  modal.classList.add('active')
  background.classList.add('active')
}

let closeModal = () => {
  let modal = document.querySelector('.modal')
  let background = document.querySelector('.modal-wrapper')
  background.addEventListener('click', (e) => {
    modal.classList.remove('active')
    background.classList.remove('active')
  }, true)
}

let emailValidation = () => {
  let input = document.getElementById('submit')
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  input.addEventListener('click', function(e){
    e.preventDefault()
    let text = document.getElementById('email-validation').value
    if (text.match(regex)) {
      text = '';
      alert('Email submitted successfully!')
    } else {
      alert('Invalid email')
    }
  })
}
let hideSidebar = () => {
  window.addEventListener('resize', () => {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let sidebar = document.querySelector('.sidebar')
    if (vw>768) {
      sidebar.classList.remove('active')
    }
  })
}

displaySlide(carouselImgArray);
autoNext();
hideSidebar()
emailValidation()
closeModal()
displayCards(cardArray);
eventListeners()
navbarSizing()