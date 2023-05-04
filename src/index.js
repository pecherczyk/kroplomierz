import './style.css'
import { validator } from './validator'
import countDripsPerMinute from './countDripsPerMinute'
import inputSetColor from './inputSetColor'
import renderResult from './render'
import countSecondsPerGlass from './countSecondsPerGlass'

const inputDrips = document.getElementById('inputDrips')
const inputSeconds = document.getElementById('inputSeconds')

const dripsResult = document.getElementById('dripsResult')
const secondsResult = document.getElementById('secondsResult')

inputDrips.addEventListener('input', () => {
  const inputVal = inputDrips.value
  if (validator(inputVal)) {
    dripsResult.classList.remove('invisible')

    inputSetColor(inputDrips, 'correct')

    setTimeout(() => {
      renderResult('daily', countDripsPerMinute, inputVal, 'day')
      renderResult('monthly', countDripsPerMinute, inputVal, 'month')
      renderResult('yearly', countDripsPerMinute, inputVal, 'year')
    }, 750)
  } else {
    inputSetColor(inputDrips, 'wrong')
    dripsResult.classList.add('invisible')
  }
  if (inputVal === '') {
    inputDrips.classList.remove('wrong')
    inputDrips.classList.remove('correct')
  }
})

inputSeconds.addEventListener('input', () => {
  const inputVal = inputSeconds.value
  if (validator(inputVal)) {
    if (secondsResult.classList) {
      secondsResult.classList.remove('invisible')
    }
    inputSetColor(inputSeconds, 'correct')

    renderResult('daily2', countSecondsPerGlass, inputVal, 'day')
    renderResult('monthly2', countSecondsPerGlass, inputVal, 'month')
    renderResult('yearly2', countSecondsPerGlass, inputVal, 'year')
  } else {
    inputSetColor(inputSeconds, 'wrong')
    secondsResult.classList.add('invisible')
  }
  if (inputVal === '') {
    inputSeconds.classList.remove('wrong')
    inputSeconds.classList.remove('correct')
  }
})
