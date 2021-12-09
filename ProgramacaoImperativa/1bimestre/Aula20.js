/*Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
a média das idades das pessoas que responderam ótimo;
a quantidade de pessoas que responderam regular;
a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
 */

let espectadores = require('./modulos/espectadores');


function MediaIdadeOtimo(array){
    let otimo = array.filter(function(x){
        return x.opiniao == 3;
    })
    let soma = 0;
    otimo.forEach(x => {
        soma = soma + x.idade;
    });
    let media = soma / otimo.length;
    return media;
}

function Regular(array){
    let regular = array.filter(function(x){
        return x.opiniao == 1;
    })

    return regular.length

}

function PorcentagemBom(array){
    let bom = array.filter(function(x){
        return x.opiniao == 2;
    })

    return bom.length * 100 / array.length + "%";
}

console.log(MediaIdadeOtimo(espectadores));
console.log(Regular(espectadores));
console.log(PorcentagemBom(espectadores));