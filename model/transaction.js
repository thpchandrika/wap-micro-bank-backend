const data = require("../data/data");

class Transaction {
    constructor(id, username, date, description, amount, transactionAccount) {
        this.id = id;
        this.username = username;
        this.date = date;
        this.description = description;
        this.transactionAccount = transactionAccount;
    }

    createTransaction() {
        data.transactions.push(this);
    }
}

module.exports = Transaction;