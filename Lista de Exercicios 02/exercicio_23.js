let n = 0
let soma = 1

do{
    document.write(n + ",")
    soma+=n
    document.write(soma + ",")
    n+=soma
}while (soma<500)