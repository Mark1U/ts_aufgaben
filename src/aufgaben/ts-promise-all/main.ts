console.log(`%c Callback-TS-Level-1_3 `, "background: red;clor: gray;");

function sayHello(name: string, callback: (message: string) => void): void {
    const message = `Hello ${name}.`;
    callback(message);
}


function greetingCallback(message: string): void {
    console.log(message);
}

sayHello("Alice", greetingCallback);
sayHello("Bob", greetingCallback);
sayHello("Charlie", greetingCallback);

console.log(`%c Callback-TS-Level-1_4 `, "background: red;clor: gray;");

function sayHello2(name: string, callback: (message: string) => void): Promise<string> {
    return new Promise((resolve) => {
        const message = `Hello ${name}.`;
        callback(message);
        resolve(message)
    })
}


const hello1 = sayHello2("Alice", greetingCallback);
const hello2 = sayHello2("Bob", greetingCallback);
const hello3 = sayHello2("Charlie", greetingCallback);

await Promise.all([hello1, hello2, hello3]).then((msgs) => {
    console.log(msgs.join(" ") + "-> Homework done")
})

console.log(`%c Callback-TS-Level-2_2 `, "background: red;clor: gray;");

function processData(nums: number[],
    sortDesc: (nums: number[]) => number[],
    dblData: (nums: number[]) => number[]): Map<number, string> {

    const data = dblData(sortDesc(nums))
    const resultMap = new Map<number, string>();
    data.forEach(num => {
        if (!resultMap.has(num)) {
            resultMap.set(num, Math.abs(num).toString(16));
        }
    })

    return resultMap;
}

function sortDesc(nums: number[]): number[] {
    return nums.sort((a, b) => b - a)
}

function dblData(nums: number[]): number[] {
    return [...nums, ...nums,]
}

const map1 = processData([0, 11, 9, 3, 6, 23], sortDesc, dblData)
await console.log(map1);


const map2 = processData([54321, 1024, 1023, 12345], sortDesc, dblData)
await console.log(map2);


