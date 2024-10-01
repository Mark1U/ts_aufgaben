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
let quartalSalesGrade: string;
switch (totalSalesIdx) {
    case 0: quartalSalesGrade = "schlecht"; break;
    case 1: quartalSalesGrade = "mittelmäßig"; break;
    case 2: quartalSalesGrade = "hoch"; break;
    case 3: quartalSalesGrade = "unglaublich"; break;
    default: quartalSalesGrade = "???";
}
console.log({ totalSales, totalSalesIdx, quartalSalesGrade });

console.log(`'Im ${quartal} war der Umsatz ${quartalSalesGrade}!'`);
