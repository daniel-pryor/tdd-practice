const multiply = require('./functions')

test('Multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4)
})

test('Multiplies 2 * "Hello World" and returns "Please enter two numbers"', () => {
  expect(multiply(2, 'Hello World')).toEqual('Please enter two numbers')
})
