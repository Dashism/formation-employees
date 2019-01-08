import { Employee } from "./employee";

export class Staff {
    employees: Array<Employee>;

    constructor() {
        this.employees = new Array();
    }

    addMember(e: Employee) {
        this.employees.push(e);
    }

    displaySalaries() {
        let total = 0;
        for (let e of this.employees) {
            total += e.calculateSalary();
        }
        console.log(`Total des salaires : ${total} €`);
    }

    displayAverageSalary() {
        let salaries: Array<number> = this.employees.map(function(e: Employee) {
            return e.calculateSalary();
        });
        let sum = salaries.reduce(function(prevSalary: number, curSalary: number) {
            return prevSalary + curSalary;
        });
        console.log(`Le salaire moyen est de ${ sum / this.employees.length } €`);
    }
}