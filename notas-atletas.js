function calcularMedia(atletas) {
    for (let i = 0; i < atletas.length; i++) {
    let notas = atletas[i].notas;
    
       notas = notas.sort();
    
       let notasComputadas = notas.slice(1, 4);
    
    let soma = 0;
    notasComputadas.forEach(function(nota) {
      soma += nota;
    });
    let media = soma / notasComputadas.length;
    
    console.log("Atleta: " + atletas[i].nome);
    console.log("Notas Obtidas: " + notas);
    console.log("Média Válida: " + media);
    console.log();
  }
}
