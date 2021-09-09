/**
 * Questão 3
 * Substitua cada letra do texto passado por sua posição no alfabeto. Se alguma
 * coisa no texto não for uma letra, ignore e não devolva.
 */
const alfabeto = String.fromCharCode(...Array(123).keys()).slice(97)

console.log(alfabeto);

function trocarLetras(texto) {
    for (letra in alfabeto) {
        texto.replace(alfabeto[letra],)

    }
    //console.log(texto)
}

trocarLetras("O pôr do sol se põe ao meio-dia.")