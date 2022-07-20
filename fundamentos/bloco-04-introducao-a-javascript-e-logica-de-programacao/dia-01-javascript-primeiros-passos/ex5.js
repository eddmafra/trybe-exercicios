//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

const alpha = 40;
const beta = 100;
const teta = 40;

if (alpha <= 0 || beta <= 0 || teta <= 0) {
    console.log ('Mensagem de erro genérica - seus ângulos estão inválidos ');
}

else if (alpha + beta + teta === 180) {
    console.log ('true')
}

else {
    console.log ('false');
}