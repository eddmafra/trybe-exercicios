// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85


const numbers = [50, 85, -30, 3, 15];

const bigger = numbers.reduce((bigger, number) => (bigger + number), 0);
console.log(bigger); // 85

const maior = numbers.reduce((maiorValorAteAgora, valorAtual) => {
	console.log(maiorValorAteAgora, valorAtual);
	if (valorAtual > maiorValorAteAgora) {
	return valorAtual;
	}
return maiorValorAteAgora;
});

console.log(maior);