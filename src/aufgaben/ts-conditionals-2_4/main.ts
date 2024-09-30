console.log(`%c Conditionals 2_4`, "background: red;clor: gray;");


function runLotto() {
    let num1: number = Math.floor(Math.random() * 77) + 1;
    let num2: number = Math.floor(Math.random() * 77) + 1;

    console.log({ num1, num2 });

    // if (num1 == num2) {
    //     console.log("🔥🔥🔥 Hurra 🔥🔥🔥");
    // } else if (num1 > num2) {
    //     console.log('Nummer 1 ist größer');
    // } else {
    //     console.log('Nummer 2 ist größer');
    // }

    switch (true) {
        case num1 == num2: console.log('🔥🔥🔥Hurra🔥🔥🔥');
            break;
        case num1 > num2: console.log('>Nummer 1 ist größer');
            break;
        default: console.log('>Nummer 2 ist größer');
            break;
    }
}

for (let count = 0; count < 30; count++) {
    runLotto();
}
