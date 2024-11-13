let n = parseInt(prompt("Entre com um número inteiro:"))
let divisor = 1

while (divisor < n) {
  if (n % divisor === 0) {
    document.write ("Divisores de " + n + ":" +  divisor + "<br/>")
  }
  divisor++
}
