/**
 * Funkcja renderujaca wynik zwracany przez funkcję
 * @param { string } targetID - ID elementu DOM gdzie będzie renderowany wynik
 * @param { string } callback - funkcja jaka zostanie przekazana do wyliczenia
 * @param { string } value - wartość jaka zostanie przekazana
 * @param { string} period - day | month | year
 */

function renderResult (targetID, callback, value, period) {
  const el = document.createElement('span')
  el.setAttribute('class', 'dodana')

  try {
    if ((period !== 'year' &&
         period !== 'day' &&
         period !== 'month')) {
      throw new SyntaxError('Wrong parameter was given!')
    }
    el.innerHTML = callback(value)[period]
  } catch (error) {
    console.error('przekazano błędny parametr: ' + period)
  }
  document.getElementById(targetID).appendChild(el)
}

export default renderResult
