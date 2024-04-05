const numUser = parseInt(prompt("Dimmi un numero:"));

const lengthArray = 10;

for (let i = 0; i < numUser; i++) {
    const newArray = genArray(lengthArray);

    console.log(newArray);
}