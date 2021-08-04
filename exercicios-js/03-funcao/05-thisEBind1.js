const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // sem this causa erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // this será o objeto passado no binding
falarDePessoa()

const falar2 = pessoa.falar
falar2()