let anoAtual = 2023//prompt("digite seu ano atual")
let anoNascimento = 1999//prompt("digite seu ano nascimento")

const calcularIdade = (anoAtual,anoNascimento) => {
    return anoAtual - anoNascimento
}


const saida = calcularIdade(anoAtual,anoNascimento)
//document.write(saida)

module.exports = {calcularIdade}
