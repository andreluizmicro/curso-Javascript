/**
 * FUNÇÔES DE CALLBACK
 * 
 * São funções de retorno, ou funções que são passadas e chamadas quando um evento acontecer
 * 
 */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function impirimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(impirimir)
fabricantes.forEach(fabricante => console.log(fabricante))