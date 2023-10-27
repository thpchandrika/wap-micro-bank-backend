const Account = require("../model/account");
const Transaction = require("../model/transaction");

let accountController = {
    createAccount: (req, res, next) => {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const { accountHolderName, accountType, initialDeposit, dob, emailAddress,
            phoneNumber, ssn, state, city, zip, username } = req.body;

        if (accountHolderName && accountType && initialDeposit && dob && emailAddress
            && phoneNumber && ssn && state && city && zip && username) {
            const newAccount = new Account(username, accountHolderName, accountType, initialDeposit, dob, emailAddress,
                phoneNumber, ssn, state, city, zip, username);
            const account = newAccount.createAccount();
            if (account) {
                res.status(201).json({ message: newAccount })
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

        const { fromAccount, toAccount, amount, username } = req.body;

        if (!fromAccount || !toAccount || !amount) {
            res.status(400).json({ message: "provide all data." })
        }
        const isValidSender = Account.validateAccount(fromAccount);
        if (!isValidSender) {
            res.status(404).json({ message: "sender account does not exists." })
        }
        const isValidReceiver = Account.validateAccount(toAccount);
        if (!isValidReceiver) {
            res.status(404).json({ message: "receiver account does not exists." })
        }
        const isSuccess = Account.transferFund(fromAccount, toAccount, parseFloat(amount));

        if (isSuccess) {
            let newTransaction = new Transaction(Math.random(1, 100), username, new Date().toLocaleString(),
                `$${parseFloat(amount)} transferred to ${toAccount}`, fromAccount);
            newTransaction.createTransaction();
            res.status(200).json({});
        } else
            res.status(400).json({ message: "amount exceeds the balance." })

    }



}

module.exports = accountController;