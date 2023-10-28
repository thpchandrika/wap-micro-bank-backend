const transactions = [
    {
        id: 1,
        username: "user1",
        date: '2023-10-25',
        description: 'Purchase at ABC Store',
        note: 'Purchased shampoo',
        amount: -50.00,
        transactionAccount: '1234567890',
        balance: 45,
        transactionType: "WITHDRAWAL"
    },
    {
        id: 2,
        username: "user1",
        date: '2023-10-24',
        description: 'Deposit from Employer',
        note: 'Salary payment',
        amount: 1000.00,
        transactionAccount: '1234567890',
        balance: 45,
        transactionType: "DEPOSIT"
    },
    {
        id: 3,
        username: "user1",
        date: '2023-10-23',
        description: 'Dinner at XYZ Restaurant',
        note: 'Payment at xyz restaurant',
        amount: -75.50,
        transactionAccount: '1234567890',
        balance: 45,
        transactionType: "WITHDRAWAL"
    },
    {
        id: 4,
        username: "user2",
        date: '2023-10-22',
        description: 'Grocery Shopping',
        note: 'Purchased colgate',
        amount: -90.00,
        transactionAccount: '4321098765',
        balance: 45,
        transactionType: "WITHDRAWAL"
    },
    {
        id: 5,
        username: "user2",
        date: '2023-10-21',
        description: 'Interest Payment',
        note: 'Paid for interest',
        amount: 25.00,
        transactionAccount: '5678901234',
        balance: 45,
        transactionType: "DEPOSIT"
    },
    {
        id: 6,
        username: "user1",
        date: '2023-10-21',
        description: 'Online Subscription Renewal',
        note: 'AWS certification',
        amount: -9.99,
        transactionAccount: '9876543210',
        balance: 45,
        transactionType: "WITHDRAWAL"
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
        accountHolder: 'John Doe',
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
        accountHolder: 'Bob Johnson',
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

const creditCards = [
    {
        cardNumber: '4111 1111 1111 1111',
        cardHolder: 'John Doe',
        expirationDate: '12/25',
        cvv: '123',
        issuer: 'Visa',
        balance: 0
    },
    {
        cardNumber: '5555 5555 5555 5555',
        cardHolder: 'Jane Smith',
        expirationDate: '08/24',
        cvv: '456',
        issuer: 'MasterCard',
        balance: 0
    },
    {
        cardNumber: '6011 6011 6011 6011',
        cardHolder: 'Mike Johnson',
        expirationDate: '04/23',
        cvv: '789',
        issuer: 'Discover',
        balance: 0
    },
    {
        cardNumber: '3400 0000 0000 009',
        cardHolder: 'Sara White',
        expirationDate: '10/26',
        cvv: '321',
        issuer: 'American Express',
        balance: 0
    },
    {
        cardNumber: '4917 2321 1234 5678',
        cardHolder: 'David Lee',
        expirationDate: '03/27',
        cvv: '234',
        issuer: 'Visa',
        balance: 0
    },
];

const utilityCompanies = [
    {
        name: "Electricity Co.",
        accountNumber: "12345",
        address: "123 Main St, City, State, 12345",
        phone: "555-123-4567",
        website: "http://www.electricityco.com",
        balance: 0,
        usersId: [22222, 3333, 4444, 5555, 6666]
    },
    {
        name: "Water Utility",
        accountNumber: "67890",
        address: "456 Elm St, City, State, 67890",
        phone: "555-987-6543",
        website: "http://www.waterutility.com",
        balance: 0,
        usersId: [22222, 3333, 4444, 5555, 6666]
    },
    {
        name: "Internet Provider",
        accountNumber: "24680",
        address: "135 Pine St, City, State, 24680",
        phone: "555-024-6820",
        website: "http://www.internetprovider.com",
        balance: 0,
        usersId: [22222, 3333, 4444, 5555, 6666]
    },
];

exports.utilityCompanies = utilityCompanies;
exports.transactions = transactions;
exports.bankAccounts = bankAccounts;
exports.creditCards = creditCards;