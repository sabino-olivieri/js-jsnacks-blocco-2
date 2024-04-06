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

// prendo elemento input da aggiungere
const addElem = document.getElementById("add-element");

// prendo elemento lista
const listElem = document.querySelector(".list ul");

// prendo elemento result ul
const resultElem = document.querySelector(".result ul");

submitElem.addEventListener("submit", function (event) {

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

printElem.addEventListener("click", function () {

    const valueToAdd = addElem.value;

    if (valueToAdd !== "" && valueToAdd !== " ") {

        if (list.length !== 0) {


            const newArray = insertInHead(list, valueToAdd);

            for (let i = 0; i < newArray.length; i++) {
                printInPage(newArray[i], resultElem)
            }

        } else {
            alert("L'array è vuoto, inserisci qualcosa prima");
        }

    } else {
        alert("Inserisci qualcosa da aggiungere in testa alla lista");
    }

    addElem.value = "";

});

