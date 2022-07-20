const nota = 95;
if (nota >= 80) {
    console.log("Parabéns! Você foi APROVADO!");
}
else if (nota < 80 && nota >=60) {
    console.log("Você está na nossa lista de espera!");
}
else if (nota <60){
    console.log("Você foi reprovado :(")    
}
else {
    console.log("Nota inválida");
}
