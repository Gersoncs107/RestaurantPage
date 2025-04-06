import image1 from '../images/image1.jpg';

export function renderMenu() {
  const menuContent = document.createElement('div');
  menuContent.textContent = 'Nosso cardápio é variado e saboroso. Confira nossas opções de pratos principais, acompanhamentos e sobremesas.';

  const image = document.createElement('img');
  image.classList.add('slide-image');
  image.src = image1;

  menuContent.appendChild(image);
  return menuContent;
}