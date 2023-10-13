const quote = document.querySelector('.quote')
const number = document.querySelector('.number')
const button = document.querySelector('.btn')


const getQuote = () => {
  fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => {
    quote.textContent = data.slip.advice;
    number.textContent = data.slip.id;
  })
}

button.addEventListener('click', () => {
  getQuote()
})

getQuote()