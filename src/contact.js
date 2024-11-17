export function renderContact() {
    const contactContent = document.createElement('div');
    contactContent.textContent = 'Entre em contato conosco para fazer reservas ou tirar dúvidas.';

    const image = document.createElement("img")
    image.classList.add('slide-image')
    image.src = './images/image3.png'
    // homeContent.appendChild(image)
    // Adicione um formulário de contato ou informações de contato
    return contactContent;
  }