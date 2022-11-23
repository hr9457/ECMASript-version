
// getters and setters
class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // metodos
    #speak(){
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }


    // getters and setters
    get uAge(){
        return this.age;
    }

    set uAge(value){
        this.age =  value;
    }

}


const developer1 = new user('david',15);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);