let soma = 0
let cont= 0

do{
    let nome = prompt ("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    document.write("O nome é: " + nome + ","+ idade + "<br/>")
    soma += idade
    cont++
}while(cont<5)

document.write( "E a média das idades é:" + (soma/5))