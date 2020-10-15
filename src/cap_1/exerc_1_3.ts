/**
 * Exercise 1.3
 *  Declare a function that takes three
 *  numbers as arguments and returns the sum of the
 *  squares of the two larger numbers.
 */

 function verifyLargerBetween(valueOne: number, valueTwo: number) {
  let larger = 0

  valueOne > valueTwo ? larger = valueOne :  larger = valueTwo

  return larger
}

function squares(value: number) {
  return value * value
}

function sumSquaresTwoLargerValues(valueOne: number, valueTwo: number, valueThree: number) {
  let largerOne = 0
  let largerTwo = 0

  largerOne = verifyLargerBetween(valueOne, valueTwo)

  valueOne === largerOne ?
    largerTwo = verifyLargerBetween(valueTwo, valueThree) :
    largerTwo = verifyLargerBetween(valueOne, valueThree)

  return squares(largerOne) + squares(largerTwo)
}

const result = sumSquaresTwoLargerValues(4, 2, 3)

console.log(result)
