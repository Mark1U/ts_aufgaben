import validator from 'email-validator';

class Validator {
    static validateEmail(email: string): boolean {
        // return email.includes("@") && email.includes(".")
        return validator.validate(email);
    }
}


class Customer {
    private _name: string = "";
    private _email: string = "";
    private _address: string = "";
    // Type muss string sein sonst ist PLZ nicht fünstelllig wenn sie mit 0 beginnt
    private _postalCode: string = "00000";
    private _city: string = "";

    constructor(name: string, email: string, address: string, postalCode: string, city: string) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length <= 60) {
            this._name = value;
        } else {
            console.error("Fehler: Der Name darf max. 60 Zeichen lang sein.");
        }
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (Validator.validateEmail(value)) {
            this._email = value;
        } else {
            console.error("Fehler: Die E-Mail muss '@'-Zeichen und '.' enthalten.");
        }
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postalCode(): string {
        return this._postalCode;
    }

    set postalCode(value: string) {
        if (Number(value) >= 0 && Number(value) <= 99999 && value.toString().length === 5) {
            this._postalCode = value;
        } else {
            console.error("Fehler: Die PLZ muss 5-stellig und zw. 00000 und 99999 liegen.");
        }
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }
}

export default Customer