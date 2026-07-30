// ============================================================================
//  Personagem.js  —  A CLASSE BASE
//  👉 Vamos digitar JUNTOS. Siga os passos marcados com  // PASSO
//  Dica: como usamos "export", este arquivo é um MÓDULO ES e já roda em
//        Strict Mode automaticamente (não precisa escrever "use strict").
// ============================================================================

// PASSO 1 — Declare a classe base e já exporte ela.
//           Lembre: nome de classe começa com MAIÚSCULA.
export class Personagem {
  // PASSO 2 — Crie o constructor com os atributos do personagem.
  //           Parâmetros: nome, vida, ataque, defesa, emoji (padrão "🧍")
  constructor(nome, vida, ataque, defesa, emoji = "🧍") {
    this.nome = nome;
    this.vida = vida;
    this.vidaMax = vida;
    this.ataque = ataque;
    this.defesa = defesa;
    this.emoji = emoji;
    this.classe = "Personagem";
  }

  estaVivo() {
    return this.vida > 0;
  }

  // PASSO 4 — Método receberDano(dano):
  //   const danoReal = Math.max(1, dano - this.defesa)
  //   diminua this.vida (sem passar de 0) e retorne danoReal.
  receberDano(dano) {
    const danoReal = Math.max(1, dano - this.defesa);
    this.vida = Math.max(0, this.vida - danoReal);
    return danoReal;
  }

  // PASSO 5 — Método atacar(alvo):
  //   chame alvo.receberDano(this.ataque), guarde em danoReal
  //   e retorne uma frase para o log, ex:
  //   `${this.emoji} ${this.nome} atacou ${alvo.nome} causando ${danoReal} de dano!`
  atacar(alvo) {
    const danoReal = alvo.receberDano(this.ataque);
    return `${this.emoji} ${this.nome} atacou ${alvo.nome} causando ${danoReal} de dano!`;
  }

  // PASSO 6 — Método resetar(): devolve this.vida = this.vidaMax
  //   (usado para "curar" antes de cada nova batalha)
  resetar() {
    this.vida = this.vidaMax;
  }

  // PASSO 7 — MÉTODO ESTÁTICO paraLista(personagens):
  //   Escreva  static paraLista(personagens) { ... }
  //   Retorne personagens.map((p, indice) => ({ ... }))
  //   com: id: indice, nome, classe, vida: p.vidaMax, ataque, defesa, emoji.
  //   Obs: método estático é chamado por  Personagem.paraLista(...)
  static paraLista(personagens) {
    return personagens.map((p, indice) => ({
      id: indice,
      nome: p.nome,
      classe: p.classe,
      vida: p.vidaMax,
      ataque: p.ataque,
      defesa: p.defesa,
      emoji: p.emoji,
    }));
  }
}
