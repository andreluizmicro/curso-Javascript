function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Cadeira Gamer', 995.0))
console.log(criarProduto('Notebook', 1995.49))