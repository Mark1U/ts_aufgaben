type Cars = {
    marke: string,
    model: string,
    price: number
}

const cars = [
    {
        marke: "audi",
        model: "a1",
        price: 10000
    },
    {
        marke: "bmw",
        model: "E30",
        price: 12000
    },
    {
        marke: "mercedes",
        model: "w124",
        price: 18000
    },
    {
        marke: "skoda",
        model: "yeti",
        price: 8000
    }
]

// console.log(cars);

const output = document.querySelector('#output') as HTMLElement;
const sortDownBtn = document.querySelector('#sortDownBtn') as HTMLInputElement;
const sortUpBtn = document.querySelector('#sortUpBtn') as HTMLInputElement;


const displayCars = ((cars: Cars[]) => {
    output.innerHTML = "";
    cars.forEach((car) => {
        output.innerHTML += `
            <div>
                <p>${car.marke}</p>
                <p>${car.model}</p>
                <p>${car.price}</p>
            </div>
        `
    })
});


sortDownBtn?.addEventListener('click', () => {
    let c = [...cars]
    c.sort((a, b) => a.price - b.price)
    displayCars(c);
})

sortUpBtn?.addEventListener('click', () => {
    let c = [...cars]
    c.sort((a, b) => b.price - a.price)
    displayCars(c);
})

displayCars(cars);


const gladiator = {
    title: "Gladiator",
    year: 2000,
    mainCharacter: "Maximus",
    villians: ["Commodus"]
}

const italienJob = {
    title: "Italien Job",
    year: 2003,
    mainCharacter: "Charlie",
    villians: ["Steve"]
}

const movies = [gladiator, italienJob];

console.log(movies);

const batmanBegins = {
    title: "BAtman Begins",
    year: 2003,
    mainCharacter: "Charlie"
    // villians: ["Steve"]
}

// movies.push(batmanBegins);


console.log(`%c Objects 2_1`, "background: red;clor: gray;");


type EdelmetallPreis = {
    name: string;
    preiseGramEuro: number;
    veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

const edelMetallNamen: string[] = []
edelMetallPreise.forEach((x) => edelMetallNamen.push(x.name))
console.log(edelMetallNamen);

const filterEdelGt50 = edelMetallPreise.filter((e) => {
    if (e.preiseGramEuro > 50) {
        return e;
    }
});
console.log({ filterEdelGt50 });

console.log(`%c Objects 2_2`, "background: red;clor: gray;");


type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

singers.sort((a, b) => a.period_active.start - b.period_active.start)

console.log(singers);

console.log(`%c Morsecode`, "background: red;clor: gray;");


type MorseAlphabet = {
    letter: string,
    morseCode: string
}

let morseAlphabet: MorseAlphabet[] = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }

];

const inputText = "Hallo das ist ein Test";

const encodeMorseCode = (txt: string): string => {

    const txtArr: string[] = txt.toUpperCase().split("");

    return txtArr.map(c => {
        const mc = morseAlphabet.find(x => x.letter == c)?.morseCode
        // console.log({ c, mc });
        return mc;
    }).join();
}

console.log(encodeMorseCode(inputText));




console.log(`%c WDH: For Loops`, "background: tomato;clor: gray;");

const iphone = {
    size: "6",
    ram: 3,
    color: "black"
}
for (let key in iphone) {
    console.log(key);    //"A" 1, "B" 2, "C" 3
} 