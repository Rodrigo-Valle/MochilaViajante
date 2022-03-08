function mudarTema() {
    let body = document.querySelector('body');
    body.classList.add('backgroundDark');


    let h1 = document.querySelector('h1');
    h1.style.backgroundColor = "rgb(19, 19, 19)";
    h1.style.color = "rgb(170, 170, 170)";
    h1.style.borderColor = "black";

    let itens = document.querySelectorAll('.item');

    itens.forEach(i => {
        i.classList.add('itensDark');
    })

    let texts = document.querySelectorAll('p, h2');
    texts.forEach(text => {
        text.classList.add("textDark");
    })
}

// isa wagner
// cristian
// juliane alves