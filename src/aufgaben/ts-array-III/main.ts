console.log(`%c Array Iteration 1_1`, "background: red;clor: gray;");

let getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

const field = document.querySelector("#d1") as HTMLElement;

const myDrinks = (drinks: string[]) => {
    drinks.forEach((drink) => {
        console.log(drink);
        field.innerHTML += `<p>${drink}</p>\n`;
    })
}

myDrinks(getraenke);


console.log(`%c Array Iteration 1_2`, "background: red;clor: gray;");

const upperDrinks = getraenke.map(x => x.toUpperCase());

console.log(upperDrinks);

console.log(`%c Array Iteration 1_3`, "background: red;clor: gray;");

let array: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

array = array.map(x => x * 2);

console.log(array);

console.log(`%c Array Iteration 1_4`, "background: red;clor: gray;");

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map(fahrenheit => Math.round((fahrenheit - 32) / 1.8));

console.log(celsius);


console.log(`%c Array Iteration 1_5`, "background: red;clor: gray;");

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

checkNumber = checkNumber.map(x => {
    if (x % 3 === 0) {
        return x + 100;
    }

    return x;
});

console.log(checkNumber);



console.log(`%c Array Iteration 1_6`, "background: red;clor: gray;");


let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

album = album.map(x => {
    const pos = x.lastIndexOf(".");
    if (pos > -1) {
        return x.toLowerCase().substring(0, pos);
    }

    return "invalid";
});

console.log(album);



console.log(`%c Array Iteration 1_7`, "background: red;clor: gray;");

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎']

fruits = fruits.map(element => element += '🥤');
console.log(fruits);

console.log(`%c Array Iteration 1_8`, "background: red;clor: gray;");

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const printEvenNumbers = ((x: number) => {
    if (x % 2 === 0) {
        return x;
    }
});

const printOddNumbers = ((x: number) => {
    if (x % 2 !== 0) {
        return x;
    }
});

console.log(zahlen.filter(printEvenNumbers));

console.log(zahlen.filter(printOddNumbers));

