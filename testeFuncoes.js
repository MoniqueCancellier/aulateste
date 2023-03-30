const tabuada = require("./tabuada");
const idade = require ("./idade");

const testaFuncao = (nomeFuncao, cenario, valorEsperado, valorRetornado) => {
    if (valorEsperado === valorRetornado) {
      console.log(`Teste da função ${nomeFuncao}: cenário ${cenario} aprovado.`)
    } else {
      console.log(`Teste da função ${nomeFuncao}: cenário ${cenario} reprovado.`)
    }
  }

  let tabuada2 = "0x2=0<br>1x2=2<br>2x2=4<br>3x2=6<br>4x2=8<br>5x2=10<br>6x2=12<br>7x2=14<br>8x2=16<br>9x2=18<br>10x2=20<br>"
  let tabuada3 = "0x3=0<br>1x3=3<br>2x3=6<br>3x3=9<br>4x3=12<br>5x3=15<br>6x3=18<br>7x3=21<br>8x3=24<br>9x3=27<br>10x3=30<br>"
  
  testaFuncao("calcularTabuada", "tabuada 2",tabuada2,tabuada.calcularTabuada(2))
  testaFuncao("calcularTabuada", "tabuada 3", tabuada3, tabuada.calcularTabuada(3))
  testaFuncao("calcularIdade", "1", 33, idade.calcularIdade(2023,1990))
  testaFuncao("calcularIdade", "2", 10, idade.calcularIdade(2023,2013))
