function polegadas(polegada) {
    console.log(polegada * 2.54)
}

polegadas(1);

function url(string){
    console.log("http://www." + string + ".com.br")
}

url("DH");

function exclamacao(string){
    console.log(string + "!");
}

exclamacao("Corra");

function idadeCachorro(idade){
    return idade * 7;
}

console.log(idadeCachorro(5));

function horaTrabalho(salario){
    return salario / 160;
}

console.log(horaTrabalho(2500));

function calculoImc(peso, altura){
    imc = peso / Math.pow(altura, 2)
    console.log("imc = " + imc)
}

calculoImc(75.3, 1.74)

function maiusculas(minusculo) {
    return minusculo.toUpperCase();
}

console.log(maiusculas("função maiusculo"));

function tipoParametro(parametro){
    return typeof parametro;
}

console.log(tipoParametro(12.457));

function circunferencia(raio){
    return 2 * Math.PI * raio;
}

console.log(circunferencia(5));