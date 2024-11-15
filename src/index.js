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

// Renderiza a aba inicial por padrão (Home)
contentDiv.appendChild(renderHome());

console.log(greeting);
console.log("Working!")
