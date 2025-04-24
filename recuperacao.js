class Personagem{
    #vida
    #força
    #mana
    constructor(vida, força, mana){
      this.vida = vida;
      this.força = força;
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
     super(100, 20, 0);
    this.atacar = atacar;
    this.defender = defender;
    this.vigiar = vigiar

 }
 atacar(alvo){
    console.log('guerreiro ataca!');
    alvo.vida -= this.força;
}
defesa(){
    console.log('defesa!');
}
vigiar(){
    console.log('vigiando!');
}
}


class Mago extends Personagem{
    constructor(atacar, defender, usarMagia){
        super(80, 15, 30);
        this.atacar = atacar;
        this.defender = defender;
        this.usarMagia = usarMagia
    
 }
 atacar(alvo){
    console.log('mago lança magia!');
    alvo.vida -= this.força;
}
defesa(){
    console.log('defesa!');
}
usarMagia(){
    console.log('usando magia!');
}
} 

class Arqueiro extends Personagem{
    constructor(atacar, defender, usarPoder){
        super(90, 18, 10);
        this.atacar = atacar;
        this.defender = defender;
        this.usarPoder = usarPoder
    
    }
    atacar(alvo){
        console.log('arqueiro dispara poder!');
        alvo.vida -= this.força;
    }
    defesa(){
        console.log('defesa!');
    }
    usarPoder(){
        console.log('usando poder!');
    }
}