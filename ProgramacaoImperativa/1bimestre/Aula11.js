let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela" ]
let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

for (let i = 0; i < filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase();
    
}

console.log(filmes);

for (let j = 0; j < 5; j++) {
    var a = filmes2.shift();
    filmes.push(a.toUpperCase());
}

console.log(filmes);

for (let k = 0; k < euroScores.length; k++) {
    if(asiaScores[k] == euroScores[k]){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

var participanteA = [5, 8, 4, 9, 5] 
var participanteB = [8, 7, 8, 6, 8] 
var participanteC = [7, 5, 10, 8, 3] 

function pontuacaoMedia(participante){
    var soma = 0;
    for (let i = 0; i < participante.length; i++) {
        soma = soma + participante[i];
    }
    var media = soma / participante.length;
    return media;
}


console.log("================= Medias =================")
console.log("Particpante A = ",pontuacaoMedia(participanteA));
console.log("Particpante B = ",pontuacaoMedia(participanteB));
console.log("Particpante C = ",pontuacaoMedia(participanteC));
console.log();

function pontuacaoMaior(participante){
    var maior = 0;
    for (let i = 0; i < participante.length; i++) {
        if (maior < participante[i]) {
            maior = participante[i];
        }
    }
    return maior; 
}

console.log("============== Maiores Notas ==============")
console.log("Particpante A = ",pontuacaoMaior(participanteA));
console.log("Particpante B = ",pontuacaoMaior(participanteB));
console.log("Particpante C = ",pontuacaoMaior(participanteC));
