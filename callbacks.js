const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function (nome) {
//   console.log(nome)
// });

//Arrow Function
// nomes.forEach((nome) => {
//   console.log(nome)
// });

function imprimeNome (nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);

//OBS: Se abrir parenteses no imprimeNome, vai ser executado a função e vai retornar o elemento
//então como queremos apenas os nomes, e usar o forEach(), utiliza o nome da função sem paresenteses
//ForEach() é bem utilizado no mercado de trabalho