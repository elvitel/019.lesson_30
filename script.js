class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getPersonDetails() {
       console.log(`Ім'я: ${this.name}, вік: ${this.age}.`);             
    }
}

class Car {
    brand;
    model;
    year;
    number;
    owner;
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    assignOwner(person) {
        if (person.age > 18) {
           this.owner = person;
        } else {                                                   
            console.log('Вік не відповідає вимогам.');                    
        }
    }

    getCarDetails() {
        console.log(`Марка: ${this.brand}, модель: ${this.model}, рік випуску: ${this.year}, номер: ${this.number}.`);
        if (this.owner) {
            this.owner.getPersonDetails();
        } 
        else {
            console.log('Власника не визначено.');
        }              
    }
}

let person1 = new Person('Ганна Сміт', 5);
let person2 = new Person('Джон Браун', 32);
let person3 = new Person('Майк Вайт', 28);

let car1 = new Car('Mazda', 6, 2022, 'AA8403BB');
let car2 = new Car('Volkswagen', 'Golf', 2019, 'AA9302CA');
let car3 = new Car('BWM', 5, 2020, 'AA4426DD');

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);

car1.getCarDetails();                                      
car2.getCarDetails();
car3.getCarDetails();

