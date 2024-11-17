export function renderAbout() {
    const aboutContent = document.createElement('div');
    aboutContent.textContent = 'Nossa história, nossa equipe e nossa paixão pela culinária.';

    const image = document.createElement("img")
    image.classList.add('slide-image')
    image.src = './images/image2.png'
    // homeContent.appendChild(image)
    // Adicione mais informações sobre o restaurante
    return aboutContent;
  }