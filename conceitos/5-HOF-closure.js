// Passar uma função como argumento
function somar({x, y}){
   return x + y
}

function subtrair({x, y}){
    return x - y
}

function aplicarOperacao({numero1, numero2, operacao}){
    return operacao({x:numero1, y:numero2})
}

console.log(aplicarOperacao({numero1: 5, numero2: 3, operacao: somar}))
console.log(aplicarOperacao({numero1: 5, numero2: 3, operacao: subtrair}))

// retornar uma função pra ser executada depois. - Closure

function criaMultiplicador(fator){
    return function(numero){
        return numero * fator;
    }
}

const multiplicador2 = criaMultiplicador(2);
const multiplicador5 = criaMultiplicador(5);

console.log('Resultado de multiplicar 8 por 2: ', multiplicador2(8));
console.log('Resultado de multiplicar 8 por 5: ', multiplicador5(8));