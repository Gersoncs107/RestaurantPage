export function renderMenu() {
    const menuContent = document.createElement('div');
    menuContent.textContent = 'Nosso cardápio é variado e saboroso. Confira nossas opções de pratos principais, acompanhamentos e sobremesas.';

    const image = document.createElement("img")
    image.classList.add('slide-image')
    image.src = './images/image1.png'
    // homeContent.appendChild(image)
    // Adicione uma lista de pratos, preços, etc.
    return menuContent;
  }