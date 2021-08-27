/**
 * Calcola la somma e la media dei primi 10 numeri
 */

let somma = 0; 

for (let i = 0; i < 10; i++) { //per dieci volte fai quello che c'è dentro le graffe
  somma += i; // somma = somma + i;
}

console.log(somma)
console.log (somma / 10)


// rifaccio l'esercizio con ciclo while 
let contatore = 0;

while (contatore < 10) {
    somma = somma + contatore;
    contatore++;
}

console.log(somma)
console.log (somma / 10)


