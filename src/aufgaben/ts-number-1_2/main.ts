console.log(`%c Numbers 1_2`, "background: red;clor: gray;");
let num;

let array: any = [
    15.16698,
    7.78714,
    "12.3",     // <- error
    true,       // <- error
    false,      // <- error
    "321",      // <- error
    "Supercode"]// <- error

for (let i = 0; i <= array.length; i++) {
    try {
        num = array[i];
        let result = num.toFixed(2);
        console.log(`${i}. ${num} --> ${result}`);
    } catch (e) {
        console.error(e);
    }
}
