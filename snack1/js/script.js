// chiedo numero a utente
const numUser = parseInt(prompt("Dimmi un numero:"));

// imposto lunghezza massima dell'array
const lengthArray = 10;

// creo elemento body
const bodyElem = document.querySelector("body");

// creo ciclo per creare tot array chiesti all'utente
for (let i = 0; i < numUser; i++) {

    // genero array
    const newArray = genArray(lengthArray);

    console.log(newArray);
    bodyElem.innerHTML += `<h6>${newArray}</h6>`;
}