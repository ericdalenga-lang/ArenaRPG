import { Personagem } from "./Personagem.js";
export class Heroi extends Personagem {
  constructor(nome, vida, ataque, defesa, emoji = "🧍") {
    super(nome, vida, ataque, defesa, emoji);
    this.classe = "Heroi";
    this.especialUsado = false;
  }

  golpeEspecial(alvo) {
    if (this.especialUsado) {
      return this.atacar(alvo);
    } else {
    this.especialUsado = true;
    const danoReal = alvo.receberDano(this.ataque * 2);
    return `✨ ${this.nome} usou GOLPE HEROICO em ${alvo.nome}: ${danoReal} de dano!`;
    }
  }

  resetar() {
    super.resetar();
    this.especialUsado = false;
  }
}

atacar(alvo) {
  if (Math.random() < 0.4) {
    return this.golpeEspecial(alvo);
  } 
  return super.atacar(alvo);
}