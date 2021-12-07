const pessoas = [
    {
      sexo: "F",
      nome: "Abigael Natte",
      altura: "1.61",
    },
    {
      sexo: "M",
      nome: "Ramon Connell",
      altura: "1.75",
    },
    {
      sexo: "M",
      nome: "Jarret Lafuente",
      altura: "1.55",
    },
    {
      sexo: "F",
      nome: "Ansel Ardley",
      altura: "1.67",
    },
    {
      sexo: "F",
      nome: "Jacki Shurmer",
      altura: "1.75",
    },
    {
      sexo: "M",
      nome: "Jobi Mawtus",
      altura: "1.88",
    },
    {
      sexo: "M",
      nome: "Thomasin Latour",
      altura: "1.67",
    },
    {
      sexo: "F",
      nome: "Lonnie Verheijden",
      altura: "1.63",
    },
    {
      sexo: "M",
      nome: "Alonso Wannan",
      altura: "1.92",
    },
    {
      sexo: "F",
      nome: "Bendite Huggett",
      altura: "1.80",
    },
    {
      sexo: "M",
      nome: "Jobi Mawtus",
      altura: "1.88",
    },
    {
      sexo: "M",
      nome: "Thomasin Latour",
      altura: "1.67",
    },
    {
      sexo: "F",
      nome: "Lonnie Verheijden",
      altura: "1.63",
    },
    {
      sexo: "M",
      nome: "Alonso Wannan",
      altura: "1.92",
    },
    {
      sexo: "F",
      nome: "Bendite Huggett",
      altura: "1.80",
    },
  ];


/*Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
a maior e a menor altura do grupo;
a média de altura das mulheres;
o número de homens.
 */

function MaiorMenor(array){
    let maior = 0;
    let menor = array[0];
    array.forEach(x => {
        if (x.altura > maior){
            maior = x.altura;
        }
        if (x.altura < menor){
            menor = x.altura;
        }
    });
    return "A maior altura é: "+ maior +  "\nE a menor altura é: " + menor;
}

function MediaAlturaMulheres(array){

    let mulheres = array.filter(function(x){
        return x.sexo == "F";
    });

    let soma =0;
    let total =0;

    mulheres.forEach(x => {
        soma = soma + parseFloat(x.altura);
        total++;
    })

    return soma / total;
}

function NumeroHomens(array){
    total = 0;
    array.forEach(x => {
        if (x.sexo == "M"){
            total++;
        }
    })
    return "Há um total de " + total + " homens."
}

console.log(MaiorMenor(pessoas));

console.log(MediaAlturaMulheres(pessoas));

console.log(NumeroHomens(pessoas));

