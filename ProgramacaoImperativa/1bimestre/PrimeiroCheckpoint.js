let entrada = "cARNE";
let prato = entrada.toLowerCase();
let tempo= 35;
    
switch (prato) {
    case "pipoca":
        Microondas(tempo, 10);
        break;

    case "macarrao":
        Microondas(tempo, 8);
        break;

    case "carne":
        Microondas(tempo, 15);
        break;

    case "feijao":
        Microondas(tempo, 12);
        break;

    case "brigadeiro":
        Microondas(tempo, 8);
        break;

    default:
        console.log("Prato inexistente")
        break;
}

function Microondas(tempo, padrao){
    if (tempo > 3 * padrao ){
        console.log("kabumm");
    }
    else if(tempo > 2 * padrao){
        console.log("A comida queimou");
    }
    else if(tempo < padrao){
        console.log("tempo insuficiente");
    }
    else{
        console.log("Prato pronto, bom apetite!!!")
    }
}
