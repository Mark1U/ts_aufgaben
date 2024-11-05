import IceCreamParlor from "./classes/IceCreamParlor";

const iceCreamParlor = new IceCreamParlor();

iceCreamParlor.addNewFlavor("Zitrone", 3.2)
iceCreamParlor.addNewFlavor("Karamel")

console.log(iceCreamParlor.getFlavorPrice("Karamel"));

console.log(iceCreamParlor.isFlavorAvailable("Vanilla"));

console.log(iceCreamParlor.listFlavors());

const order1 = iceCreamParlor.orderIceCream("Vanilla", 3)
const order2 = iceCreamParlor.orderIceCream("Erdbeere", 2)

console.log(order1)
console.log(order2)

iceCreamParlor.removeFlavor("Schokolade")

console.log(iceCreamParlor)

const output = document.querySelector("#output") as HTMLElement

iceCreamParlor.listFlavors().forEach(element => {
    const p = document.createElement("p");
    p.textContent = element + " - " + iceCreamParlor.getFlavorPrice(element).toFixed(2) + " €";
    output.appendChild(p);
});

