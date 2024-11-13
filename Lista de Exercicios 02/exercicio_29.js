let numero = parseInt(prompt("Digite um número:"))
let soma = 1
let cont = 1

do{
    soma *= cont
    cont++        
}while (cont <= numero) 

document.write ("O fatorial de " + numero + " é: " + soma)