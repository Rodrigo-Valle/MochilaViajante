const alice = [23,69,32];
const bob = [12,65,43];

function encontrarGanhador(a, b){
    var pontoAlice = 0;
    var pontoBob = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontoAlice++;
        }
        else if (alice[i] < bob[i]){
            pontoBob++;
        }
        else {}
    }
    
    if (pontoAlice == pontoBob) {
        return "Empate";
    }
    else if (pontoAlice < pontoBob) {
        return "Bob";
    }
    else {
        return "Alice"
    }
}

console.log("O ganhador é: " + encontrarGanhador(alice, bob));

function digitalHouse(x, y){
    for (let i = 1; i <= 100; i++) {
        if(i % x == 0 && i % y == 0) {
            console.log("Digital House")
        }
        else if (i % x == 0){
            console.log("Digital")
        }
        else if (i % y == 0){
            console.log("House")
        }
        else{
            console.log(i)
        }
        
    }
}

digitalHouse(3, 5);

function somaArray(array){
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
        
    }
    return soma;
}

console.log(somaArray(alice));

function joinArray(array){
    let palavra = "";
    for (let i = 0; i < array.length; i++) {
        palavra = palavra + array[i];
        
    }
    return palavra;
}

let teste = ["o", "l", "a", " ", "m", "u", "n", "d", "o", "!"];

console.log(joinArray(teste))