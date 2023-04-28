
/**
 * Funkcja licząca zużycie wody na podstawie szklanki.
 * @param { number } - Czas w sekundach [s]
 * @returns { object } - Zwraca obiekt
 */

const BigDecimal = require('js-big-decimal')

function countSecondsPerGlass (seconds) {
  seconds = new BigDecimal(seconds)
  const GLASS = new BigDecimal(0.25)

  const dayWaste = GLASS
    .divide(seconds, 10)
    .multiply(new BigDecimal(86400))
    .round(1)

  const monthWaste = GLASS
    .divide(seconds, 10)
    .multiply(new BigDecimal(2678400))
    .round(2)

  const yearWaste = GLASS
    .divide(seconds, 10)
    .multiply(new BigDecimal(31536000))
    .round(0)

  const result = {
    day: dayWaste.getPrettyValue(3, ' '),
    year: yearWaste.getPrettyValue(3, ' '),
    month: monthWaste.getPrettyValue(3, ' ')
  }

  return result
}

export default countSecondsPerGlass
