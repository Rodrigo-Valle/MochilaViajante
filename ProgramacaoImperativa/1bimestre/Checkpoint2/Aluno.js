function Aluno(nome, qtdFaltas, notas){
    this.Nome = nome;
    this.QtdFaltas = qtdFaltas;
    this.Notas = notas;
    this.CalcularMedia = function(){
        soma =0;
        notas.forEach(x => {
            soma = soma + x;
        });
        return soma / notas.length
    }
    this.AdicionarFaltas = function(){
        this.qtdFaltas++;
    }
}

module.exports = Aluno;