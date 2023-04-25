export function validator (input) {
  const pattern = /^[1-9]\d*$/
  return pattern.test(input)
}
