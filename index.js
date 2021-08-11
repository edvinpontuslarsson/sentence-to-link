const clipboardy = require('clipboardy')

const isSpecial = process.argv[2] === 'special'
const regExp = /[^a-zA-Z- ]/g

const startWordIndex = isSpecial ? 3 : 2
const words = process.argv.splice(startWordIndex)

const formatWord = w => (isSpecial ? w.replace(regExp, '') : w).toLowerCase()

const link = words.map(formatWord).join('-')

clipboardy.writeSync(link)

const consoleResponse = `The string\n${link}\nhas been copied to clipboard`
console.log(consoleResponse)
