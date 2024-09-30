
console.log(`%c Conditionals 2_3`, "background: red;clor: gray;");


function cmp27() {
    let zufallsZahl: number = Math.floor(Math.random() * 100) + 1;

    console.log({ zufallsZahl });

    switch (true) {
        case zufallsZahl > 27:
            console.log("[1] erg: " + (zufallsZahl - 27) * 2);
            break;
        default: console.log("[2] default: " + zufallsZahl);
            break;
    }
}

for (let count = 0; count < 30; count++) {
    cmp27();
}