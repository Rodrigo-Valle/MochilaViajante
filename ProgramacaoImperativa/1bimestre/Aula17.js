/*let arrayNumerosPares = [2, 4, 6, 8, 10]
let arrayNumerosImpares = arrayNumerosPares.map(function(num){
    return num -1;
})

console.log(arrayNumerosImpares);

let arrayNomes = ["Maria", "Joao", "Alberto", "Maria"]
let Marias = arrayNomes.filter(function(nome){
    return nome == "Maria";
});

console.log(Marias);


let Numeros = [2, 4, 6, 8, 10];
let concatena = Numeros.reduce(function( acum, num){
    return acum + " - " + num; 
});

console.log(concatena);*/

/*Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().*/

let numeros = [2, 5, 6, 8, 13, 10]

function numerosDivididosPelaSoma(array){ 
    return NewArray = array.map(function(num){
        return num / array.reduce(function(acumulador, item){
            return acumulador + item;
        })
    })
}  
console.log(numerosDivididosPelaSoma(numeros));

/*Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())*/

let palavras = ["Maria", "Joao", "Reginaldo"];

function PalavrasMaiores(array, num){
    return newArray = array.filter(function(palavra){
        return palavra.length > num;
    })
}

console.log(PalavrasMaiores(palavras, 6));

