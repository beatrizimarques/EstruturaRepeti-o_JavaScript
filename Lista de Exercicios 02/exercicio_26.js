let numero = parseInt(prompt("Digite um número:"))
let cont = 1
let soma = 0

do{
    if (cont % 2 == 0) {
        soma+=cont
    }
    cont++
}while (cont<=numero)

document.write("A soma de todos os números pares entre 1 e " + numero + " é: " + soma)