const Aluno = require("./Aluno");
const Estudantes = require("./Estudantes");



let curso = {
    NomedoCurso : "DigitalHouse",
    FaltasMaximas : 3,
    Estudantes : [],
    AdicionarAluno : function(aluno){
        return this.Estudantes.push(aluno);
    },
    Aprovado : function(aluno){
        if (aluno.CalcularMedia() > 6 && aluno.QtdFaltas < this.FaltasMaximas) {
            return true;
        }
        else if (aluno.CalcularMedia()*1.1 > 6 && aluno.QtdFaltas == this.FaltasMaximas ){
            return true;
        }
        else{
            return false;
        }
    },
    EstudantesAprovados : function(){
        let aprovados = [];
        this.Estudantes.forEach(x => {
            if (this.Aprovado(x)) {
                aprovados.push(x.Nome + " teve media de " + x.CalcularMedia() + " e " + x.QtdFaltas + " Faltas, foi aprovado!") 
            }
            else{
                aprovados.push(x.Nome + ": teve media de: " + x.CalcularMedia() + " e " + x.QtdFaltas + " Faltas, foi reprovado.")
            }

        })
        return aprovados;
    }
}

/* Testes */


let a1 = new Aluno("Joao", 5, [7,6,4]);
a1.AdicionarFaltas();
console.log("Media: " + a1.CalcularMedia() + " \nFaltas: " + a1.QtdFaltas);

Estudantes.forEach(x => {
    curso.AdicionarAluno(x);
})

curso.AdicionarAluno(a1)

console.log(curso.EstudantesAprovados());


