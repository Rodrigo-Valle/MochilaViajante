let nome = "José";
let sobrenome = "da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.70;
let plano = true;

let imc = peso / (altura * altura);

console.log(nome + " " + sobrenome + " tem " + idade + 
" anos e seu indice de massa corporea é igual a " + imc.toPrecision(6));