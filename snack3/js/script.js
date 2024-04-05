// creo array vuoto
const list = [];

// prendo elemento form
const submitElem = document.querySelector("form");

// prendo elemento button cancella
const cancelElem = document.getElementById("cancel-btn");

// prendo elemento button controlla
const controlElem = document.getElementById("control-btn");

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

controlElem.addEventListener("click", function() {
    
    resultElem.innerHTML = `<h4>La lista è composta da ${howManyElements(list)} elementi</h4>`;

});

