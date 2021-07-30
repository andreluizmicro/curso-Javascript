const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(10)
imprimirResultado(6.9)
imprimirResultado('Epa!') // Ter cuidado com o que foi passado por parametro