/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

/**
 * Description creo nuovo array senza il primo elemento elemento
 * @param {array} arrayToEdit array da modificare
 * @returns {array} nuovo array
 */
function removeFromHead(arrayToEdit) {

    const newArray = [];

    for (let i = 1; i < arrayToEdit.length; i++) {
        newArray.push(arrayToEdit[i]);
    }

    return newArray;

}