let soma = 0

for (let cont = 0; cont < 5; cont++){
    let nome = prompt ("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    document.write("O nome é: " + nome + "e sua idade é: "+ idade + "<br/>")
    soma += idade
}

document.write( "E a média das idades é:" + (soma/5))