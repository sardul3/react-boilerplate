class Person{
    constructor(name="Unknown", age=0){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveler extends Person{
    constructor(name, age, city="Monroe, LA"){
        super(name, age);
        this.city = city;
    }
    greeting(){
        if(this.city){
            return `${super.greeting()} and I am from ${this.city}`; 
        }
        return super.greeting();
    }
}
const suvash = new Traveler("Suvash", 22, "Dallas, TX");
console.log(suvash.greeting());

const other = new Traveler();
console.log(other.greeting());
