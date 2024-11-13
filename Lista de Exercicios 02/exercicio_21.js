let numero = parseInt(prompt("Digite um número:"))
let cont = 1

do{
    if( numero % cont == 0){
        document.write( cont + ",")
    }
    cont++
}while (cont<numero)