console.log(`%c DOM 2_7`, "background: red;clor: gray;");

const btn = document.querySelector("button") as HTMLButtonElement
const umwickeln = document.querySelector(".umwickeln") as HTMLElement

let count = 0;
btn.addEventListener('click', () => {
    console.log("click");
    const div = document.createElement("div");
    div.textContent = count + "";
    div.classList.add(count % 10 == 0 ? "weiss" : "rechteck");
    umwickeln.appendChild(div);

    count++
})


console.log(`%c DOM 3_10`, "background: red;clor: gray;");

const newEntry = document.querySelector("#newEntry") as HTMLInputElement
const btn2 = document.querySelector("#submitBtn") as HTMLInputElement
const ulList = document.querySelector("ul") as HTMLUListElement

btn2.addEventListener("click", (e: Event) => {
    e.preventDefault();
    const li = document.createElement("li")
    li.textContent = newEntry.value
    const btnX = document.createElement("button")
    btnX.textContent = "X";
    btnX.addEventListener("click", (e: Event) => {
        e.preventDefault();
        const btnX = e.target as HTMLButtonElement
        const node = btnX?.parentNode as HTMLElement
        node?.remove();
    });
    li.appendChild(btnX);
    ulList.appendChild(li)

})