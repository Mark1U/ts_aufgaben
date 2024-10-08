console.log(`%c Array 1_10`, "background: red;clor: gray;");


const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

console.log(futuramaQuote.split("."));
console.log(futuramaQuote.split(" "));



console.log(`%c Array 1_11`, "background: red;clor: gray;");

let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";
const piperInsertArr: string[] = string.split(" ");
console.log(piperInsertArr.includes("Piper"));
console.log(piperInsertArr.includes("piper"));
console.log(piperInsertArr.join(" ").toLowerCase().split(" ").includes("piper"));


console.log(piperInsertArr.includes("peck"));
console.log(piperInsertArr.includes("peck", 6));

console.log(`%c Sort 2_1`, "background: red;clor: gray;");

function reverse(val: string) {
    console.log(val.split("").reverse().join(""));
}

reverse("Mark");
reverse("Sergio");
reverse("Hannah");
reverse("Regallager");
reverse("Reliefpfeiler");
reverse("Ella mag alle Bohnen");
reverse("han nesaH has ennaH");

console.log(`%c Sort 1_1`, "background: red;clor: gray;");

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let europeanCountries: string[] = ["Deutschland", "Italien", "Frankreeich", "Belgien"];

function sortAlphabetically(list: string[]) {
    console.log(list.sort());
}

sortAlphabetically(languages);
sortAlphabetically(europeanCountries);

console.log(`%c Sort 1_2`, "background: red;clor: gray;");

console.log(languages.sort((a: string, b: string) => b.localeCompare(a)));

console.log(`%c Sort 1_3`, "background: red;clor: gray;");

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a: number, b: number) => a - b));

console.log(numArray1.sort((a: number, b: number) => b - a));

console.log(`%c Sort 2_2`, "background: red;clor: gray;");

let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray.sort((a: number, b: number) => a - b));

console.log(`%c Sort 3_1`, "background: red;clor: gray;");

let artWorks: string[] = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"];

let artworkDates: string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Die Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];

const findArtwork = (artworkName: string) => {
    const artWork: string | undefined = artWorks.find(x => x.includes(artworkName));
    const artworkDate: string | undefined = artworkDates.find(x => x.includes(artworkName));

    if (artWork && artworkDate) {
        const artTitle = artWork.split(" - ")[0];
        const artArtist = artWork.split(" - ")[1];
        const artYear = artworkDate.split(" - ")[1];

        console.log(`'${artTitle}' wurde von ${artArtist} im Jahre ${artYear} gemalt`);
    } else {
        console.log(`Artwork[${artworkName}] not found`);
    }

}

findArtwork("Sternennacht");
findArtwork("Stern-ennacht");

// ""
// "'"


