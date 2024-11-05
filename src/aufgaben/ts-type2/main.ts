console.log(`Lotto 2_1`);

const generateLottoNumber = (): number => {
    const zahl = Math.floor(Math.random() * 100) + 1

    if (zahl > 49) {
        throw Error("Zahl istgrößer als 49")
    }
    return zahl
}


let lottoNumbers: number[] = []

while (lottoNumbers.length < 7) {
    try {


        const num = generateLottoNumber();
        if (!lottoNumbers.includes(num)) {
            lottoNumbers.push(num)
            console.log("New Num: " + num);

        }
    } catch (e) {
        console.error((e as Error).stack);
    }
}

console.log(lottoNumbers);


console.log(`UnionType-Level-1_1`);

type Result = "success" | "error" | "pending";

let currentStatus: Result = "success";

const handleResult = (result: Result): void => {
    switch (result) {
        case "success":
            console.log("success");
            break;
        case "error":
            console.log("Error");
            break;
        case "pending":
            console.log("Pending.");
            break;
        default:
            console.log("Unknown");
    }
}

handleResult("success");
handleResult("error");
handleResult("pending");



console.log(`UnionType-Level-1_1`);


import { IStudent } from './classes/Student'

function processStudent(student: IStudent): void {
    console.log(`Processing [${student.name}] ...`);
}

const student1 = {
    name: "student 1",
    age: 20
};

processStudent(student1 as IStudent);

const student2 = {
    age: 22
};

processStudent(student2 as IStudent); // ==> Output: Processing [undefined] ...


console.log(`IntersectionType-Level-1_1`);

type Alcohol = {
    name: string;
    percentage: number;
    type: string;
};

type Mixer = {
    name: string;
    type: string;
    carbonated: boolean;
};

type Cocktail = Alcohol & Mixer;

const myCocktail: Cocktail = {
    name: "Caipirinha",
    percentage: 30,
    type: "Cachaça",
    carbonated: false
};

console.log("Name:", myCocktail.name);
console.log("Percentage:", myCocktail.percentage);
console.log("Type:", myCocktail.type);
console.log("Carbonated:", myCocktail.carbonated);

console.log(`IntersectionType-Level-1_2`);

const mixCocktail = (alcohol: Alcohol, mixer: Mixer): Cocktail => {
    return {
        name: `${alcohol.name} ${mixer.name}`,
        percentage: alcohol.percentage,
        type: alcohol.type,
        carbonated: mixer.carbonated
    };
}

const vodka: Alcohol = { name: "Vodka", percentage: 40, type: "Vodka" };
const rum: Alcohol = { name: "Rum", percentage: 35, type: "Rum" };

const lemonJuice: Mixer = { name: "Lemon", type: "Mix", carbonated: false };
const tonic: Mixer = { name: "Tonic", type: "Mix", carbonated: true };

console.log(mixCocktail(vodka, lemonJuice));
console.log(mixCocktail(vodka, tonic));
console.log(mixCocktail(rum, lemonJuice));
console.log(mixCocktail(rum, tonic));;
