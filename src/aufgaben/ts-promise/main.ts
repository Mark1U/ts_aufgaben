console.log(`%c Promise-TS-Level-1_2`, "background: red;clor: gray;");

enum WeatherType {
    none,
    sunny,
    cloudy,
    rainy,
    snowy,
    stormy,
    windy
}

const weatherForecast: Promise<WeatherType> = new Promise((resolve, reject) => {
    const rnd = Math.floor(Math.random() * 10)

    if (rnd <= 6) {
        resolve(rnd)
    }
    reject("Weather forecast could not be determined: " + rnd)
})

await weatherForecast.then((resp) => {
    console.log("Weather Forecast: " + WeatherType[resp]);
}).catch((error) => {
    console.error(error);
})



console.log(`%c Promise-TS-Level-1_3`, "background: red;clor: gray;");

function exercise1(): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Exercise 1 start.")

        setTimeout(() => {
            resolve("Exercise 1 done.")
        }, 2000)
    })
}

function exercise2(): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Exercise 2 start.")

        setTimeout(() => {
            resolve("Exercise 2 done.")
        }, 2000)
    })
}


function exercise3(): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Exercise 3 start.")

        setTimeout(() => {
            resolve("Exercise 3 done.")
        }, 2000);
    })
}

await exercise1()
    .then((resp) => console.log(resp))
    .then(() => exercise2())
    .then((resp) => console.log(resp))
    .then(() => exercise3())
    .then((resp) => console.log(resp))

console.log(`%c Promise-TS-Level-2_1`, "background: red;clor: gray;");

function genNumberArr(): Promise<number[]> {
    return new Promise((resolve, reject) => {
        let numberArr = []
        for (let i = 0; i < 3; i++) {
            const num = Math.floor(Math.random() * 130) + 1
            numberArr.push(num)
            if (num > 100) {
                reject('Wert > 100');
            }
        }
        resolve(numberArr);
    });
}

await genNumberArr()
    .then(numArr => {
        console.log(numArr);
        return numArr.map(num => num + 7);
    })
    .then(numArr => {
        console.log(numArr);
        return numArr.map(num => num * 2);
    })
    .then(numArr => {
        console.log(numArr);
        return numArr.map(num => num - 1);
    })
    .then(numArr => {
        console.log(numArr);
        return numArr.map(num => num % 2);
    })
    .then(numArr => {
        console.log(numArr);
    })
    .catch(error => {
        console.error('Err:', error);
    })
    .finally(() => {
        console.log('Finished');
    });


console.log(`%c Promise-TS-Level-2_2`, "background: red;clor: gray;");

function generateLoremIpsum(numberOfWords: number = 50): Promise<string[]> {
    return new Promise((resolve, reject) => {

        const txtArr = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor 
sit amet.`.split(" ")

        if (txtArr.length > numberOfWords) {
            reject(`Number of words (${txtArr.length}) cannot exceed ` + numberOfWords)
        }
        resolve(txtArr);
    });
}

await generateLoremIpsum(100)
    .then((txtArr) => {
        return txtArr.map(x => x.toUpperCase())
    })
    .then((txtArr) => {
        return txtArr.map(x => x
            .replace("L", "")
            .replace("T", "")
            .replace("U", "")
            .replace(",", "")
            .replace(".", ""))
    }).then((txtArr) => {
        return txtArr.filter(x => x.length <= 8)
    })
    .then((txtArr) => {
        console.log(txtArr.join(" "));
    }).catch((error) =>
        console.error(error))