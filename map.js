const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota)=> {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

//map é bem apropriado para reescrever arrays.
// map não modifica o array original
console.log(notasAtualizadas);