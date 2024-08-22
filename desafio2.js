let vitorias = 59;
let derrotas = 1;
let nivelHeroi;

let resultado = saldoVitorias(vitorias, derrotas);

if (resultado <= 10) {
  nivelHeroi = 'Ferro';
} else if (resultado > 10 && resultado <= 20) {
  nivelHeroi = 'Bronze';
} else if (resultado > 20 && resultado <= 50) {
  nivelHeroi = 'Prata';
} else if (resultado > 50 && resultado <= 80) {
  nivelHeroi = 'Ouro';
} else if (resultado > 80 && resultado <= 90) {
  nivelHeroi = 'Diamante';
} else if (resultado > 90 && resultado <= 100) {
  nivelHeroi = 'Lendário';
} else if (resultado > 100) {
  nivelHeroi = 'Imortal';
}

console.log(
  'O Herói tem saldo de ' + resultado + ' e está no nível ' + nivelHeroi
);

function saldoVitorias(vitorias, derrotas) {
  let total = vitorias - derrotas;
  return total;
}
