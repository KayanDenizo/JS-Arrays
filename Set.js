const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//set = conjunto

//para não perder o array, e ter que ficar com o Set(), cria uma nova const com spread operator
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);