const books = [
	{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

// Adicione o código do exercício aqui:

//  🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// Dica: use a função find.

function authorBornIn1947() {
  console.log(books.find((element) => element.author.birthYear === 1947));
};

// authorBornIn1947();

// 2 - Retorne o nome do livro de menor nome.

// Dica: use a função forEach.

function smallerName() {
	let nameBook = '';
	books.forEach((element) => {
		if (nameBook === '' || nameBook.length > element.name.length) {
			nameBook = element.name;
			return nameBook;
		}
	})
	return nameBook;
}
// console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
	const livro = books.find((element) => element.name.length === 26);
	return livro;
}

// console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  const ordem = books.sort((um, dois) => um.releaseYear > dois.releaseYear ? -1 : 1);
	return ordem;
}

// console.log(booksOrderedByReleaseYearDesc());

//  🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
	Object.values(books.author).every((element) => element.birthYear < 2000);
}

console.log(everyoneWasBornOnSecXX());