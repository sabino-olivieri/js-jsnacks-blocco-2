// creo array vuoto
const list = [];

// prendo elemento form
const submitElem = document.querySelector("form");

// prendo elemento button cancella
const cancelElem = document.getElementById("cancel-btn");

// prendo elemento button trova indice
const findElem = document.getElementById("find-btn");

// prendo elemento input text
const textElem = document.getElementById("string-element");

// prendo elemento input da cercare
const searchElem = document.getElementById("search-element");

// prendo elemento lista
const listElem = document.querySelector("ul");

// prendo elemento result
const resultElem = document.querySelector(".result");

submitElem.addEventListener("submit", function(event) {

    event.preventDefault();

    const textValue = textElem.value;

    if (textValue !== " " && textValue !== "") {
        list.push(textValue);
        printInPage(textValue, listElem);
        console.log(list);
    }

    textElem.value = "";
});

cancelElem.addEventListener("click", function () {

    list.length = 0;
    console.log(list);
    listElem.innerHTML = "";
    resultElem.innerHTML = "";
});

findElem.addEventListener("click", function() {
    
    const indexElement = findIndex(list, searchElem.value);
    console.log(indexElement);

    let indexMessage = "L'elemento cercato non è presente nella lista";

    if (indexElement !== -1) {
        indexMessage = "L'indice dell'elemento cercato è: " + indexElement;
    }

    resultElem.innerHTML = `<h4>${indexMessage}</h4>`;
    searchElem.value = "";
});

