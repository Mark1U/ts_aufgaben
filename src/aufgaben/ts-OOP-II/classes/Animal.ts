class Animal {
    private _species: string;
    private _age: number;
    private _color: string;

    constructor(species: string, age: number, color: string) {
        this._species = species;
        this._age = age;
        this._color = color;
    }

    get species(): string {
        return this._species;
    }

    set species(species: string) {
        this._species = species;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get color(): string {
        return this._color;
    }

    set color(color: string) {
        this._color = color;
    }
}

export default Animal