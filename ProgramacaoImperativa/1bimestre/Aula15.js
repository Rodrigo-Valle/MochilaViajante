/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)

2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.


*/

const data = require("./modulos/Json");

function ContaBancaria(numero, tipo, saldo, titular){
    this.numeroConta = numero;
    this.tipoConta = tipo;
    this.Saldo = saldo;
    this.Titular = titular;
}





console.log(data);

const contas = [];
for (let i = 0; i < data.length; i++) {
    const conta = new ContaBancaria(data[i].numero, data[i].tipo, data[i].saldo, data[i].titular);
    contas.push(conta);
}


console.log(contas);

const banco = {
    Clientes: contas,
    listarclientes: function(nome){
        for (let i = 0; i < this.Clientes.length; i++) {
            if(nome == this.Clientes[i].Titular){
                return this.Clientes[i];
            }
        }
    }
}    

console.log(banco.listarclientes("Jacki Shurmer"));


