const clipboardy = require('clipboardy')
const readlineSync = require('readline-sync')

console.log('Welcome')

const isMarkdown = readlineSync
  .question('Do you want to generate links for markdown? (y/n)')
  .toLowerCase()
  .includes('y')

const regExp = /[^a-zA-Z- ]/g

while (true) {
  const sentence = readlineSync.question('enter sentence: ')
  const words = sentence.split(' ')

  const formatWord = w => (isMarkdown ? w.replace(regExp, '') : w).toLowerCase()

  const link = words.map(formatWord).join('-')

  clipboardy.writeSync(link)

  const consoleResponse = `The string\n${link}\nhas been copied to clipboard`
  console.log(consoleResponse)
}
