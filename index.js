const clipboardy = require('clipboardy')

const words = process.argv.splice(2)
const link = words.map(
    w => w.toLowerCase()
).join('-')

clipboardy.writeSync(link)

const consoleResponse = `The string\n${link}\nhas been copied to clipboard`
console.log(consoleResponse)
