
// // Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// // de acordo com a faixa etária de uma pessoa.

// let faixaEtaria = 'adulto';

// switch (faixaEtaria) {
//   case 'adolescente':
//     // Caso a variável seja "adolescente" então entraremos na lógica abaixo.

//     console.log('Consulte a classificação do filme');
//     // Quando a pessoa for adolescente essa será a mensagem impressa no console.

//     break;
    
//     // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
//   case 'adulto':
//     // Após implementar a lógica de um case, você pode abrir outro case.
//     // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta

//     console.log('A pessoa adulta é classificada para assistir qualquer filme')
//     //caso seja adulto essa mensagem deverá aparecer no terminal

//     break;
//     // Interrompemos o fluxo novamente caso a pessoa seja adulta
//     case 'idoso':
//       // Repetimos o mesmo processo para o case "idoso"
//       console.log('A pessoa idosa é classificada para assistir qualquer filme');
//       break
//   default:
//     // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
//     // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
//     console.log('só pode assistir filmes livres');
//     // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
// }


// mes = 'trybe';
// let estacaoDoAno = '?';

// switch (mes) {
//     case 'janeiro':
//     case 'fevereiro':
//     case 'março':
//         estacaoDoAno = 'Verão';
//         break;
//     case 'abril':
//     case 'maio':
//     case 'junho':
//         estacaoDoAno = 'Outono';
//         break;
//     case 'julho':
//     case 'agosto':
//     case 'setembro':
//         estacaoDoAno = 'Inverno';
//         break;
//     case 'outubro':
//     case 'novembro':
//     case 'dezembro':
//         estacaoDoAno = 'Primavera';
// }

// console.log(estacaoDoAno); // 'Outono'

let situacao = 'reprovado';

switch (situacao) {
    case 'aprovado':
        console.log ('Aprovado');
        break;

    case 'lista':
        console.log ('Lista de Espera');
        break;
        
    case 'reprovado':
        console.log ('Reprovado');
        break;
    
    default:
        console.log ('Não se aplica');
}