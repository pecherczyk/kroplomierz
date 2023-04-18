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

document.addEventListener('DOMContentLoaded', function () {
  const inputDips = document.getElementById('drips')
  const submitButton = document.getElementById('run')

  inputDips.addEventListener('change', function () {
    const val = inputDips.value
    countLiters(val)
  })
})
