let n = parseInt(prompt("Entre com um número inteiro:"))
let resto =0
let cont =2;

do{
    resto=n%cont;
    if (resto == 0) {
        document.write("Esse numero não é Primo")
        break;
    }
    else if (cont == (n- 1)) {
        if (resto !== 0) {
            document.write("Esse numero é Primo")
        }
    }
    cont++
}while ( cont < n)