import { Salesman } from './salesman';

export class Representant extends Salesman {

    calculateSalary(): number {
        return this.calculateTurnover() + 800;
    }
}