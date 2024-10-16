console.log(`%c Enum  2_2`, "background: red;clor: gray;");

enum ClothingColor {
    Yellow = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blue = "#0000FF",
    Purple = "#800080",
    Gray = "#808080"
}

const allColors: ClothingColor[] = [
    ClothingColor.Yellow,
    ClothingColor.Orange,
    ClothingColor.Pink,
    ClothingColor.Blue,
    ClothingColor.Purple,
    ClothingColor.Gray
];

function createColorButtons() {
    const output = document.querySelector('#output') as HTMLElement;
    allColors.forEach((color) => {
        output.innerHTML += `<button value="${color}" style='background-color:${color}'></button>`
    });

    const btnList = document.querySelectorAll('button')
    btnList.forEach(btn => btn.addEventListener('click', e => {
        const button = e.target as HTMLButtonElement
        alert('Farbe: ' + button.value)
    }));
}

createColorButtons();


console.log(`%c Enum  2_1`, "background: red;clor: gray;");


enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function showHtmlError() {
    const rnd = Math.floor(Math.random() * 5) + 1;

    let errorMessage: HtmlError;

    if (rnd <= 2) {
        errorMessage = HtmlError.OK;
    } else if (rnd === 3) {
        errorMessage = HtmlError.Redirect;
    } else if (rnd === 4) {
        errorMessage = HtmlError.BadRequest;
    } else {
        errorMessage = HtmlError.InternalServerError;
    }

    const status = HtmlError[errorMessage];
    console.log({ status, errorMessage, rnd });
}

// Beispielaufruf
showHtmlError();
showHtmlError();
showHtmlError();
showHtmlError();
showHtmlError();



console.log(`%c Enum  1_4`, "background: red;clor: gray;");

const mathArr: number[] = [
    393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488];

console.log(Math.max(...mathArr));
console.log(Math.min(...mathArr));
