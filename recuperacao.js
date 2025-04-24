class Personagem{
    constructor(vida, força, mana){
      this.vida = vida
      this.força = força
      this.mana = mana
    }
}

class Guerreiro extends Personagem{
 constructor(atacar, defender, vigiar){
    this.atacar = atacar
    this.defender = defender
    this.vigiar = vigiar

 }
}

class Mago extends Personagem{
    constructor(atacar, defender, usarMagia){
        this.atacar = atacar
        this.defender = defender
        this.usarMagia = usarMagia
    
 }
}

class Arqueiro extends Personagem{
    constructor(atacar, defender, usarPoder){
        this.atacar = atacar
        this.defender = defender
        this.usarPoder = usarPoder
    
    }
}