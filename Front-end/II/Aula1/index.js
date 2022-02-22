// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.


var array = [1, 2, 4, 8];

var soma = array[0];

for (let i = 1; i < array.length; i++) {
    soma = soma + array[i];
    console.log(soma)
}


