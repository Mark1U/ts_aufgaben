export enum Gender {
    Male = "Male",
    Female = "Female"
}

class Person {
    private _name: string;
    private readonly _birthday: Date;
    private _gender: Gender;

    constructor(name: string, birthday: Date, gender: Gender) {
        this._name = name;
        this._birthday = birthday;
        this._gender = gender;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get birthday(): Date {
        return this._birthday;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(gender: Gender) {
        this._gender = gender;
    }
}


export default Person