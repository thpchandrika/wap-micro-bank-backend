let data = require("../data/data");

class Account {
    constructor(username, accountHolder, accountType, initialDeposit, dob, emailAddress, phoneNumber, ssn, state, city, zip) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.dob = dob;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.ssn = ssn;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.balance = initialDeposit;
        this.username = username;
    }

    createAccount() {
        const accNo = Math.floor(Math.random() * 9000000000) + 1000000000;
        this.accountNumber = accNo.toString();
        data.bankAccounts.push(this);
        return this;
    }

    static getAll() {
        return data.bankAccounts;
    }

    static getAccountsByUsername(username) {
        return data.bankAccounts.filter(a => a.username === username);
    }

    static validateAccount(accountNumber) {
        const isValidAccount = data.bankAccounts.some(a => a.accountNumber === accountNumber);
        return isValidAccount;
    }

    static transferFund(fromAccount, toAccount, amount) {
        const fromAccountDetails = data.bankAccounts.find(a => a.accountNumber === fromAccount);
        const toAccountDetails = data.bankAccounts.find(a => a.accountNumber === toAccount);
        if (fromAccountDetails && toAccountDetails) {
            if (amount <= fromAccountDetails.balance) {
                fromAccountDetails.balance -= amount;
                toAccountDetails.balance += amount;
                return fromAccountDetails.balance;
            }
        }
    }

    static creditPayment(fromAccount, amount) {
        const fromAccountDetails = data.bankAccounts.find(a => a.accountNumber === fromAccount);
        if (fromAccountDetails) {
            if (amount <= fromAccountDetails.balance) {
                fromAccountDetails.balance -= amount;
                data.creditCards.balance += amount;
                return fromAccountDetails.balance;
            }
        }
    }

    static utilityPayment(companyindex, fromAccount, amount) {
        const fromAccountDetails = data.bankAccounts.find(a => a.accountNumber === fromAccount);
        if (fromAccountDetails) {
            if (amount <= fromAccountDetails.balance) {
                fromAccountDetails.balance -= amount;
                data.utilityCompanies[companyindex].balance += amount;
                return fromAccountDetails.balance;
            }
        }
    }
}

module.exports = Account;