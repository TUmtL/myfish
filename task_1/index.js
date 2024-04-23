import { encoded, translations } from './data.js'

console.log("Let's rock")
const decoded = encoded
const translationsResult = translations
let rare = []
// console.log(encoded, translations)
function decode() {
  for (let one of decoded) {
    const arrayOfArrays = Object.entries(one)
    arrayOfArrays.forEach(el => {
      const name = el[0]
      const value = el[1]
      if( `${name[name.length - 2]}${name[name.length - 1]}` == 'Id' && name != 'groupId' && value != null && value != undefined && value != '0' ){
        rare.push(`${value}`)
        one[name] = translationsResult[value]
      }
    })
  }
  for(let one of rare) {
    const check = rare.filter(el => el == one)
    if(check.length > 1) {
      rare = rare.filter(el => el != one)
    }
  }
}
decode()


console.log(decoded)
console.log(rare)
