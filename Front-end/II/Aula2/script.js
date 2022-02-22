var vencedor = false;

var pontuacaoJogador = 0;
var pontuacaoMaquina = 0;

var escolhaJogador;
var escolhaMaquina;

while(!vencedor){
    escolhaJogador = prompt("Escolha entre:\n1 - Tesoura\n2 - Papel\n3 - Pedra");
    escolhaMaquina = getRandomInt(1, 4) 

    switch (escolhaJogador) {
        case "1": 
        if(escolhaMaquina == 1){
            alert("Empate");
        }
        else if (escolhaMaquina == 2){
            alert("Vitoria Jogador")
            pontuacaoJogador++;
        }
        else{
            alert("Vitoria Maquina")
            pontuacaoMaquina++;
        }
        break;
            
        case "2":
            if(escolhaMaquina == 2){
                alert("Empate");
            }
            else if (escolhaMaquina == 3){
                alert("Vitoria Jogador")
                pontuacaoJogador++;
            }
            else{
                alert("Vitoria Maquina")
                pontuacaoMaquina++;
            }
            break;            
        case "3": 
            if(escolhaMaquina == 3){
                alert("Empate");
            }
            else if (escolhaMaquina == 1){
                alert("Vitoria Jogador")
                pontuacaoJogador++;
            }
            else{
                alert("Vitoria Maquina")
                pontuacaoMaquina++;
            }
            break;      
        default:
            break;
    }

    if (pontuacaoMaquina == 2 || pontuacaoJogador == 2) {
        vencedor = true;
    }  
}

if(pontuacaoJogador == 2){
    alert("Jogador venceu!");
}else if(pontuacaoMaquina == 2){
    alert("Maquina venceu!");
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
