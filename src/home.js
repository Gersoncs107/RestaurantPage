export function renderHome() {
    const homeContent = document.createElement('div');
    homeContent.textContent = 'Bem-vindo ao nosso restaurante! Aqui você encontrará os melhores pratos da culinária internacional.';

    const image = document.createElement("img")
    image.classList.add('slide-image')
    image.src = './images/image4.png'
    // homeContent.appendChild(image)
    // Adicione mais estilos e elementos conforme necessário
    return homeContent;
  }