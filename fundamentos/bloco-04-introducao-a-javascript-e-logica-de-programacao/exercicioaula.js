// Exercícios Aula 4.3

// [ ] 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.}

let soma = 0;

for (let i=1; i <= 50; i += 1){
	soma += i;
}
console.log ('A soma é:', soma);

// [ ] 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let divisivel = 0;

for (let i=2; i <= 150; i += 1){
	if (i % 3 === 0) {
		divisivel += 1;
	}
}
if (divisivel === 50) {
	console.log ('Você liberou a Mensagem secreta, existem ', divisivel, ' números divisiveis por 3');
}


// [ ] 3. Crie um algoritmo que recebe a idade de PessoaX, PessoaY e PessoaZ e imprime quem é a mais nova no formato: "Pessoa" é a mais nova

let pessoaX = 10;
let pessoaY = 10;
let pessoaZ = 10;

if (pessoaX < 0 || pessoaY <0 || pessoaZ <0) {
	console.log ('Idade inválida')
}
else if (pessoaX < pessoaY && pessoaX < pessoaZ) {
	console.log ('PessoaX é a mais nova');
}
else if (pessoaY < pessoaX && pessoaY < pessoaZ) {
	console.log ('pessoaY é a mais nova');
}
else if (pessoaZ < pessoaX && pessoaZ < pessoaY) {
	console.log ( 'pessoaZ é a mais nova');
}
else if (pessoaX === pessoaY && pessoaX < pessoaZ || pessoaX === pessoaZ && pessoaX < pessoaY || pessoaY === pessoaZ && pessoaY < pessoaX ){
 console.log ('Tem gemeos aqui?');
}
else if (pessoaX === pessoaY && pessoaY === pessoaZ) {
	console.log ('Todos tem a mesma idade');
}

