function PodeSubir(altura, acompanhada){
    if(altura >= 1.4 && altura <= 2.0){
        console.log("Acesso autorizado")
    }
    else if ((altura < 1.4 && altura >= 1.20) && acompanhada == true){
        console.log("Acesso autorizado somente com acompanhante")
    }
    else {
        console.log("Acesso Negado!")
    }
}


PodeSubir(1.75, false);

let a2 = 2.25;

PodeSubir(a2, true);

let a3 = 1.35;

PodeSubir(a3, false);

let a4 = 1.28;

PodeSubir(a4, true);

let a5 = 1.18;

PodeSubir(a5, true);
    