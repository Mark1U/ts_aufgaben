export enum EnclosureId {
    SavannahHabitat,
    JungleHabitat,
    AquaticHabitat,
    ReptileHouse
}

export enum AnimalType {
    Mammal,
    Reptile,
    Bird,
    Fish,
    Mollusk,
    Amphibian
}

export class Enclosure {
    id: EnclosureId;
    name: string;
    builtInYear: number

    constructor(id: EnclosureId, name: string, builInYear: number) {
        this.id = id;
        this.name = name;
        this.builtInYear = builInYear;
    }
}

export class Animal {
    enclosureId: EnclosureId;
    emoji: string;
    tierName: string;
    type: AnimalType;
    name: string;
    yearOfBirth: number;
    continents: string;
    specialNeeds: string;

    constructor(enclosureId: EnclosureId, emoji: string, tierName: string, type: AnimalType, name: string, yearOfBirth: number, continents: string, specialNeeds: string) {
        this.enclosureId = enclosureId;
        this.emoji = emoji;
        this.tierName = tierName;
        this.type = type;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.continents = continents;
        this.specialNeeds = specialNeeds;
    }
}

export class AnimalMain {
    emoji: string;
    tierName: string;
    type: AnimalType;
    continents: string;

    constructor(emoji: string, tierName: string, type: AnimalType, continents: string = "Afrika") {
        this.emoji = emoji;
        this.tierName = tierName;
        this.type = type;
        this.continents = continents;
    }
}

export const animalList: AnimalMain[] = [
    new AnimalMain("🦁", "Lion", AnimalType.Mammal),
    new AnimalMain("🐘", "Elephant", AnimalType.Mammal),
    new AnimalMain("🐻", "Bear", AnimalType.Mammal, "Europe"),
    new AnimalMain("🐒", "Monkey", AnimalType.Mammal),
    new AnimalMain("🐬", "Dolphin", AnimalType.Mammal, "Oceans"),
    new AnimalMain("🐍", "Snake", AnimalType.Reptile),
    new AnimalMain("🐢", "Turtle", AnimalType.Reptile),
    new AnimalMain("🐊", "Crocodile", AnimalType.Reptile),
    new AnimalMain("🐦", "Parrot", AnimalType.Bird),
    new AnimalMain("🦅", "Eagle", AnimalType.Bird),
    new AnimalMain("🦜", "Macaw", AnimalType.Bird),
    new AnimalMain("🐠", "Fish", AnimalType.Fish, "Oceans"),
    new AnimalMain("🐟", "Trout", AnimalType.Fish, "Oceans"),
    new AnimalMain("🦈", "Shark", AnimalType.Fish, "Oceans"),
    new AnimalMain("🐙", "Octopus", AnimalType.Mollusk, "Oceans"),
    new AnimalMain("🦑", "Squid", AnimalType.Mollusk, "Oceans"),
    new AnimalMain("🐸", "Frog", AnimalType.Amphibian),
    new AnimalMain("🦎", "Lizard", AnimalType.Reptile),
    new AnimalMain("🦢", "Swan", AnimalType.Bird, "Europe"),
    new AnimalMain("🦆", "Duck", AnimalType.Bird, "Europe"),
    new AnimalMain("🤡", "Clownfish", AnimalType.Fish, "Oceans"),
    new AnimalMain("🐅", "Tiger", AnimalType.Mammal),
    new AnimalMain("🦏", "Rhinoceros", AnimalType.Mammal),
    new AnimalMain("🐊", "Alligator", AnimalType.Reptile),
    new AnimalMain("🦜", "Cockatoo", AnimalType.Bird),
    new AnimalMain("🐡", "Pufferfish", AnimalType.Fish, "Oceans"),
    new AnimalMain("🐻", "Panda", AnimalType.Mammal, "Asia"),
    new AnimalMain("🐫", "Camel", AnimalType.Mammal),
    new AnimalMain("🐦", "Toucan", AnimalType.Bird),
    new AnimalMain("🦢", "Flamingo", AnimalType.Bird)
];
