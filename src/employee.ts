export abstract class Employee {
    firstname: string;
	lastname: string;
    hireDate: string;
    age: number;
    
    constructor(firstname: string, lastname: string, age: number, hireDate: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.hireDate = hireDate;
    }

    get name(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    abstract calculateSalary(): number;
}