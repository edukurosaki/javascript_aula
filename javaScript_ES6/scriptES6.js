
let meuNumero = 25;
let meuTexto = 'Meu texto';

console.log(meuNumero + meuTexto);

//Tipagem dinamica
let variavel = 30;
variavel = 'trinta'

console.log(variavel);

//Funções de primeira classe
function getName() {
    return 'Eduardo Alves Francisco'
}
function logFn(fn) {
    console.log(fn())
}
const logFnResult = logFn;
logFnResult(getName);

//Clousure - escopos
function init() {
    const exemplo = 'Esta variavel'
    return function () {
        console.log('1 - o valor da variavel de exemplo e : ' + exemplo );

        return function () {
            console.log('2 - o valor da variavel de exemplo e :' + exemplo)

            return function () {
                console.log('3 - o valor da variavel de exemplo e :' + exemplo);
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();

//Currying - 

function soma(a) {
    return function (b) {
        return a + b;
    }
}
const soma2 = soma(3);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));
console.log(soma2(7));


const user = {
    name: 'Eduardo',
    lastName: 'Alves Francisco'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: user.name +" "+ user.lastName
    }
}
const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);