let numero = parseInt(prompt("Digite um número:"))
let soma = 0

for (let cont = 0; cont<= numero; cont++){
    if (cont % 2 == 0) {
        soma+=cont
    }
}

document.write("A soma de todos os números pares entre 1 e " + numero + " é: " + soma)