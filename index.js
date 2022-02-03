const gs1 =  require('gs1')


const upc = '212345019954'

console.log('=== upc ===')
console.log(upc)
console.log(upc.length)
console.log('=== upc ===')

const gs1Init = gs1(upc)
const validgs1 = gs1.validate(upc)
const checkDigitgs1 = gs1.checkdigit(upc)

console.log('=== gs1 ===')
console.log(gs1Init)
console.log(validgs1)
console.log(`${upc}${checkDigitgs1}`)
console.log('=== gs1 ===')
