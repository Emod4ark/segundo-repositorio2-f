 botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

            if(palavras[i] == palavras[j]) {const
                frequencias[i]++;
            }
function mostraPalavraChave() {
    //alert("Fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto) {
    //let palavras = texto.split(/\s+/);  "retirar espaços"
    //let palavras = texto.split(/[^a-zA-Z]+/); "letras minusculas e maiusculas"
    let palavras = texto.split("/\P{L}+/u/");  /* \P negação;  {L} conjunto de letras; + uma ou mais ocorrências; u Unicode*/

    let frequencias = [];

    for ( let i in palavras) {
        frequencias[i] = 0;
        for ( let j in palavras) {
        }
    }

    console.log(frequencias);

    return palavras;
}