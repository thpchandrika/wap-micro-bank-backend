const Account = require("../model/account");
const Transaction = require("../model/transaction");
const data = require("../data/data");

let accountController = {
    createAccount: (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const { accountHolderName, dob, emailAddress, phoneNumber, state,
            city, zip, ssn, initialDeposit, accountType, username } = req.body;

        console.log(initialDeposit);

        if (initialDeposit < 10) {
            res.status(400).json({ message: "initial deposit must be at least $10." })
        }

        if (accountHolderName && accountType && initialDeposit && dob && emailAddress
            && phoneNumber && ssn && state && city && zip && username) {
            const newAccount = new Account(username, accountHolderName, accountType, initialDeposit, dob, emailAddress,
                phoneNumber, ssn, state, city, zip);
            const account = newAccount.createAccount();
            if (account) {
                res.status(201).json(newAccount);
            }
        } else {
            res.status(400).json({ message: "provide all data." })
        }
    },

    getAllAccounts: (req, res, next) => {
        res.status(200).json(Account.getAll());
    },

    getAccountsByUsername: (req, res, next) => {
        const username = req.query.username;
        const accounts = Account.getAccountsByUsername(username);
        res.status(200).json(accounts);
    },

    transferFund: (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const { fromAccount, toAccount, amount, username, note } = req.body;

        if (!fromAccount || !toAccount || !amount) {
            res.status(400).json({ message: "provide all data." })
        }
        if (parseFloat(amount) < 5) {
            res.status(400).json({ message: "amount must be at least $5." })
        }
        const isValidSender = Account.validateAccount(fromAccount);
        if (!isValidSender) {
            res.status(404).json({ message: "sender account does not exists." })
        }
        const isValidReceiver = Account.validateAccount(toAccount);
        if (!isValidReceiver) {
            res.status(404).json({ message: "receiver account does not exists." })
        }
        const newBalance = Account.transferFund(fromAccount, toAccount, parseFloat(amount));

        if (newBalance) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 to the month because months are zero-indexed
            const day = String(now.getDate()).padStart(2, '0');
            const currentDate = `${year}-${month}-${day}`;
            console.log(currentDate);
            let currentCount = Transaction.getCount();
            let newTransaction = new Transaction(++currentCount, username, currentDate,
                `Fund $${parseFloat(amount)} transferred to ${toAccount}`, note, -amount, fromAccount, newBalance, "WITHDRAWAL");
            newTransaction.createTransaction();
            res.status(200).json({});
        } else
            res.status(400).json({ message: "amount exceeds the balance." })
    },

    utilityPayment: (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const { utilityCompany, fromAccountUtility, amountUtility, notesUtility,
            username, utilityUserId } = req.body;

        if (!utilityCompany || !fromAccountUtility || !amountUtility || !utilityUserId) {
            res.status(400).json({ message: "provide all data." })
        }

        if (parseFloat(amountUtility) < 5) {
            res.status(400).json({ message: "amount must be at least $5." })
        }

        //validate user
        const index = data.utilityCompanies.findIndex(u => u.name === utilityCompany
            && u.usersId.includes(parseInt(utilityUserId)));
        if (index < 0) {
            res.status(404).json({ message: "userid not found." })
        }

        const newBalance = Account.utilityPayment(index, fromAccountUtility, parseFloat(amountUtility));
        console.log("balance: " + newBalance);
        console.log(data.utilityCompanies);
        if (newBalance) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 to the month because months are zero-indexed
            const day = String(now.getDate()).padStart(2, '0');
            const currentDate = `${year}-${month}-${day}`;
            let currentCount = Transaction.getCount();
            let newTransaction = new Transaction(++currentCount, username, currentDate,
                `Utility payment of $${parseFloat(amountUtility)}`, notesUtility, -amountUtility, fromAccountUtility,
                newBalance, "WITHDRAWAL");
            newTransaction.createTransaction();
            res.status(200).json({});
        } else
            res.status(400).json({ message: "amount exceeds the balance." })
    },

    creditPayment: (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const { fromAccount, toCreditCard, creditCardVendor, amount, note, username } = req.body;

        if (!fromAccount || !toCreditCard || !creditCardVendor || !amount) {
            res.status(400).json({ message: "provide all data." })
        }

        //validate credit card
        const index = data.creditCards.findIndex(c => c.cardNumber === toCreditCard && c.issuer === creditCardVendor)
        if (index < 0) {
            res.status(404).json({ message: "invalid credit card." })
        }
        const isValidSender = Account.validateAccount(fromAccount);
        if (!isValidSender) {
            res.status(404).json({ message: "sender account does not exists." })
        }
        const newBalance = Account.creditPayment(fromAccount, parseFloat(amount));

        if (newBalance) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 to the month because months are zero-indexed
            const day = String(now.getDate()).padStart(2, '0');
            const currentDate = `${year}-${month}-${day}`;
            let currentCount = Transaction.getCount();
            let newTransaction = new Transaction(++currentCount, username, currentDate,
                `Credit card payment of $${parseFloat(amount)}`, note, -amount, fromAccount,
                newBalance, "WITHDRAWAL");
            newTransaction.createTransaction();
            res.status(200).json({});
        } else
            res.status(400).json({ message: "amount exceeds the balance." })
    },

    getAllTransactionHistory: (req, res, next) => {
        res.status(200).json(Transaction.getAllTransactionHistory());
    },

    getTransactionHistoryByUsername: (req, res, next) => {
        const username = req.query.username;
        const accounts = Transaction.getTransactionsByUsername(username);
        res.status(200).json(accounts);
    },

    filterTransaction: (req, res, next) => {
        const { fromDate, toDate, username } = req.query;
        if (!fromDate || !toDate || !username) {
            res.state(400).json({ message: "please provide all data." })
        }
        else {
            var filteredAccounts = Transaction.filterTransactionByDate(toDate, fromDate, username);
            res.status(200).json(filteredAccounts);
        }
    }
}

module.exports = accountController;