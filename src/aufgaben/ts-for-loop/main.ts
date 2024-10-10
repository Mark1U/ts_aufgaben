console.log(`%c for loops 1_1`, "background: red;clor: gray;");

for (let i = 0; i < 10; i++) {
    console.log('Hello World ' + i);
}

console.log(`%c for loops 1_2`, "background: red;clor: gray;");

let numbersToTen: number[] = [];
for (let i = 0; i <= 10; i++) {
    numbersToTen.push(i);
}
console.log(numbersToTen);

console.log(`%c for loops 1_4`, "background: red;clor: gray;");

let friendNames = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let fName of friendNames) {
    console.log(fName);
}

console.log(`%c for loops 1_9`, "background: red;clor: gray;");

let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

const inputLen = 5;

for (let word of words) {
    if (word.length == inputLen) {
        console.log(word);
    }
}

console.log(`%c for loops 1_10`, "background: red;clor: gray;");

let getHighestNumber = 0;
let array = [1, 10, 190, 2, 6, 55, 33, 110, 1, 2, 7, 54];

for (let val of array) {
    getHighestNumber = Math.max(getHighestNumber, val);
}
console.log(getHighestNumber);


console.log(`%c for loops 1_11`, "background: red;clor: gray;");

let maxNumber = 120;
let sum = 0;
for (let i = 1; i <= maxNumber; i++) {
    sum += i;
}
console.log(sum);

console.log('Kontrolle: ', ((maxNumber + 1) / 2) * maxNumber);

console.log(`%c for loops 2_1`, "background: red;clor: gray;");
let returnArray: string[] = [];
const createImageNames = (count: number) => {
    for (let i = 1; i <= count; i++) {
        returnArray.push(`image_${i.toString().padStart(3, '0')}.jpg`);
    }
}
createImageNames(100);
console.log(returnArray);


console.log(`%c for loops 2_2`, "background: red;clor: gray;");

let inputOs = 5;
let loopStr = "L";
for (let i = 0; i < inputOs; i++) {
    loopStr += "o";
}
loopStr += "p";
console.log(loopStr);


console.log(`%c for loops 2_3`, "background: red;clor: gray;");

const getNumberOfVowels = (word: string) => {
    let count = 0;
    for (let char of word.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    console.log({ word, count });
}

getNumberOfVowels("asdasWQEOS");
getNumberOfVowels("Das ist ein Test!");
getNumberOfVowels("Hallo World!");

console.log(`%c for loops 2_4`, "background: red;clor: gray;");

const addToFifty = () => {
    for (let count = 0; count < 50;) {
        count += Math.floor(Math.random() * 10) + 1;
        if (count > 50) {
            console.log("Wert über 50: " + count);
        }
    }
}

addToFifty();
addToFifty();
addToFifty();