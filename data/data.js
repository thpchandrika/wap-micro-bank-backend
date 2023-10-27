const transactions = [
    {
        id: 1,
        username: "user1",
        date: '2023-10-25',
        description: 'Purchase at ABC Store',
        amount: -50.00,
        transactionAccount: '1234567890'
    },
    {
        id: 2,
        username: "user1",
        date: '2023-10-24',
        description: 'Deposit from Employer',
        amount: 1000.00,
        transactionAccount: '1234567890',
    },
    {
        id: 3,
        username: "user2",
        date: '2023-10-23',
        description: 'Dinner at XYZ Restaurant',
        amount: -75.50,
        transactionAccount: '1234567890'
    },
    {
        id: 4,
        username: "user2",
        date: '2023-10-22',
        description: 'Grocery Shopping',
        amount: -90.00,
        transactionAccount: '1234567890'
    },
    {
        id: 5,
        date: '2023-10-21',
        description: 'Interest Payment',
        amount: 25.00,
        transactionAccount: '1234567890'
    },
    {
        id: 6,
        date: '2023-10-20',
        description: 'Online Subscription Renewal',
        amount: -9.99,
        transactionAccount: '1234567890'
    },
];

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

exports.transactions = transactions;
exports.bankAccounts = bankAccounts;