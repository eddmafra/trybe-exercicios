function substituaX (nome) {
	const frase = 'Tryber x aqui!';
	let novaFrase = frase.split('');
	for (let i = 0; i < novaFrase.length; i += 1) {
		(novaFrase[i].includes('x')) ? novaFrase[i] = nome : novaFrase[i] = novaFrase[i];
	}
	let saudacao = novaFrase.join('')
	return saudacao;
}

function minhasSkills (saudacao) {
	const skills = ['HTML', 'CSS', 'JavaScript'];
	let habilidades = `${substituaX(saudacao)} Minhas três principais habilidades são ${skills}`;
	return habilidades;
}

console.log(minhasSkills('Eduardo'))