// ! O objetivo da Herança é reusar o código, é sempre importante priorizar a composição. No entanto é importante enteder a herança do JavaScript

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() { }
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)