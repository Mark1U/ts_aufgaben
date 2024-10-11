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

let array = [1, 10, 190, 2, 6, 55, 33, 110, 1, 2, 7, 54];
let getHighestNumber = 0;

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
console.log(`%c loops 3_3`, "background: red;clor: gray;");

let inputOs = 5;

let loopStr = "L";
for (let i = 0; i < inputOs; i++) {

    if (inputOs % 2 != 0 && i < inputOs - 1) {
        loopStr += "o0";
        i++;
    } else {
        loopStr += "o";
    }
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
    for (let count = 0; count <= 50;) {
        count += Math.floor(Math.random() * 10) + 1;
        if (count > 50) {
            console.log("Wert über 50: " + count);
        }
    }
}

addToFifty();
addToFifty();
addToFifty();



console.log(`%c while loops 1_3`, "background: red;clor: gray;");

let count: number = 0;
while (count < 10) {
    console.log(count);
    count++
}


console.log(`%c while loops 1_7`, "background: red;clor: gray;");

count = 1;
do {
    console.log(count);
    count++
} while (count <= 5)


console.log(`%c loops 3_1`, "background: red;clor: gray;");

let text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

let textInBlocksOfHundred: string[] = [];

const totalPages = Math.ceil(text.length / 100);

let counter = 1;
while (text.length >= 100) {
    textInBlocksOfHundred.push(text.slice(0, 100) + ` - ${counter} of ${totalPages}`);
    counter++;
    text = text.slice(100);
}

textInBlocksOfHundred.push(text + ` - ${counter} of ${totalPages}`);
console.log(textInBlocksOfHundred);



console.log(`%c loops 3_2`, "background: red;clor: gray;");

let numbers: number[] = [5, 22, 15, 100, 55];

for (let num of numbers) {
    let isPrime = true;
    for (let n = 2; n <= num / 2; n++) {
        if (num % n == 0) {
            isPrime = false;
            console.log(num + " is Dividable by " + n);
            // break;
        }
    }
    if (isPrime) {
        console.log("Prime: " + num);
    }
}

console.log(`%c loops 3_5`, "background: red;clor: gray;");

const resultsArr = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];


const getNote = (value: number) => {
    switch (Math.floor(value / 10)) {
        case 5: return "Mangelhaft";
        case 6: return "Ausreichend";
        case 7: return "Befriedigend";
        case 8: return "Gut";
        case 9: return "Sehr gut";
        default: return "Ungenügend"
    }
}


let sum2 = 0;

for (let val of resultsArr) {
    sum2 += val;
    console.log(val + " - " + getNote(val));
}

const avg = sum2 / resultsArr.length;
console.log(avg.toFixed(2));
console.log(sum2);
console.log(resultsArr.length);

console.log(getNote(avg));
