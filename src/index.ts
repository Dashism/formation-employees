import { Salesman } from './salesman';
// Déclaration d'une variable toujours avec let.
let myName: string = 'jérémy';

// Déclaration d'une fonction avec type de retour défini. Cela oblige à mettre une instruction return dans la fonction pour être certain de renvoyer une valeur du type indiqué.
function start(name: string): number {
    console.log(`Début du programme pour ${name}.`);
    return 0;
}

// On exporte les définitions des classes pour les utiliser dans d'autres fichiers.
export class Person {
    // Les attributs ont la visibilité public par défaut.
    firstname: string;
    lastname: string;
    age: number;

    /**
     * Paramètre obligatoires toujours en premier.
     * Paramètre optionnel déclaré avec '?'.
     * Paramètre avec valeur par défaut '= 0'.
     */
    constructor(firstname: string, lastname?: string, age: number = 0) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

start(myName);

let jeremy = new Person("jérémy");
let jmasson = new Person("jérémy", "masson");
let michel = new Person("michel", "Dupont", 40);

let e = new Salesman('jeremy', 'masson', 18, '2000', 20000);
// Appel des attributs de l'instance e :
console.log('Prénom : ' + e.firstname);
// Appel du getter (pas de parenthèses !) :
console.log('Nom complet : ' + e.name);