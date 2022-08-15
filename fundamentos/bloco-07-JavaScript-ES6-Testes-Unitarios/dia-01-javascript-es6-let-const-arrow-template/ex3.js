const botao = document.getElementById('btn');
const contador = document.querySelector('.contador');
let conta = 0;

botao.addEventListener('click', clickCount);
function clickCount() {
		conta += 1;
		contador.innerText = `${conta}`;
		console.log(conta);
}
console.log(contador);

