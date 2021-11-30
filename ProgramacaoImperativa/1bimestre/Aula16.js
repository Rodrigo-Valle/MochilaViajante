function FizzBuzz(x, y, cb, palavra1, palavra2){
    for (let i = 1; i <= 100; i++) {
        if(i % x == 0 && i % y == 0) {
            console.log(cb(palavra1) + " " + cb(palavra2));
        }
        else if (i % x == 0){
            console.log(cb(palavra1));
        }
        else if (i % y == 0){
            console.log(cb(palavra2));
        }
        else{
            console.log(i);
        }
    }
}
FizzBuzz(2, 5, texto, "Laranja", "Kiwi");

function texto(palavra){
    return palavra;
}

