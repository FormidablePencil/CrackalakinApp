export function generateArrayOfNumbers() {
  let array1 = Array.from(Array(6).keys())
  let array2 = Array.from(Array(6).keys())
  let array = [...array1, ...array2]
  for (let i = 0; i < 12; i++) {
    const shufflingIndex = randomNumGenerator()
    const randomNum = randomNumGenerator()
    const valuePopped = array[shufflingIndex]
    array = array.filter((number, index) => index !== shufflingIndex) //This is how you'd delete in js
    array.splice(randomNum, 0, valuePopped)
  }
  return array
}
export function randomNumGenerator() {
  return Math.floor(Math.random() * 12)
}
export function resetPrettyBoxProperties() {
  const array = []
  for (let i = 0; i < 12; i++) {
    array[i] = { visible: true, pressable: true }
  }
  return array
}
