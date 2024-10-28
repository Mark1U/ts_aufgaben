import { Animal, animalList, Enclosure, EnclosureId } from "./classes/animal";

const gehege: Enclosure[] = [
    new Enclosure(EnclosureId.SavannahHabitat, "🌴 Savannah Habitat 🌴", 1990),
    new Enclosure(EnclosureId.JungleHabitat, "🐍 Jungle Habitat 🐍", 1990),
    new Enclosure(EnclosureId.ReptileHouse, "🦎 Reptil Habitat 🦎", 1990),
    new Enclosure(EnclosureId.AquaticHabitat, "🐳 Aquatic Habitat 🐳", 1990)
]

const allAnimals: Animal[] = []

const button1 = document.querySelector("button") as HTMLButtonElement
const animalTypeSel = document.querySelector("#animalType") as HTMLSelectElement
const nameInput = document.querySelector("#name") as HTMLInputElement
const yearOfBirth = document.querySelector("#yearOfBirth") as HTMLInputElement
const continentSelect = document.querySelector("#continentSelect") as HTMLSelectElement
const specialNeedSelect = document.querySelector("#specialNeedSelect") as HTMLSelectElement
const enclosureSelect = document.querySelector("#enclosureSelect") as HTMLSelectElement
const gehegeDiv = document.querySelector("#gehege") as HTMLDivElement;


let continents = new Set<string>()
// const specialNeeds = ["Meat", "Fish"]

animalList.forEach((animal, index) => {
    const opt = document.createElement("option") as HTMLOptionElement
    opt.value = index + ""
    opt.textContent = animal.emoji + animal.tierName
    continents.add(animal.continents)
    animalTypeSel.appendChild(opt)
})

continents.forEach((continent) => {
    const opt = document.createElement("option") as HTMLOptionElement
    opt.value = continent
    opt.textContent = continent
    continentSelect.appendChild(opt)
})

gehege.forEach((elem, index) => {
    const opt = document.createElement("option") as HTMLOptionElement
    opt.value = index + ""
    opt.textContent = elem.name
    enclosureSelect.appendChild(opt)
})


button1?.addEventListener("click", (e) => {
    e.preventDefault()

    const animal = animalList[Number(animalTypeSel.value)];

    allAnimals.push(new Animal(
        gehege[Number(enclosureSelect.value)].id,
        animal.emoji,
        animal.tierName,
        animal.type,
        nameInput.value,
        Number(yearOfBirth.value),
        animal.continents,
        specialNeedSelect.value
    ))

    displayEnclosures()
})


for (let i = 0; i < 20; i++) {
    const animalNames: string[] = [
        "Simba the Lion", "Dumbo the Elephant", "Shere Khan the Tiger", "Baloo the Bear", "George the Monkey",
        "Flipper the Dolphin", "Pingu the Penguin", "Melman the Giraffe", "Marty the Zebra", "Jack the Kangaroo",
        "Snapper the Crocodile", "Polly the Parrot", "Freedom the Eagle", "Jaws the Shark", "Inky the Octopus",
        "Po the Panda", "Rocky the Rhinoceros", "Harry the Hippopotamus", "Pinkie the Flamingo", "Kenny the Koala"
    ];

    const rnd = Math.ceil(Math.random() * 100);

    allAnimals.push(new Animal(
        gehege[rnd % 4].id,
        animalList[rnd % animalList.length].emoji,
        animalList[rnd % animalList.length].tierName,
        animalList[rnd % animalList.length].type,
        animalNames[rnd % animalNames.length],
        Number(rnd),
        animalList[rnd % animalList.length].continents,
        ["Meat", "Fish"][rnd % 2]
    ))

}

const displayEnclosures = (): void => {

    gehegeDiv.innerHTML = "";

    gehege.forEach((enclosure) => {
        const enclosureDiv = document.createElement("div");

        const h2 = document.createElement("h2")
        h2.textContent = enclosure.name
        console.log(h2, enclosure.name);

        enclosureDiv.appendChild(h2)

        const ul = document.createElement("ul")

        allAnimals.forEach((animal) => {
            if (animal.enclosureId == enclosure.id) {

                const li = document.createElement("li") as HTMLLIElement

                li.classList.add("popover");
                li.innerHTML = animal.emoji + `<div class="popover-content">
                <p>Name: ${animal.name}</p>
                <p>Animal: ${animal.tierName}</p>
                <p>YoB: ${animal.yearOfBirth}</p>
                <p>Needs: ${animal.specialNeeds}</p>
                <p>type: ${animal.type}</p>
                <p>continents: ${animal.continents}</p>
                </div>`
                // li.addEventListener("mousemove", (event) => {
                //     console.log(animal, event);
                // })
                // 

                ul.appendChild(li)
            }
        })

        enclosureDiv.appendChild(ul)
        gehegeDiv.appendChild(enclosureDiv)
    })
}

displayEnclosures()