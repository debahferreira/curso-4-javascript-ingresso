function stringParaNumero(str) {
    return parseInt(str);
}

let numero = stringParaNumero('48');
console.log(numero);

//calculadora:

let numero1 = parseInt(prompt('Primeiro número'));
let operacao = prompt('Escolha uma operação (+, -, *, /)');
let numero2 = parseInt(prompt('Segundo número'));

function adicao(numero1, numero2) {
    return numero1 + numero2;
}
function subtracao(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
function divisao(numero1, numero2) {
    return numero1 / numero2;
}

let somar = '+';
let subtrair = '-';
let multiplicar = '*';
let dividir = '/';

function calculadora(numero1, operacao, numero2) {
    if(operacao == somar) {
        console.log(adicao(numero1, numero2));
    } else if(operacao == subtrair) {
        console.log(subtracao(numero1, numero2));
    } else if(operacao == multiplicar) {
        console.log(multiplicacao(numero1, numero2));
    } else if(operacao == dividir) {
        console.log(divisao(numero1, numero2));
    }
}

calculadora(numero1, operacao, numero2);