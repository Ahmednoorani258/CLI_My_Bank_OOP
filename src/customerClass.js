// first and last name gender age & mobile number
export default class Customer {
    firstname;
    lastname;
    Gender;
    age;
    contact;
    accnumber;
    balance;
    constructor(firstname, lastname, Gender, age, contact, an, bal) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Gender = Gender;
        this.age = age;
        this.contact = contact;
        this.accnumber = an;
        this.balance = bal;
    }
    printInfo() {
        console.log(`\nName: ${this.firstname} ${this.lastname}
Gender: ${this.Gender}
Age: ${this.age}
Contsct No: ${this.contact}
Account No: ${this.accnumber}
Balance: ${this.balance}\n`);
    }
}
