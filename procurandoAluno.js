const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    //includes() = ve se ta incluso no arquivo

    const [alunos, medias] = listaDeAlunosEMedias;
    //Essa const declara duas const

    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("Caio");