// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 

let peca = "REI";
let result = peca.toLowerCase();

if (result === 'peao') {
    console.log('uma ou duas casas à frente');
}
else if (result === 'bispo') {
    console.log ('Em diagonais');
}

else if (result === 'torre') {
    console.log ('em linha reta');
}
else if (result === 'rainha') {
    console.log ('em linha reta e diagonais');
}
else if (result === 'cavalo') {
    console.log ('em L')
}
else if (result === 'rei') {
    console.log ('uma casa em linha reta ou diagonais');
}
else {
    console.log('Essa peça non-ecziste no xadrez');
}