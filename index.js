const clipboardy = require('clipboardy')

// just option here
console.log(process.argv)

const str = 'keep-but-remove/and-also_right?'

console.log(str.replace(/[^a-zA-Z- ]/g, ""))

const isSpecial = process.argv[2] === 'special'

const words = process.argv.splice(2)
const link = words.map(w => w.toLowerCase()).join('-')

clipboardy.writeSync(link)

const consoleResponse = `The string\n${link}\nhas been copied to clipboard`
console.log(consoleResponse)
