//for in para objetos

let usuario = {
    nome: "Rodrigo",
    idade: 31,
    telefone: "119999999",
    endereco: {
        rua: "Rua qualquer",
        numero: "12121",
        cidade: "São Paulo",
        estado: "SP"
    }


};

for (let item in usuario){
    console.log(item)
}


//for of para arrays
let array = ["banana", "maca", "mamao"];

for(let fruta of array){
    console.log(fruta)
}