/**
 * Write a JavaScript program to create a new string from a given string taking the first
 * characters and last 3 characters of a string and adding them together. the string length must be 3
 * or more, if not, the original string is returned
 */
const makeNewString = (str)=> str.length < 3? str : str.slice(0,3) + str.slice(-3)
console.log(makeNewString('abc'))
console.log(makeNewString('abcdef'))
console.log(makeNewString('abcdef13abc123'))
console.log(makeNewString('ab'))