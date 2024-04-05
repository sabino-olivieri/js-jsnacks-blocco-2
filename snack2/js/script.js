// chiedo parola1 all'utente
const word1 = prompt("Dimmi una parola");

// chiedo parola2 all'utente
const word2 = prompt("Dimmi un'altra parola");

// creo cariabile per il risultato
let strMessage = "La parola più lunga è: ";

// prendo elemento body
const bodyElem = document.querySelector("body");


if(wordSameLength(word1, word2)) {

    strMessage = "Hanno la stessa lunghezza " + word1 + " " + word2;

} else if (word1IsMoreLonger(word1, word2)) {

    strMessage +=  word1;

} else {

    strMessage += word2;

}

// stampo dento al body
bodyElem.innerHTML = `<h1>${strMessage}</h1>`