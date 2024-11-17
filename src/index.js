import "./styles.css";
import { greeting } from "./greeting.js";


import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderAbout } from './about.js';
import { renderContact } from './contact.js';

const contentDiv = document.getElementById('content');
const navContent = document.getElementById('nav-content');
const headerContent = document.getElementById("header-content")

headerContent.textContent= "Spicy Restaurant"
// Crie os botões de navegação e adicione-os ao nav
const navLinks = ['Home', 'Menu', 'About', 'Contact'];
navLinks.forEach(link => {
  const navButton = document.createElement('button');
  navButton.textContent = link;
  navButton.addEventListener('click', () => {
    contentDiv.innerHTML = ''; // Limpa o conteúdo atual
    switch (link) {
      case 'Home':
        contentDiv.appendChild(renderHome());
        break;
      case 'Menu':
        contentDiv.appendChild(renderMenu());
        break;
      case 'About':
        contentDiv.appendChild(renderAbout());
        break;
      case 'Contact':
        contentDiv.appendChild(renderContact());
        break;
    }
  });
  navContent.appendChild(navButton);
});

//Image carousel
const slides = document.querySelectorAll('.carousel-slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlide;

function showSlide(index) {
  // Corrigir o índice para que não ultrapasse os limites
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  // Atualizar a posição do slide
  document.querySelector('.carousel-slides').style.transform = `translateX(-${currentIndex * 100}%)`;

  // Atualizar os dots
  dots.forEach(dot => dot.classList.remove('active'));

  // Verificar se o índice é válido antes de acessar o dot
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('active');
  }
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function autoAdvance() {
  autoSlide = setInterval(nextSlide, 5000);
}

function stopAutoAdvance() {
  clearInterval(autoSlide);
}

prevButton.addEventListener('click', () => {
  prevSlide();
  stopAutoAdvance();
});

nextButton.addEventListener('click', () => {
  nextSlide();
  stopAutoAdvance();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    stopAutoAdvance();
  });
});

// Iniciar o carousel
showSlide(currentIndex);
autoAdvance();


// Renderiza a aba inicial por padrão (Home)
contentDiv.appendChild(renderHome());

console.log(greeting);
console.log("Working!")
