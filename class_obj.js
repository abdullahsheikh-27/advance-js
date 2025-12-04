class bank{
    #balance; // private variable
    constructor(name, balance){// parameterized
        this.name = name;
    this.#balance = balance;
}
deposit(amount){
    this.#balance += amount;
}
withdraw(amount){
    this.#balance -= amount;
}
getBalance(){
    return this.#balance;
}
};


let customer = new bank("John", 10000);

console.log(`${customer1.name}`);
console.log(`${customer1.balance}`);  //undefined

customer1.getBalance(); // 1000