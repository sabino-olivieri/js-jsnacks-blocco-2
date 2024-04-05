const word1 = prompt("Dimmi una parola");

const word2 = prompt("Dimmi un'altra parola");

let strMessage = "";

const bodyElem = document.querySelector("body");

if(wordSameLength(word1, word2)) {

    strMessage = word1 + " " + word2;
} else if (word1IsMoreLonger(word1, word2)) {
    strMessage = word1;
} else {
    strMessage = word2;
}


bodyElem.innerHTML = `<h1>${strMessage}</h1>`