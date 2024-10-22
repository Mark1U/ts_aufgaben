console.log(`%c Cäsar Encoding/Decoding`, "background: red;clor: gray;");

const caesar = (text: string, delta: number): string => {

    if (delta < 0) {
        delta = ((delta % 26 + 26) % 26)
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    for (let inputChar of text.toUpperCase().split("")) {
        if (inputChar == " ") {
            output += " "
        } else {
            const pos = alphabet.indexOf(inputChar)
            if (pos > -1) {
                output += alphabet[(pos + delta) % 26]
            }
        }
    }

    return output;
}

const input = document.querySelector("#input") as HTMLInputElement
const output = document.querySelector("#output") as HTMLInputElement
const deltaInput = document.querySelector("#deltaInput") as HTMLInputElement
const encBtn = document.querySelector("#encBtn") as HTMLInputElement
const decBtn = document.querySelector("#decBtn") as HTMLInputElement

encBtn.addEventListener("click", (e) => {
    e.preventDefault()
    output.textContent = caesar(input.value, Number(deltaInput.value))
})

decBtn.addEventListener("click", (e) => {
    e.preventDefault()
    output.textContent = caesar(input.value, -1 * Number(deltaInput.value))
})

const values: number[] = [1, 2, 3];
values
    .filter(x => x)
    .includes(123)