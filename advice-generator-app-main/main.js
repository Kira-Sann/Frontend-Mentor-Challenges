const dice = document.querySelector('.dice')
const advice = document.querySelector('.advice')
const idAdvice = document.querySelector('.advice-number')

async function advices(){
    
    await fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(data => {
      // Atualizar o texto do conselho
      advice.textContent =  data.slip.advice;
      idAdvice.textContent = 'Advice #' + data.slip.id;
    })
    .catch(error => console.error(error));
}
