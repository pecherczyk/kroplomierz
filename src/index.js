import './style.css'

const BigDecimal = require('js-big-decimal')

function countLiters (amount) {
  amount = new BigDecimal(amount)
  const DROP = new BigDecimal(0.00005)
  // const HOUR = new BigDecimal(60)
  const DAY = new BigDecimal(1440)
  const MONTH = new BigDecimal(44640)
  const YEAR = new BigDecimal(525600)

  const yearWaste = DROP.multiply(YEAR).multiply(amount).value
  const year = document.getElementById('yearly')
  year.innerHTML = yearWaste

  const monthWaste = DROP.multiply(MONTH).multiply(amount).value
  const month = document.getElementById('monthly')
  month.innerHTML = monthWaste

  const dayWaste = DROP.multiply(DAY).multiply(amount).value
  const day = document.getElementById('daily')
  day.innerHTML = dayWaste
}

function validateDrips (input) {
  const pattern = /^[1-9]\d*$/
  return pattern.test(input)
}

const inputDrips = document.getElementById('inputDrips')
const result = document.getElementById('dripsResult')

inputDrips.addEventListener('input', () => {
  const inputVal = inputDrips.value
  if (validateDrips(inputVal)) {
    const list = result.classList
    list.remove('invisible')
    inputDrips.classList.remove('wrong')
    inputDrips.classList.add('correct')
    console.log(inputVal)
    // Policz użycie
    setTimeout(() => {
      countLiters(inputVal)
    }, 600)
    console.log(inputDrips.classList)
  } else {
    inputDrips.classList.remove('correct')
    inputDrips.classList.add('wrong')

    const list = result.classList
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
