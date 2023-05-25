const html = document.querySelector('html')
const btn = document.querySelector('.btn')

function toggleDarkMode() {
    html.classList.toggle('dark-mode')
  }

  btn.addEventListener('click', toggleDarkMode)