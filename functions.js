function multiply(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else {
    return 'Please enter two numbers'
  }
}

module.exports = multiply
