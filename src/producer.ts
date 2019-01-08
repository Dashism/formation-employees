import { Employee } from "./employee";

export class Producer extends Employee {
    units: number;

    constructor(firstname: string, lastname: string, age: number, hireDate: string, units: number) {
        super(firstname, lastname, age, hireDate);
        this.units = units;
    }

    calculateSalary(): number {
        return this.units * 5;
    }
}