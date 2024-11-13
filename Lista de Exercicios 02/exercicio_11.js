let numero = parseInt(prompt("Digite um número:"))
let cont = 1
let soma = 0

while (cont<=numero){
    if (cont % 2 == 0) {
        soma+=cont
    }
    cont++
}

document.write("A soma de todos os números pares entre 1 e " + numero + " é: " + soma)
