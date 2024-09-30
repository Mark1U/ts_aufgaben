console.log(`%c Intro Strings 1_1`, "background: red;clor: gray;");

let firstName: string = "Mark";
let lastName: string = "🔥🔥🔥Up🔥🔥🔥"; //<-- Emogis werden doppel gezählt
// let lastName: string = "TEST123";

console.log("firstName Len: ", firstName.length);
console.log("lastName Len: ", lastName.length);

let fullName: string = firstName + lastName;

console.log("fullName-Len:", fullName.length);

console.log(`%c Intro Strings 1_2`, "background: red;clor: gray;");

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(earthQuote.indexOf('h'));
console.log(earthQuote.indexOf('Earth'));
console.log(earthQuote.indexOf('Moon'));


console.log(`%c Intro Strings 1_3`, "background: red;clor: gray;");

let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(oceanQuote.search(';'));
console.log(oceanQuote.search('green'));
console.log(oceanQuote.search('blue'));


console.log(`%c Intro Strings 1_5`, "background: red;clor: gray;");
const whereIsSusi = 'Susi is back from codingschool';

console.log(whereIsSusi.substring(0, 4));
console.log(whereIsSusi.substring(5, 7));
console.log(whereIsSusi.substring(24, 30));

console.log(
    whereIsSusi.substring(0, 4) + " " +
    whereIsSusi.substring(5, 7) + " " +
    whereIsSusi.substring(24, 30));


console.log(`%c Intro Strings 1_8`, "background: red;clor: gray;");
const whereIsSam = "Sam is going to school";

// - SAM is going to SCHOOL
console.log(
    whereIsSam.substring(0, 3).toUpperCase() + whereIsSam.substring(3)
);
// - sam IS GOING TO school
console.log(
    whereIsSam.substring(0, 3).toLowerCase() +
    whereIsSam.substring(3, whereIsSam.indexOf("school")).toLocaleUpperCase() +
    whereIsSam.substring(whereIsSam.indexOf("school")).toLowerCase());
// - Sam Is Going To School

console.log(whereIsSam
    .replace("is", "Is")
    .replace("going", "Going")
    .replace("to", "To")
    .replace("school", "School")

);