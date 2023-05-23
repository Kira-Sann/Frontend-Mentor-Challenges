const html = document.querySelector('html')
const btn = document.querySelector('.btn')

// Define uma função para alternar o modo escuro
function toggleDarkMode() {
    html.classList.toggle('dark-mode')
  }

// Adiciona um ouvinte de eventos ao botão para chamar a função toggleDarkMode quando o botão for alterado
  btn.addEventListener('click', toggleDarkMode)