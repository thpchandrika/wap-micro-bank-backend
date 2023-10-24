const Account = require("../model/account")

let accountController = {
    createAccount: function (req, res, next) {
        console.log("account controller");
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

    getAccounts: function (req, res, next) {
        res.status(200).json(Account.getAll());
    }
}

module.exports = accountController;