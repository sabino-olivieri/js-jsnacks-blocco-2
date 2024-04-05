/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

/**
 * Description stampo elementi di un array in una stringa 
 * @param {array} arrayToPrint array da stampare
 * @param {object} wherePrint dove stampare
 */
function printStringArray (arrayToPrint, wherePrint) {

    let stringPrint = "";

    for (let i = 0; i < arrayToPrint.length; i++) {
        stringPrint += `${arrayToPrint[i]}, `;
    }

    wherePrint.innerHTML = `<h4>${stringPrint}</h4>`;

}