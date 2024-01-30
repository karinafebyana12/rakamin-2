class User {
    constructor(name){
        this.name = name;
    }

    sayHi(sentence) {
        console.log(sentence,this.name, ":)");
    }

    getName() {
        return this.name;
    }

    setName(value) {
        if(value.length < 4) {
            console.log("Name is too far");
            return
        }
        this.name = value;
    }
}

// Penggunaan
let user = new User("John");
user.sayHi("Hallo");

user.setName('Doe');
console.log(user.getName());
