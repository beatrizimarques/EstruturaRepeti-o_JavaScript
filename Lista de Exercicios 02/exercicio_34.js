let soma = 0
let n = 0

for( let cont = 0; cont <5; cont++){
    n= parseInt(prompt("Entre com o número:" ))
    soma+=n
}

document.write("A média dos números é: " + (soma/5)) 