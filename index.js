const gs1 =  require('gs1')


const upc = '21234501995'

console.log('=== upc ===')
console.log(upc)
console.log(upc.length)
console.log('=== upc ===')

const validated = gs1(upc)
const validgs1 = gs1.validate(validated)
const checkDigitgs1 = gs1.checkdigit(upc)

console.log('=== gs1 ===')
console.log(validated)
console.log(validgs1)
console.log(`${checkDigitgs1}`)
console.log('=== gs1 ===')
