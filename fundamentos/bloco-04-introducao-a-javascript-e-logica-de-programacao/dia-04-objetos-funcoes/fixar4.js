let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let footballer = {
	name: 'Marta',
	lastName: 'Silva',
	age: 34,
	medals: {
		golden: 2,
		silver: 3
	},
	bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log ('A jogadora ' + footballer.name + ' ' + footballer.lastName + ' tem ' + footballer.age + ' anos de idade.');

console.log('A jogadora ' + footballer.name + ' ' + footballer.lastName + ' foi eleita a melhor do mundo por ' + footballer.bestInTheWorld.length + ' vezes.');