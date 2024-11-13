
let soma = 0
let cont = 0

do {
    let numero = parseInt(prompt("Digite um número:"))
    soma += numero
    cont++
} while (cont<5)

let media = soma/5
document.write("A média entre os números é: " + media)