#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Customer from "./src/customerClass.js";
class MyBank {
    customers = [];
    async askQuestion(name1, type1, message1, choices1) {
        let ask = await inquirer.prompt({
            name: name1,
            type: type1,
            message: message1,
            choices: choices1
        });
        return ask[name1];
    }
    async createAcc() {
        let a = await this.askQuestion("firstname", "input", "Enter your First Name");
        let b = await this.askQuestion("Secondname", "input", "Enter Your last Name");
        let c = await this.askQuestion("Gender", "list", "Select The Gender", ["Male", "Female", "Other"]);
        let d = await this.askQuestion("age", "number", "Enter Your Age");
        let e = await this.askQuestion("Contact", "number", "Enter Your Mobile Number");
        let f = await this.askQuestion("accnumber", "number", "Enter Your Account Number");
        let g = await this.askQuestion("balance", "number", "Enter Your Account Balance");
        parseInt(g);
        let cus = new Customer(a, b, c, d, e, f, g);
        this.customers.push(cus);
        console.log(`\n\nCongratulation ${cus.firstname + " " + cus.lastname} Your Account created Succesfully\nRemeber Your Account Number`);
        this.mainmenu();
    }
    async checkdetails() {
        let ask = await this.askQuestion("a", "input", "Enter Your Account Number");
        let cus = this.customers.find(a => a.accnumber == ask);
        if (cus) {
            console.log(`\nAccount found Succesfully\n`);
            console.log(`
First Name: ${cus.firstname}
Last Name: ${cus.lastname} 
Gender : ${cus.Gender}
Age : ${cus.age}
Contact: ${cus.contact} 
Balnce: ${cus.balance}
Account Number: ${cus.accnumber}
`);
            this.mainmenu();
        }
        else {
            console.log(`\nAccount not found\nPls Enter The Valid Account Number`);
            this.mainmenu();
        }
    }
    async credit() {
        let ask = await this.askQuestion("a", "input", "Enter Your Account Number");
        let ask1 = await this.askQuestion("a", "number", "Enter The Amount U want to Credit To Your Account");
        let cus = this.customers.find(a => a.accnumber == ask);
        if (cus) {
            if (ask1 <= 0) {
                console.log(chalk.red(`Invalid Amount`));
                this.mainmenu();
            }
            else if (ask1 > 0) {
                cus.balance += ask1;
                console.log(`Crediting ${ask1} to ${cus.firstname + " " + cus.lastname}'s account.`);
                console.log(`\nCash credited succesfully\nAccount Balance: ${cus.balance}`);
                this.mainmenu();
            }
            else {
                console.log(chalk.red(`Pls Enter Valid Amount`));
            }
        }
        else {
            console.log(chalk.red(`\nAccount not found\nPls Enter The Valid Account Number\n`));
            this.mainmenu();
        }
    }
    async debit() {
        let ask = await this.askQuestion("a", "input", "Enter Your Account Number");
        let ask1 = await this.askQuestion("a", "number", "Enter The Amount U want to Debit from Your Account");
        let cus = this.customers.find(a => a.accnumber == ask);
        if (cus) {
            if (ask1 <= 0) {
                console.log(chalk.red(`Invalid Amount`));
                this.mainmenu();
            }
            else if (ask1 > 0 && cus.balance !== 0 && cus.balance > ask1) {
                let oneperc = ask1 / 100;
                console.log(`\n1% OF Withdrawal amount was deducted\n Fees: ${oneperc}`);
                oneperc += ask1;
                cus.balance -= oneperc;
                console.log(`Debiting ${ask1} from ${cus.firstname + " " + cus.lastname}'s account.`);
                console.log(`\nCash Debited succesfully\nAccount Balance: ${cus.balance}`);
                this.mainmenu();
            }
            else {
                console.log(chalk.red(`Pls Enter Valid Amount or check your Account balance`));
                this.mainmenu();
            }
        }
        else {
            console.log(chalk.red(`\nAccount not found\nPls Enter The Valid Account Number\n`));
            this.mainmenu();
        }
    }
    exit() {
        console.log(`\nThanks For Using MY Bank\n`);
    }
    async mainmenu() {
        try {
            const ask = await this.askQuestion("q", "list", "Select The Operation", ["Create Account", "Check Details", "Credit", "Debit", "Exit"]);
            switch (ask) {
                case "Create Account":
                    this.createAcc();
                    break;
                case "Check Details":
                    this.checkdetails();
                    break;
                case "Credit":
                    this.credit();
                    break;
                case "Debit":
                    this.debit();
                    break;
                case "Exit":
                    this.exit();
                    break;
            }
        }
        catch (error) {
            console.error("Error while asking the question:", error);
        }
    }
}
let start = new MyBank;
start.mainmenu();
