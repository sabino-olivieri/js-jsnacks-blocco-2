/**
 * Description stampo elemento in pagina
 * @param {string} elementToPrint
 * @param {object} elementWherePrint
 */
function printInPage(elementToPrint, elementWherePrint) {

    elementWherePrint.innerHTML += `<li>${elementToPrint}</li>`;
}

/**
 * Description restituisce indice dell'elemento cercato
 * @param {array} arrayWhereToFind
 * @param {any} whatFind
 * @returns {number} se trova elemento restituisce il suo indice, altrimenti -1
 */
function findIndex(arrayWhereToFind, whatFind) {

    let index = -1;

    for (let i = 0; i < arrayWhereToFind.length; i++) {

        if (arrayWhereToFind[i] === whatFind) {

            index = i;
            break;

        }
    }

    return index;

}