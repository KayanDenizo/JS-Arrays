const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

// const nomesPadronizados = nomes.map((nome)=> {
//   return nome.toUpperCase();
// });

//Em vez de utilizar o "return", neste caso podemos utilizar apenas a arrow function e ficaria assim:

const nomesPadronizados = nomes.map((nome)=> nome.toUpperCase());

console.log(nomesPadronizados);