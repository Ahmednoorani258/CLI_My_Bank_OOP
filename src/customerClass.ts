
// first and last name gender age & mobile number

export default class Customer {
    firstname:string
    lastname:string;
    Gender: "Male"|"Female"|"Other";
    age: number;
    contact: number
    accnumber: number
    balance: number
    constructor(
        firstname:string,
        lastname:string,
        Gender: "Male"|"Female"|"Other",
        age: number,
        contact: number,
        an: number,
        bal:number
    ) {
        this.firstname = firstname
        this.lastname = lastname
        this.Gender = Gender
        this.age = age
        this.contact = contact
        this.accnumber = an
        this.balance = bal
    }

    public printInfo(){
        console.log(
`\nName: ${this.firstname} ${this.lastname}
Gender: ${this.Gender}
Age: ${this.age}
Contsct No: ${this.contact}
Account No: ${this.accnumber}
Balance: ${this.balance}\n`
        )
    }
}
