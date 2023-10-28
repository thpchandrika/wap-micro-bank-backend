const data = require("../data/data");

class Transaction {
    constructor(id, username, date, description, note, amount, transactionAccount, newbalance, transactionType) {
        console.log(id);
        this.id = id;
        this.username = username;
        this.date = date;
        this.description = description;
        this.note = note;
        this.amount = amount;
        this.transactionAccount = transactionAccount;
        this.balance = newbalance;
        this.transactionType = transactionType;
    }

    createTransaction() {
        data.transactions.push(this);
    }

    static getAllTransactionHistory() {
        return data.transactions;
    }

    static getTransactionsByUsername(username) {
        return data.transactions.filter(t => t.username === username);
    }

    static filterTransactionByDate(toDateString, fromDateString, username) {
        const fromDate = new Date(fromDateString);
        const toDate = new Date(toDateString);
        const result = data.transactions.filter(t => {
            const transactionDate = new Date(t.date);
            return transactionDate >= fromDate && transactionDate <= toDate && t.username === username;
        });
        return result;
    }

    static getCount() {
        return data.transactions.length;
    }
}

module.exports = Transaction;