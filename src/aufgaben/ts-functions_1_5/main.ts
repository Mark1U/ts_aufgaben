console.log(`%c Functions 1_3`, "background: red;clor: gray;");

function showPersonInfo(name: string = "Supercoder", age: number = 27, place: string = "Düsseldorf") {
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${Math.floor(age)} Jahre alt. Ich komme aus ${place}.`);
}

showPersonInfo();

showPersonInfo("Mark", 33.663 / 1.2, "München");

console.log(`%c Functions 1_4`, "background: red;clor: gray;");


function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    let nameOutput: string = `Mein Lieblingsheld ist: ${heroName}\n`;
    let powerOutput: string = ` Er hat die Fähigkeit: ${heroPower}\n`;
    let enemyOutput: string = ` Sein größter Gegner:in ist: ${heroEnemy}.\n`;

    console.log(nameOutput + powerOutput + enemyOutput);
}

showHero("James Bond", "Überlebenskünstler", "Blofeld");




console.log(`%c Functions 1_5`, "background: red;clor: gray;");

function multiplyAndDivide(num1: number, num2: number): void {
    console.log("Erg [*]:", num1 * num2);

    if (num2 === 0) {
        console.error("Error: Division durch 0 nicht erlaubt");
    } else {
        console.log("erg [/]:", num1 / num2);
    }
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);
