
/**
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

 const arrayNumerico =[];

 
 for (let i = 0; i < 6; i++){
  let numeroRichiesto = parseInt(prompt('Inserisci un numero'));
 
   if (numeroRichiesto % 2 != 0) {

     arrayNumerico.push(numeroRichiesto)
 }
}

console.log(arrayNumerico);
 