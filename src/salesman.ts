import { Employee } from "./employee";

export class Salesman extends Employee {
    turnover: number;

    constructor(firstname: string, lastname: string, age: number, hireDate: string, turnover: number) {
        super(firstname, lastname, age, hireDate);
        this.turnover = turnover;
    }

    protected calculateTurnover(): number {
        return this.turnover * 0.2;
    }

    calculateSalary(): number {
        return this.calculateTurnover() + 400;
    }
}