
function ageCheck() {

    const age: number = parseInt((document.getElementById("age") as HTMLInputElement).value);
    let result: string = (age >= 18 ? "" : "<b>Nicht</b> ") + "Volljährig";

    const res = document.querySelector("#result") as HTMLElement;
    if (res) {
        res.innerHTML = `Ergebnis:  ${result}`;
        console.log('res: ', res.innerText);
    }
}

const submitBtn = document.querySelector("#submitBtn") as HTMLInputElement;
if (submitBtn) {
    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        ageCheck();
    })
}