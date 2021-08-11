const clipboardy = require('clipboardy')
const readlineSync = require('readline-sync')

console.clear()
console.log('Welcome')

const removeSlashes = readlineSync
  .question('Do you want to remove any slashes i.e. "/"? (y/n) ')
  .toLowerCase()
  .includes('y')

while (true) {
  const sentence = readlineSync.question('enter sentence: ')
  const words = sentence.split(' ')

  const formatWord = w => (removeSlashes ? w.replace('/', '') : w).toLowerCase()

  const string = words.map(formatWord).join('-')

  clipboardy.writeSync(string)

  const consoleResponse = `The string\n${string}\nhas been copied to clipboard`
  console.log(consoleResponse)
}
