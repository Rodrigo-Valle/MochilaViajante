let numeros = [10, 15, 20, 18, 16, 14];

console.log(numeros[5]);
numeros[3] = 19;
numeros.push(12);
numeros.shift(23);
let numeros2 = [numeros.pop()];
let comp = numeros[0] == numeros2[0];
numeros2.push(comp);

console.log(numeros);
console.log(numeros2);

let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length - 1]);

//let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
//console.log(grupoDeAmigos[1][0]);

let str = "una string qualquer";
let grupoDeAmigos = [[45, 89, 0], ["Digital", "House", true],["string", "123","false", 54, true, str]];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);


let numerosInversosFacil = numeros.reverse();
console.log(numerosInversosFacil);

console.log(mprimirInverso(numeros));





