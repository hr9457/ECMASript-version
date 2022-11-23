

//  declaracion de una clase
class User {};

// instacioa de una clase
const newUser = new User();


class user {
    gretting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.gretting());



// constructor
class user {
    
    constructor(){
        console.log('nuevo usuario');
    }

    gretting(){
        return 'Hello';
    }
}

const gndx2 = new user();


class user {
    constructor(name){
        this.name = name;
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("ana");
console.log(ana.greeting());


// getters and setters
class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // metodos
    speak(){
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