/**
 * Description controllo se 2 parole hanno la stessa lunghezza
 * @param {string} word1 prima parola
 * @param {string} word2 seconda parola
 * @returns {boolean} vero se hanno la stessa lunghezza
 */
function wordSameLength(word1, word2) {
    
    return word1.length === word2.length
        

}

/**
 * Description controllo se parola 1 è più lungha
 * @param {string} word1 prima parola
 * @param {string} word2 seconda parola
 * @returns {boolean}
 */
function word1IsMoreLonger (word1, word2) {

    return word1.length > word2.length
}