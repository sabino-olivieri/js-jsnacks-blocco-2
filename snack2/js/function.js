/**
 * Description controllo se 2 parole hanno la stessa lunghezza
 * @param {string} firstWord prima parola
 * @param {string} secondWord seconda parola
 * @returns {boolean} vero se hanno la stessa lunghezza
 */
function wordSameLength(firstWord, secondWord) {
    
    return firstWord.length === secondWord.length
        

}

/**
 * Description controllo se parola 1 è più lungha
 * @param {string} firstWord prima parola
 * @param {string} secondWord seconda parola
 * @returns {boolean}
 */
function firstWordIsMoreLonger (firstWord, secondWord) {

    return firstWord.length > secondWord.length
}