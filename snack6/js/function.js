/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

/**
 * Description creo nuovo array senza l'ultimo elemento
 * @param {array} arrayToEdit array da modificare
 * @returns {array} nuovo array
 */
function removeFromTail(arrayToEdit) {

    const newArray = [];

    for (let i = 0; i < arrayToEdit.length - 1; i++) {
        newArray.push(arrayToEdit[i]);
    }

    return newArray;

}