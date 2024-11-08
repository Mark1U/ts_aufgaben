const ordersDiv = document.getElementById('orders')!;

document.getElementById('startSimulation')?.addEventListener('click', () => {

    ordersDiv.innerHTML = '';

    createCustomerOrder(1, 'Cola');
    createCustomerOrder(2, 'Sprite');
    createCustomerOrder(3, 'Wasser');
});

function addStatusMessage(txtContent: string, customerDiv: HTMLDivElement) {
    customerDiv.innerHTML += txtContent + '<br>'
}

function order(customerNumber: number, customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        addStatusMessage(customerNumber + '. Person in der Reihe', customerDiv)
        setTimeout(() => {
            addStatusMessage('📝 Bestellung Aufnehmen', customerDiv)
            resolve()
        }, getRandomDurationInMilliseconds());
    })
}

function pay(customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            addStatusMessage('💳 Bezahlung durchführen', customerDiv)
            resolve()
        }, getRandomDurationInMilliseconds());
        resolve()
    })
}

function makeBurger(customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            addStatusMessage('🍔 Zubereitung', customerDiv)
            resolve()
        }, getRandomDurationInMilliseconds());
    })
}

function makeFries(customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            addStatusMessage('🍟 Zubereitung', customerDiv)
            resolve()
        }, getRandomDurationInMilliseconds());
    })
}

function makeDrink(drink: string, customerDiv: HTMLDivElement): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            addStatusMessage(`🥤 Fülle ${drink} ein`, customerDiv)
            resolve()
        }, getRandomDurationInMilliseconds());
    })
}

function createCustomerOrder(customerNumber: number, drink: string) {
    const customerDiv = document.createElement("div")
    customerDiv.className = "orderDiv"
    ordersDiv.appendChild(customerDiv)
    processOrder(customerNumber, drink, customerDiv)
}

function processOrder(customerNumber: number, drink: string, customerDiv: HTMLDivElement) {
    Promise.all([
        order(customerNumber, customerDiv),
        pay(customerDiv),
        makeBurger(customerDiv),
        makeFries(customerDiv),
        makeDrink(drink, customerDiv)
    ]).then(() => {
        console.log('Bestellung abgeschlossen.');
        customerDiv.innerHTML += '✅ Bestellung abgeschlossen.<br>';
    });
}

function getRandomDurationInMilliseconds(): number {
    const min = 2000;
    const max = 12000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}