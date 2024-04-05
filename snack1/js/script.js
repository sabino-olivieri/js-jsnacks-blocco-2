const numUser = parseInt(prompt("Dimmi un numero:"));

const lengthArray = 10;

const bodyElem = document.querySelector("body");

for (let i = 0; i < numUser; i++) {
    const newArray = genArray(lengthArray);

    console.log(newArray);
    bodyElem.innerHTML += `<h6>${newArray}</h6>`;
}