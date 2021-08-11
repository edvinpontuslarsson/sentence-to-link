const clipboardy = require('clipboardy')

const str = 'keep-but-remove/and-also_right?'

const isSpecial = process.argv[2] === 'special'

const startWordIndex = isSpecial ? 3 : 2
const words = process.argv.splice(startWordIndex)

// TODO break out regex
const formatWord = w =>
  (isSpecial ? w.replace(/[^a-zA-Z- ]/g, '') : w).toLowerCase()

const link = words.map(formatWord).join('-')

clipboardy.writeSync(link)

const consoleResponse = `The string\n${link}\nhas been copied to clipboard`
console.log(consoleResponse)
