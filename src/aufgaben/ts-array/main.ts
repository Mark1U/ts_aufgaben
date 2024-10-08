console.log(`%c Array 1_1`, "background: red;clor: gray;");


let bucketList: string[] = ["A", "B", "C"];
let luckyNumbers: number[] = [1, 2, 31];
let favoritePeople: string[] = ["P1", "P2", "P3"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

console.log(`%c Array 1_2`, "background: red;clor: gray;");


console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);

console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);


console.log(`%c Array 1_3`, "background: red;clor: gray;");

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);


console.log(`%c Array 1_4`, "background: red;clor: gray;");

console.log(bucketList);
bucketList.push("_neu1");
bucketList.push("_neu2");
console.log(bucketList);

console.log(`%c Array 1_5`, "background: red;clor: gray;");

console.log("Entfernt: ", bucketList.pop());

console.log(bucketList);

console.log(`%c Array 1_6`, "background: red;clor: gray;");
console.log("Entfernt: ", bucketList[0]);
bucketList.shift();
console.log(bucketList);

console.log(`%c Array 1_7`, "background: red;clor: gray;");

bucketList.unshift("_neuS1", "_neuS2");
console.log(bucketList);


console.log(`%c Array 1_8`, "background: red;clor: gray;");

let lieblingsreiseziele: string[] = ["ZielA", "_ZielB", "_ZielC", "ZielD", "ZielE"];
console.log(lieblingsreiseziele);

lieblingsreiseziele = lieblingsreiseziele.slice(1, 3);
console.log(lieblingsreiseziele);

console.log(`%c Array 1_9`, "background: red;clor: gray;");

let numberArray: number[] = [23, 54, 15];
console.log(numberArray);

numberArray.push(12, 34, 56, 78, 90);
console.log(numberArray);

numberArray.unshift(1, 2, 3, 4, 5);
console.log(numberArray);

numberArray.pop();
numberArray.pop();
console.log(numberArray);

numberArray.shift();
numberArray.shift();
console.log(numberArray);

console.log(`%c Array 1_14`, "background: red;clor: gray;");


let oldHollywoodActors = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

let actorsReference = oldHollywoodActors;

actorsReference.push("Marilyn Monroe");

console.log(oldHollywoodActors);
console.log(actorsReference);

// let actorsConcatCopy = [].concat(oldHollywoodActors);

let actorsSliceCopy = oldHollywoodActors.slice();

let actorsSpreadCopy = [...oldHollywoodActors];

// actorsConcatCopy[0] = "James Dean";
actorsSliceCopy[1] = "Greta Garbo";
actorsSpreadCopy[2] = "Clark Gable";

console.log(oldHollywoodActors);
// console.log(actorsConcatCopy);
console.log(actorsSliceCopy);
console.log(actorsSpreadCopy);



const emailArr: string[] = ["steffen@super-code.de", "marco@super-code.de", "max@super-code.de", "batman@gotham.de", "spidy@hero.nyc"];

const inputEmail = document.querySelector("#email") as HTMLInputElement;

document.querySelector("#formBtn")?.addEventListener('click',
    (e) => {
        e.preventDefault();
        console.log(emailArr.includes(inputEmail.value.toLowerCase()) ? "Welcome Back" : "Du musst dich registrieren");
    }
)
