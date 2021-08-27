/**
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

let primoArrayFrutta = ["Mela" , "Pera", "Albicocca" , "Susina" , "Avocado" , "Ananas", "Fragole", "Lamponi", "Mirtilli"];
let secondoArrayVerdura = ["Pomodori" , "Zucchine", "Cavolfiori", "Melanzane", "Broccoli", "Cetrioli"];

if (primoArrayFrutta.length > secondoArrayVerdura.length){
    while (secondoArrayVerdura.length < primoArrayFrutta.length){
        secondoArrayVerdura.push(Math.random()* 1240);
    }
} else if ((primoArrayFrutta.length < secondoArrayVerdura.length)){
    while (primoArrayFrutta.length < secondoArrayVerdura.length){

    }
} else {
    alert ("Sono uguali, non aggiungo nessun elemento.")
}
