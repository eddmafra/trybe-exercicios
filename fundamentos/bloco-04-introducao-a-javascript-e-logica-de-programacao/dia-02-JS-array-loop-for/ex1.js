// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); 

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log (numbers[index]);
// }

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }
// console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 

// let media;

// media = soma/numbers.length;

// console.log(media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; 

// if (media > 20) {
//     console.log('valor maior que 20');
// }
// else {
//     console.log('valor menor ou igual a 20');
// }

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o; 

// let maior = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//   if (maior > numbers[index]) {
//   }
//   else maior = numbers[index]
// }

// console.log (maior);


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     resultado += 1
//   }
// }
// if (resultado === 0){
  // console.log ('Não há números ímpar');
// } 
// else {
  // console.log (resultado);
// }

//Utilizando for, descubra qual o menor valor contido no array e imprima-o; 

// let menor = numbers[0];
//   for (let index = 0; index < numbers.length; index += 1) {
//     if (menor < numbers[index]) {
//     }
//     else {
//       menor = numbers [index]
//     }
// }
// console.log(menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado; 

let array = [];
numero = 0;

for (let index = 0; index < 25; index += 1){
  array.push(numero+index+1);
}
console.log(array);

//  Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. 

let divisao = [];
  for (let i=0; i < array.length; i += 1){
    divisao[i] = array[i]/2;
}
console.log(divisao);