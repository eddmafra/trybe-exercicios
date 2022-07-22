// // Ex. 1
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf('Serviços');

// console.log(menuServices);

// //Ex. 2

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio') ;

// console.log(indexOfPortfolio);

// // Ex. 3

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');

// console.log(menu);

// var numero = 7;

// for (index = 1; index <= 9; index += 1 ) {
//     console.log(numero*index);
// }

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (index = 0; index < groceryList.length; index += 1){
//     console.log(groceryList[index]);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let elemento of names) {
//     console.log(elemento);
// }


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}
