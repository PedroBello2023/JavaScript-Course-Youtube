/* Arquivo JS da aula 03: Operadores e Operções */

let n1 = 10  // number inteiro
let n2 = 2  // number inteiro
let n3 = '2' // string texto

document.write(`N1: ${n1} <br>`)
document.write(`N2: ${n2} <br>`)
document.write(`N3: ${n3} <br>`)

console.log(n1 +n2) // adição
console.log(n1 - n2) // subtração
console.log(n1 * n2) // multiplicação
console.log(n1 / n2) // divisão
console.log(n1 % n2) // modulo

console.log(n2 == n3) // igual a 
console.log(n2 === n3) // identico a 
console.log(n2 !=n3) // diferente de 
console.log(n2 !== n3) // não identico

console.log(n1 > n2)
console.log(n1 < n2)
console.log(n1 >= n2)
console.log(n1 <= n2)

let a = true
let b = false

/*Operadores Lógicos*/
console.log(a && b) // E AND
console.log(a || b) // OU OR
console.log(!a)
console.log(!b)