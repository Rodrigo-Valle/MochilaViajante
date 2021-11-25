let cadastro = {
    "Nome" : "Rodrigo",
    "Apelido" : "guigo",
    "Idade" : 30,
    "Usuario" : "guigo",
    "Email" : "rodrigo@gmail.com"
};

console.log(cadastro);

function Conta(numeroConta, tipoConta, saldo, titularConta) {
    this.numeroConta = numeroConta,
    this.tipoConta = tipoConta,
    this.saldo = saldo,
    this.titularConta = titularConta  
}

let contaTeste = new Conta(1, "PF", 200, "Jorge");
console.log(contaTeste);

let conta1 = new Conta(5486273622, "Conta Corrente", 27771,	"Abigael Natte");
let conta2 = new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let conta3 = new Conta(9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente");
let conta4 = new Conta(1761924656,	"Conta Poupança",	32415,	"Ansel Ardley");
let conta5 = new Conta(7401971607,	"Conta Poupança",	18789,	"Jacki Shurmer");
let conta6 = new Conta(630841470,	"Conta Corrente",	28776,	"Jobi Mawtus");
let conta7 = new Conta(4223508636,	"Conta Corrente",	2177,	"Thomasin Latour");
let conta8 = new Conta(185979521,	"Conta Poupança",	25994,	"Lonnie Verheijden");
let conta9 = new Conta(3151956165,	"Conta Corrente",	7601,	"Alonso Wannan");
let conta10 = new Conta(2138105881,	"Conta Poupança",	33196,	"Bendite Huggett");

let listaContas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10];



function Banco(clientes) {
    Clientes = clientes;
    
    this.listarclientes = function(nome){
        for (let i = 0; i < Clientes.length; i++) {
            if(nome == Clientes[i].titularConta){
                return Clientes[i];
            }
        }
    }

    this.Deposito = function(valor, titular){
        for (let i = 0; i < Clientes.length; i++) {
            if(titular == Clientes[i].titularConta){
                Clientes[i].saldo = Clientes[i].saldo + valor;
                return "sucesso, o saldo atualo é: " + Clientes[i].saldo;
            }
        }    
    }

    this.Saque = function(valor, titular){
        for (let i = 0; i < Clientes.length; i++) {
            if(titular == Clientes[i].titularConta){
                if(Clientes[i].saldo < valor){
                    return "Fundos Insuficientes"
                }
                else{
                    Clientes[i].saldo = Clientes[i].saldo - valor;
                    return "sucesso, o saldo atualo é: " + Clientes[i].saldo;
                }
                
            }
        }    
    }
};

let banco = new Banco(listaContas);
console.log(banco.listarclientes("Abigael Natte"));
console.log(banco.Deposito(500, "Abigael Natte"));
console.log(banco.Saque(10000, "Abigael Natte"));


