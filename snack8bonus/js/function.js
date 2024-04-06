/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

function insertInHead (arrayToEdit, elementToAdd) {

    const newArray = [];

    for (i = arrayToEdit.length; i >= 0; i--) {
        
        if (i > 0) {

        newArray[i] = arrayToEdit[i-1];

        } else {
            newArray[i] = elementToAdd;
        }

    }

    return newArray
}