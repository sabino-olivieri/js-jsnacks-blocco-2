// creo array vuoto
const list = [];

// prendo elemento form
const submitElem = document.querySelector("form");

// prendo elemento button cancella
const cancelElem = document.getElementById("cancel-btn");

// prendo elemento button stammpa array
const printElem = document.getElementById("print-btn");

// prendo elemento input text
const textElem = document.getElementById("string-element");

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

printElem.addEventListener("click", function() {
    
    if (list.length !== 0) {
    printStringArray(list, resultElem);
    } else {
        alert("L'array è vuoto, inserisci qualcosa prima");
    }
});

