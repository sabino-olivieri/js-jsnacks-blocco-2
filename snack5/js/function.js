/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

function printStringArray (arrayToPrint, wherePrint) {

    let stringPrint = "";

    for (let i = 0; i < arrayToPrint.length; i++) {
        stringPrint += `${arrayToPrint[i]}, `;
    }

    wherePrint.innerHTML = `<h4>${stringPrint}</h4>`;

}