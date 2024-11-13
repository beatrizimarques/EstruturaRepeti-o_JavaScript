let n = 0
let soma = 1
let cont = 0

while (cont<10){
    document.write(n + ",")
    soma+=n
    document.write(soma + ",")
    n+=soma
    cont++
}
