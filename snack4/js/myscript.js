/**
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

 const invitati = ["Alberto", "Edoardo","Alessandro", "Bianca", "Celeste", "Tommaso", "Filippo"];
 
 const nomeScelto = prompt("Inserisci il tuo nome");

 let verificaInvitato = false;

 for (let i = 0; i < invitati.length; i++){
    let invitatoCorrente = invitati[i];

    if (invitatoCorrente == nomeScelto){
        verificaInvitato = true;
    }
 }

if (verificaInvitato == true) {
  console.log("Benvenuto alla festa!");
}
else {
  console.log("Mi dispiace ma non sei stato invitato");
}
