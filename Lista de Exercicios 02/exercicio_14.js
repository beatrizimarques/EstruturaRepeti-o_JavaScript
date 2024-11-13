let numero = parseInt(prompt("Digite um número:"))
let soma = 1
let cont = 1

while (cont <= numero) {
    soma *= cont
    cont++        
}

document.write ("O fatorial de " + numero + " é: " + soma)