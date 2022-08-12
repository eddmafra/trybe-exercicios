// function testingScope(escopo) {
// 	if (escopo === true) {
// 		let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
// 		ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
// 		console.log(ifScope);
// 	} else {
// 		let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
// 		console.log(elseScope);
// 	}

// }

// testingScope(false)

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
	let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
};
sortOddsAndEvens(oddsAndEvens)
console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉