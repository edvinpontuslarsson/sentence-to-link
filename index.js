const clipboardy = require('clipboardy')
const readlineSync = require('readline-sync')

console.clear()
console.log('Welcome')

const isMarkdown = readlineSync
  .question('Do you want to remove any slashes i.e. "/"? (y/n) ')
  .toLowerCase()
  .includes('y')

while (true) {
  const sentence = readlineSync.question('enter sentence: ')
  const words = sentence.split(' ')

  const formatWord = w => (isMarkdown ? w.replace('/', '') : w).toLowerCase()

  const link = words.map(formatWord).join('-')

  clipboardy.writeSync(link)

  const consoleResponse = `The string\n${link}\nhas been copied to clipboard`
  console.log(consoleResponse)
}
