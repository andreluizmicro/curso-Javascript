/**
 * ! JSON -> JavaScript Object Notation x Object
 * SITE VALIDATOR JSON
 * https://jsonformatter.curiousconcept.com/
 */

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        { return a + b + c }
    }
}

// Retorna um tipo textual
console.log(JSON.stringify(obj))

// ! Erro de escrita -> Formato de JSON inválido
//* console.log(JSON.parse("{a: 1, b:2, c:3}"))

//! Também retorna um erro JSON inválido
// * console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))


/**
 * ! FORMA CORRETA DE UM JSON
 * TODO: Um JSON deve ser declarado utilizando a forma a abaixo
 * * Um JSON tem seus atributos e valores do tipo texto e devem estar entre aspas duplas(""), ou teremos um erro no código
 */

// Um Objeto gerado a partir de um texto com formato JSON válido
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

console.log("========================")
console.log(JSON.parse('{"a":1.8, "b":"string", "c": true, "d": {}, "e": [], "f": 10}'))