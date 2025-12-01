/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Output partite da semplice log, e poi se volete stampate in pagina come sapete fare.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

*/


const userAge = parseInt(prompt('Inserisci la tua età per degli sconti'));
console.log(userAge);

const km = parseFloat(prompt('inserisci il numero di kilometri da percorrere in treno'))
const priceKm = 0.21;
let totalPrice = km * priceKm


if (userAge < 18) {
    console.log('utente è minorenne');
    totalPrice = totalPrice * 0.8;

} else if (userAge >=65) {
    console.log('utente è senior');
    totalPrice = totalPrice * 0.6;
}


const finalPrice = totalPrice.toFixed(2)


//console.log("prezzo totale " + finalPrice)
console.log(`prezzo totale ${finalPrice}`)