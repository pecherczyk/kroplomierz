import './style.css'
import { validator } from './validator'
import countDripsPerMinute from './countDripsPerMinute'
import renderResult from './render'

renderResult('yearly', countDripsPerMinute, 1200, 'day')

const BigDecimal = require('js-big-decimal')

function countLiters (amount) {
  amount = new BigDecimal(amount)
  const DROP = new BigDecimal(0.00005)
  // const HOUR = new BigDecimal(60)
  const DAY = new BigDecimal(1440)
  const MONTH = new BigDecimal(44640)
  const YEAR = new BigDecimal(525600)

  const yearWaste = DROP
    .multiply(YEAR)
    .multiply(amount)
    .round(0)
  const year = document.getElementById('yearly')
  year.innerHTML = yearWaste.getPrettyValue(3, ' ')

  const monthWaste = DROP
    .multiply(MONTH)
    .multiply(amount)
    .round(2)
  const month = document.getElementById('monthly')
  month.innerHTML = monthWaste.getPrettyValue(3, ' ')

  const dayWaste = DROP
    .multiply(DAY)
    .multiply(amount)
  const day = document.getElementById('daily')
  day.innerHTML = dayWaste.getPrettyValue(3, ' ')
}

function countLiters2 (seconds) {
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

inputDrips.addEventListener('input', () => {
  const inputVal = inputDrips.value
  if (validator(inputVal)) {
    const list = dripsResult.classList
    console.log(list)
    list.remove('invisible')
    inputDrips.classList.remove('wrong')
    inputDrips.classList.add('correct')

    // Policz użycie
    setTimeout(() => {
      countLiters(inputVal)
    }, 200)
  } else {
    inputDrips.classList.remove('correct')
    inputDrips.classList.add('wrong')

    const list = dripsResult.classList
    list.add('invisible')
    //
    // inputDrips.classList.add('correct')
  }
  if (inputVal === '') {
    inputDrips.classList.remove('wrong')
    inputDrips.classList.remove('correct')
    // clear previous
    countLiters(0)
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
