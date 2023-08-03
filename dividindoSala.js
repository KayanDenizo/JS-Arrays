const alunos = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camilo'
];

//Como slice cria um novo array e não altera o original como o push() ou pop(), 
//temos que declarar uma const para o novo array
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2)

console.log(sala1);
console.log(sala2);