/**
 * Description genera un numero random tra due estremi
 * @param {number} min numero minimo da generare
 * @param {number} max numero massimo da generare 
 * @returns {number}
 */
function numRandom (min, max) {

    const num = Math.floor(Math.random() * (max - min) ) + min;

    return num;
}

/**
 * Description : genero array fino alla lunghezza di numLength
 * @param {number} numLength
 * @returns {array} 
 */
function genArray (numLength) {

    const arrayRdn = [];

    const min = 1;
    const max = 100;

    for (let i = 0; i < numLength; i++) {
        const numRdn = numRandom(min, max);
        

        arrayRdn.push(numRdn);
    }

    return arrayRdn;

}