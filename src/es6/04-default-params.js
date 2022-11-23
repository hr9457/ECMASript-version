function newUser (name, age, country){
    var name = name || 'hector';
    var age = age || 27;
    var country = country || 'GT';
    console.log(name, age, country);
}

newUser();
newUser('David',15,'CO');


function newAdmin(name= 'hector', age=27, country='GT'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('anna',15,'CO');