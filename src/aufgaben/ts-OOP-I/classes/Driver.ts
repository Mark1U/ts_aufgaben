import Car from "./Car";

class Driver {
    _firstName: string;
    _lastName: string;
    _age: number
    _car: Car;

    constructor(firstName: string, lastName: string, age: number, car: Car) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._car = car;
    }
}

export default Driver