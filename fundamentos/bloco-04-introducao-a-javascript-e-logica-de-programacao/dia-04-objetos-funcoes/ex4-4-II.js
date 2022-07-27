// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindromo (palavra) {
// 	let arrayPalavra = palavra.split('');
// 	arrayPalavra.reverse ();
// 	let arvalap = arrayPalavra.join('');
// 	let palindromo = false;

// 	if (palavra === arvalap) {
// 		palindromo = true;
// 	} 
// 	else {
// 		palindromo = false;
// 	}
// return palindromo;
// }

// console.log (verificaPalindromo('abcba'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function indiceMaior (array) {
// 	let indMaior = array[0];
// 	for (i = 0; i < array.length; i +=1) {
// 		if (array[i] > indMaior) {
// 			indMaior = array[i];
// 		}
// 	}
// 	return array.indexOf (indMaior);
// }

// console.log (indiceMaior([2, 3, 6, 7, 10, 1,]))

// 3 -  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function indiceMenor (array) {
// 	let indMenor = array[0];
// 	for (i = 0; i < array.length; i +=1) {
// 		if (array[i] < indMenor) {
// 			indMenor = array[i];
// 		}
// 	}
// 	return array.indexOf (indMenor);
// }

// console.log (indiceMenor ([2, 4, 6, 7, 10, 0, -3]))

//  4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorCaracteres (array){
// 	let maiorPalavra = array[0];
// 	for (let i=0; i < array.length ; i += 1) {
// 		if (maiorPalavra.length < array[i].length) {
// 			maiorPalavra = array[i]
// 		}
// 			}
// 			return maiorPalavra;	
// }

// console.log (maiorCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repete (array) {
	let contRepetido = 0;
	let contNumero = 0;
	let indexNumeroRepetido = 0;
	for (let index in array) {
		let verificaNumero = array[index];
		for (let index2 in array) {
			if(verificaNumero === array[index2]){
				contNumero +=1;
			}
		}
		if (contNumero > contRepetido) {
			contRepetido = contNumero;
			indexNumeroRepetido = index;
		}
		contNumero = 0;
	}
	return array[indexNumeroRepetido]
}


console.log(repete([2, 3, 2, 5, 8, 2, 3]));

function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2