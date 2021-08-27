
/*
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando sono scritte tutte in maiuscolo stampa un alert,
 *	altrimenti inseriscile nell'array.
 *
 */
 
 let arrayParole =[];

 for (let i = 0; i < 5; i++ ){
  let parola = prompt('Inserisci una parola');

  if (parola == parola.toUpperCase() ){
     alert ("non entri nell'array")
  } else {
    arrayParole.push(parola);
  }
 }

 console.log (arrayParole);