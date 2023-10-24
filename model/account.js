const { v4: uuidv4 } = require('uuid');

const bankAccounts = [
    {
        username: "user1",
        accountNumber: '1234567890',
        accountHolder: 'John Doe',
        accountType: 'Savings',
        balance: 5000.00,
        dob: '1990-05-15',
        emailAddress: 'johndoe@email.com',
        phoneNumber: '123-456-7890',
        ssn: '123-45-6789',
        state: 'New York',
        city: 'New York City',
        zip: '10001'
    },
    {
        username: "user1",
        accountNumber: '9876543210',
        accountHolder: 'Alice Smith',
        accountType: 'Checking',
        balance: 2500.50,
        dob: '1985-12-10',
        emailAddress: 'alicesmith@email.com',
        phoneNumber: '987-654-3210',
        ssn: '987-65-4321',
        state: 'California',
        city: 'Los Angeles',
        zip: '90001'
    },
    {
        username: "user2",
        accountNumber: '5678901234',
        accountHolder: 'Bob Johnson',
        accountType: 'Savings',
        balance: 10000.25,
        dob: '1988-08-22',
        emailAddress: 'bobjohnson@email.com',
        phoneNumber: '567-890-1234',
        ssn: '567-89-0123',
        state: 'Texas',
        city: 'Houston',
        zip: '77001'
    },
    {
        username: "user2",
        accountNumber: '4321098765',
        accountHolder: 'Eve Williams',
        accountType: 'Checking',
        balance: 3500.75,
        dob: '1995-03-30',
        emailAddress: 'evewilliams@email.com',
        phoneNumber: '432-109-8765',
        ssn: '432-10-9876',
        state: 'Florida',
        city: 'Miami',
        zip: '33101'
    }
];


class Account {
    constructor(username, accountHolder, accountType, balance, dob, emailAddress, phoneNumber, ssn, state, city, zip, initialDeposit) {
        const guid = uuidv4();
        this.accountNumber = guid;
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = balance;
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
        bankAccounts.push(this);
        return this;
    }

    static getAll() {
        return bankAccounts;
    }
}

module.exports = Account;