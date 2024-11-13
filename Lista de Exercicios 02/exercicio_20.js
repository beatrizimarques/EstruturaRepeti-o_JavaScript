let numero = parseInt(prompt("Digite um número:"))
let cont = 0

do {
    let multi = numero*cont
    document.write( numero + " X " + cont + " = " + multi + "<br/>")
    cont++
} while ( cont <= 10)

