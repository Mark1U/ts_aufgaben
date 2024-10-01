
function weather() {

    const quality: number = parseInt((document.getElementById("quality") as HTMLInputElement).value);
    let result: string;

    if (quality >= 8 && quality <= 10) {
        result = "super";
    } else if (quality >= 6 && quality <= 7) {
        result = "gut";
    } else if (quality >= 3 && quality <= 5) {
        result = "okay";
    } else if (quality >= 0 && quality <= 2) {
        result = "schlecht";
    } else {
        result = "Ungültiger Wert. Bitte eine Zahl zwischen 0 und 10 eingeben.";
    }

    const res = document.querySelector("#result") as HTMLElement;
    if (res) {
        res.innerText = `Das Wetter ist: ${result}`;
        console.log('res: ', res.innerText);

    }

}

const submitBtn = document.querySelector("#submitBtn") as HTMLInputElement;
if (submitBtn) {
    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        weather();
    })
}