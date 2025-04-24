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

atacar(alvo) {
    console.log('Personagem ataca!');
    alvo.vida -= this.força;
}
}

class Guerreiro extends Personagem {
constructor(atacar, defender, vigiar){
    super(100, 20, 0);
    this.atacar = atacar
    this.defender = defender
    this.vigiar = vigiar
}

atacar(alvo){
    console.log('Guerreiro ataca com espada!');
    alvo.vida -= this.força;
}
defesa(){
    console.log('defesa!');
}
vigiar(){
    console.log('vigiando!');
}
}

class Mago extends Personagem {
constructor(atacar, defender, usarMagia){
    super(80, 15, 30);
    this.atacar = atacar
    this.defender = defender
    this.usarMagia = usarMagia
}

atacar(alvo){
    console.log('Mago lança feitiço!');
    alvo.vida -= this.força;
}
defesa(){
    console.log('defesa!');
}
usarMagia(){
    console.log('usando magia!');
}
}

class Arqueiro extends Personagem {
constructor(atacar, defender, usarPoder){
    super(90, 18, 10);
    this.atacar = atacar
    this.defender = defender
    this.usarPoder = usarPoder
}

atacar(alvo){
    console.log('Arqueiro dispara flecha!');
    alvo.vida -= this.força;
}
defesa(){
    console.log('defesa!');
}
usarPoder(){
    console.log('usando poder!');
}
}



// Classe para gerir o jogo
class Jogo {
    constructor() {
        this.personagens = [];
    }

    adicionarPersonagem(personagem) {
        this.personagens.push(personagem);
    }

    executarAtaques() {
        console.log('\n--- Todos os personagens atacam um inimigo ---');
        const inimigo = new Personagem(100, 0, 0); // inimigo genérico

        this.personagens.forEach(p => {
            p.atacar(inimigo);
            console.log('Vida restante do inimigo: ' + inimigo.vida);
        });
    }
}

// Criando personagens com seus parâmetros (os que já existem no seu código)
const guerreiro = new Guerreiro(0, 0, 0);
const mago = new Mago(0, 0, 0);
const arqueiro = new Arqueiro(0, 0, 0);

// Criando o jogo e adicionando os personagens
const jogo = new Jogo();
jogo.adicionarPersonagem(guerreiro);
jogo.adicionarPersonagem(mago);
jogo.adicionarPersonagem(arqueiro);

// Executar ataques com polimorfismo
jogo.executarAtaques();