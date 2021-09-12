// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietatio: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietatio.endereco.numero = 1000
carro['proprietatio']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro);

delete carro.condutores
delete carro.proprietatio.endereco
delete carro.calcularValorSeguro
console.log(carro);
// Não causa erro e sim diz que é undefined
console.log(carro.condutores)

// Já no exemplo ai sim temos erro, pois estou tentando ver o tamanho de algo que não existe(undefined)
console.log(carro.condutores.length)
