class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else {
      ataque = 'shurikens';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new heroi('Tiago', 29, 'ninja');
heroi1.atacar();

let heroi2 = new heroi('Anita', 26, 'mago');
heroi2.atacar();

//testando a autenticação
// testando uma segunda vez
