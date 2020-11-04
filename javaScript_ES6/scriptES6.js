

let meuNumero = 25;
let meuTexto = 'Meu texto';

console.log(meuNumero + meuTexto);

//Tipagem dinamica
let variavel = 30;
variavel = 'trinta'

console.log(variavel);

//Typescript
function getName() {
    return 'Eduardo Alves Francisco'
}
function logFn(fn) {
    console.log(fn())
}
const logFnResult = logFn;
logFnResult(getName);