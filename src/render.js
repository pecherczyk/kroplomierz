/**
 * Funkcja renderujaca wynik zwracany przez funkcję
 * @param { string } targetID - ID elementu DOM gdzie będzie renderowany wynik
 * @param { string } callback - funkcja jaka zostanie przekazana do wyliczenia
 * @param { string } value - wartość jaka zostanie przekazana
 * @param { string} period - day | month | year
 */

function renderResult (targetID, callback, value, period) {
  try {
    if ((period !== 'year' &&
         period !== 'day' &&
         period !== 'month')) {
      throw new SyntaxError('Wrong parameter was given!  ')
    }
    const result = callback(value)[period]
    document.getElementById(targetID).innerHTML = result
  } catch (err) {
    console.error('Error: ' + err.message)
  }
}

export default renderResult
