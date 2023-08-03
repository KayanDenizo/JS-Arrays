const numeros = [100, 200, 300, 400, 500, 600];

//Primeira expressão: é executada apenas uma única vez
//Segunda expressão: é uma condição de execução
//Terceira expressão: é executada sempre no final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
  //oq ta dentro das chaves vai ser executado varias vezes
  //Iteração = cada execução do loop
  console.log(numeros[indice]);
}