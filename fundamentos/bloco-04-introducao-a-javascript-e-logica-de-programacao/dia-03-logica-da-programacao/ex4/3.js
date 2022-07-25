// // Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial =1;

// for (let i = 1; i <= 10; i += 1){
// 	fatorial = fatorial*i;
// }
// console.log (fatorial);

// // 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let palavra = "Trybe";

// var palavraArray = palavra.split("");
// var novaPalavra = [];

// for (let i =0; i < palavraArray.length; i += 1){
// 	novaPalavra[i] = palavraArray[palavraArray.length-i-1];
// }

// var palavraInvertida = novaPalavra.join("");
// console.log (palavraInvertida);

// // 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let menorPalavra = array[0];

// for (i=0; i < array.length; i +=1) {
// 	if (menorPalavra.length > array[i].length) {
// 		menorPalavra = array[i]
// 	}
// }
// console.log (menorPalavra);

// let maiorPalavra = array[0]

// for (i=0; i < array.length; i +=1) {
// 	if (maiorPalavra.length < array[i].length) {
// 		maiorPalavra = array[i]
// 	}
// }
// console.log (maiorPalavra);

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let bigPrime = 0;

for (let i = 2; i <= 50; i += 1) {
  let primo = false;
  for (let j = 2; j <= i; j += 1) {
    if (i % j === 0);
    primo = true;
  }

  if (primo === true) {
    bigPrime = i;
  }
}
console.log(bigPrime);
