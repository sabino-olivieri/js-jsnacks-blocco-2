/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

/**
 * Description conta quanti elementi ci sono in un array
 * @param {array} arrayToControl array da controllare
 * @returns {number} il numero di elementi
 */
function howManyElements(arrayToControl) {
    let cont = 0; 

    for(let i = 0; i < arrayToControl.length; i++ ){
        cont++;
    }

    return cont;
}