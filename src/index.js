import './style.css'
import { validator } from './validator'
import countDripsPerMinute from './countDripsPerMinute'
import renderResult from './render'
import countSecondsPerGlass from './countSecondsPerGlass'

const BigDecimal = require('js-big-decimal')

function countLiters2 (seconds) {
  if (seconds === 0) {
    return 0
  }
  seconds = new BigDecimal(seconds)

  const GLASS = new BigDecimal(0.25)
  // sekundy w trakcie dnia
  const dayWaste = GLASS.divide(seconds, 10)
    .multiply(new BigDecimal(86400))
    .round(1)
    .getPrettyValue(3, ' ')

  const daily2Element = document.getElementById('daily2')
  daily2Element.innerHTML = dayWaste

  const monthWaste = GLASS.divide(seconds, 10)
    .multiply(new BigDecimal(2678400))
    .round(2)
    .getPrettyValue(3, ' ')
  const month2Element = document.getElementById('monthly2')
  month2Element.innerHTML = monthWaste

  const yearWaste = GLASS.divide(seconds, 10)
    .multiply(new BigDecimal(31536000))
    .round(0)
    .getPrettyValue(3, ' ')
  const year2Element = document.getElementById('yearly2')
  year2Element.innerHTML = yearWaste
}

const inputDrips = document.getElementById('inputDrips')
const inputSeconds = document.getElementById('inputSeconds')

const dripsResult = document.getElementById('dripsResult')
const secondsResult = document.getElementById('secondsResult')

function inputSetColor (input, color) {
  // funkcja zmieniająca background color inputa
  console.log(input.classList)
}

inputDrips.addEventListener('input', () => {
  const inputVal = inputDrips.value
  if (validator(inputVal)) {
    const list = dripsResult.classList
    list.remove('invisible')
    inputDrips.classList.remove('wrong')
    inputDrips.classList.add('correct')
    // Policz użycie
    setTimeout(() => {
      renderResult('daily', countDripsPerMinute, inputVal, 'day')
      renderResult('monthly', countDripsPerMinute, inputVal, 'month')
      renderResult('yearly', countDripsPerMinute, inputVal, 'year')
    }, 750)
  } else {
    inputDrips.classList.remove('correct')
    inputDrips.classList.add('wrong')

    const list = dripsResult.classList
    list.add('invisible')
  }
  if (inputVal === '') {
    inputDrips.classList.remove('wrong')
    inputDrips.classList.remove('correct')
  }
})

inputSeconds.addEventListener('input', () => {
  const inputVal = inputSeconds.value
  if (validator(inputVal)) {
    // usuwamy klasę invisible jeżeli jest
    const cssList = secondsResult.classList
    if (cssList) {
      cssList.remove('invisible')
    }
    inputSeconds.classList.remove('wrong')
    inputSeconds.classList.add('correct')
    // Policz zużycie
    countLiters2(inputVal)
  } else {
    // Usuń niepoprawnego, można by dać toggle ale niech zostanie
    inputSeconds.classList.remove('correct')
    inputSeconds.classList.add('wrong')

    const list = secondsResult.classList
    list.add('invisible')
  }
  if (inputVal === '') {
    inputSeconds.classList.remove('wrong')
    inputSeconds.classList.remove('correct')
    // clear previous
    countLiters2(0)
  }
})
