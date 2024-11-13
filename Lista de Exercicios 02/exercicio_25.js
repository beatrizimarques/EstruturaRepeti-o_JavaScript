let n = 0
let soma = 1
let cont = 0

do{
    document.write(n + ",")
    soma+=n
    document.write(soma + ",")
    n+=soma
    cont++
}while (cont<10)