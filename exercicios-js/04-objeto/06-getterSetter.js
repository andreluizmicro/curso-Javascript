const sequencia = {
    _valor: 1, // conveção -> Esta explicíto que essa variável só será acessada internamente.
    get valor() { // Vantagem é que podemos fazer alguma tipo de validação ou processamento
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)