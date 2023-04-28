const BigDecimal = require('js-big-decimal')

function countDripsPerMinute (drips) {
  const type = typeof drips

  if (type !== 'number') {
    console.error('Wrong type given')
  }

  drips = new BigDecimal(drips)

  const DROP = new BigDecimal(0.00005)
  const DAY = new BigDecimal(1440)
  const MONTH = new BigDecimal(44640)
  const YEAR = new BigDecimal(525600)

  const yearWaste = DROP
    .multiply(YEAR)
    .multiply(drips)
    .round(0)

  const monthWaste = DROP
    .multiply(MONTH)
    .multiply(drips)
    .round(2)

  const dayWaste = DROP
    .multiply(DAY)
    .multiply(drips)

  const result = {
    year: yearWaste.getPrettyValue(3, ' '),
    month: monthWaste.getPrettyValue(3, ' '),
    day: dayWaste.getPrettyValue(3, ' ')
  }
  return result
}

export default countDripsPerMinute
