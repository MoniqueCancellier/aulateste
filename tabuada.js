let nTabuada = 5//Number(prompt("Digite o número da tabuada:"))



const calcularTabuada = (nTabuada) => {
  let saida = ""

  for (i = 0; i <= 10; i++) {
    resultado = i * nTabuada
    saida = saida + (i + 'x' + nTabuada + '=' + resultado + '<br>')
  }
  //console.log(saida)
  return saida
}

const saida = calcularTabuada(nTabuada)
//document.write(saida)

module.exports = {calcularTabuada}