
class Employee {
    id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    methods(): string {
        return `${this.name} stays at ${this.address}`;
        // return this.name +" "+ this.address;
    }
}
class manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }
    methods1(): string {
        return `${this.name} is manager at ${this.address}`;
    }
}

let Akshay = new Employee(1, "Akshay", "Gachibowli");
let address = Akshay.methods();
let Chiluveru = new manager(2, "Akshay Chiluveru", "Manikonda");
let address1 = Chiluveru.methods1();

// let concate = Akshay.methods();
// Akshay.id = 1;
// Akshay.name = 'Akshay';
// Akshay.address = 'Gachibowli'

console.log(Akshay);
console.log(address);
console.log(address1);
// console.log(concate);
