function adicionar(x, y){
    return x + y;
}

function subtrair(x, y){
    return x - y;
}

function multiplicar(x, y){
    return x * y;
}

function dividir(x, y){
    return x / y;
}

function quadradorDoNumero(x){
    return multiplicar(x, x);
}

function mediaDeTres(x, y, z){
    var a = dividir(adicionar(adicionar(x, y), z), 3);
    return a;
}

function calculoPorcentagem(x, y){
    var a = dividir(multiplicar(x, y), 100);
    return a;
}

function geradorPorcentagem(x, y){
    var a = dividir(multiplicar(x, 100), y);
    return a;
}

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(adicionar(5, 10));
console.log(subtrair(18, 19));
console.log(multiplicar(5, 10));
console.log(dividir(75, 15));
console.log(dividir(15, 0));
console.log(quadradorDoNumero(2));
console.log(mediaDeTres(5, 10, 6));
console.log(calculoPorcentagem(300, 15));
console.log(geradorPorcentagem(25, 500));





