
/*
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const primaParola = prompt("Inserisci la prima parola");
const secondaParola = prompt ("Inserisci la seconda parola");

if (primaParola.length == secondaParola.length){
    alert("le due parole hanno la medesima lunghezza")
} else if (primaParola.length < secondaParola.length){
    console.log(primaParola + "," + secondaParola)
} else {
   console.log(secondaParola + "," + primaParola)
}
