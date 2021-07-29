function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // se trabalho1 for vdd então ja inferi o resultado
    const compraTv50 = trabalho1 && trabalho2 // se trablaho1 é verdadeiro precisa verificar o trabalho2
    // const compraTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário


    // Neste caso o objeto já cria as chaves com o nome da const
    return { comprarSorvete, compraTv50, compraTv32, manterSaudavel } // retorna um objeto
}

console.log("========================")
console.log(compras(true, true))
console.log("========================")
console.log(compras(true, false))
console.log("========================")
console.log(compras(false, true))
console.log("========================")
console.log(compras(false, false))