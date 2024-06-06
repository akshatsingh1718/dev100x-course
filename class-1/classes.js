class Animal{
    constructor(name, legcount, speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }

    speak(){
        console.log("Hi there " + this.name + " says " + this.speaks)
    }
}

let dog = new Animal("dog", 4, "Bhow bhow");

dog.speak();