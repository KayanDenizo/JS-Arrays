const alunos = ['Ana', 'Marcos', 'Roberto', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice)=> {
  return medias[indice] < 7; //True ou False
});


console.log(reprovados);