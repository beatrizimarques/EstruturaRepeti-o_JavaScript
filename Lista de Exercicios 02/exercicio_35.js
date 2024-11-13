let numero = parseInt(prompt("Digite o número que deseja ver a tabuada:"))

for(let cont = 0; cont<=10; cont++){
    document.write(numero + " X " + cont + " = " + (numero*cont) + "</br>")
}