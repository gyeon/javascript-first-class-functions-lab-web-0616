function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function (number) {
    return multiplierValue * number
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(num, multiplierValue) {
  // Create a doublerWithBind variable that partially applies the multiplier()
  // function by passing in 2 as its first argument.
  return num * multiplierValue
}

var doublerWithBind = multiplier.bind(2, null)
var triplerWithBind = multiplier.bind(3, null)
