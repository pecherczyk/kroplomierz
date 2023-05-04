function inputSetColor (input, color) {
  // funkcja zmieniająca background color inputa
  switch (color) {
    case 'correct':
      input.classList.remove('wrong')
      input.classList.add('correct')
      break
    case 'wrong':
      input.classList.remove('correct')
      input.classList.add('wrong')
      break
    default:
      console.error(`inputSetColor: Podano błędny parametr: ${color}`)
      break
  }
}

export default inputSetColor
