console.log(`%c Conditionals 3_1`, "background: red;clor: gray;");

let salesMonth = Math.floor(Math.random() * 12) + 1;

let quartal;
switch (salesMonth) {
    case 1:
    case 2:
    case 3:
        quartal = "1. Quartal";
        break;
    case 4:
    case 5:
    case 6:
        quartal = "2. Quartal";
        break;
    case 7:
    case 8:
    case 9:
        quartal = "3. Quartal";
        break;
    case 10:
    case 11:
    case 12:
        quartal = "4. Quartal";
        break;
    default:
        quartal = "Ungültiger Monat";
        break;
}

console.log({ salesMonth, quartal });


let totalSales = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
let totalSalesIdx = Math.floor(totalSales / 2500);
let res2: string;
switch (totalSalesIdx) {
    case 0: res2 = "“schlecht”"; break;
    case 1: res2 = "“mittelmäßig”"; break;
    case 2: res2 = "“hoch”"; break;
    case 3: res2 = "“unglaublich”"; break;
    default: res2 = "???";
}
console.log({ totalSales, totalSalesIdx, res2 });

console.log(`'Im 3. Quartal war der Umsatz ${res2}!'`);
