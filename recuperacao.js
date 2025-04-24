class Personagem{
    #vida
    #força
    #mana
    constructor(vida, força, mana){
      this.vida = vida
      this.força = força
      this.mana = mana
    }

    get vida() {
        return this.#vida;
    }
    set vida(vida) {
        this.#vida = vida;
    }
    get força() {
        return this.#força;
    }
    set força(força) {
        this.#força = força;
    }
    get mana() {
        return this.#mana;
    }
    set mana(mana) {
        this.#mana = mana;
    }
}

class Guerreiro extends Personagem{
    
 constructor(atacar, defender, vigiar){
    this.atacar = atacar
    this.defender = defender
    this.vigiar = vigiar

 }
 atacar(){
    this.atacar += 6
    console.log('atacar!')
}
defesa(){
    this.defesa += 4
    console.log('defesa!')
}
vigiar(){
    this.vigiar = 0 
    console.log('vigiando!')
}
}

class Mago extends Personagem{
    constructor(atacar, defender, usarMagia){
        this.atacar = atacar
        this.defender = defender
        this.usarMagia = usarMagia
    
 }
 atacar(){
    this.atacar += 5
    console.log('atacar!')
}
defesa(){
    this.defesa += 4
    console.log('defesa!')
}
usarMagia(){
    this.usarMagia += 10
    console.log('usando magia!')
}
} 

class Arqueiro extends Personagem{
    constructor(atacar, defender, usarPoder){
        this.atacar = atacar
        this.defender = defender
        this.usarPoder = usarPoder
    
    }
    atacar(){
        this.atacar += 8
        console.log('atacar!')
    }
    defesa(){
        this.defesa += 4
        console.log('defesa!')
    }
    usarPoder(){
        this.usarPoder += 10
        console.log('usando poder!')
    }
}