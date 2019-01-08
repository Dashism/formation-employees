import { Employee } from "./employee";

export class Warehouseman extends Employee {
    hours: number;

    constructor(firstname: string, lastname: string, age: number, hireDate: string, hours: number) {
        super(firstname, lastname, age, hireDate);
        this.hours = hours;
    }

    calculateSalary(): number {
        return this.hours * 65;
    }
}