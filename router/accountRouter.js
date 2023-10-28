const accountController = require("../controller/accountcontroller");
const express = require("express");
const router = express.Router();

router.post("/createaccount", accountController.createAccount);
router.get("/getaccoountsbyusername", accountController.getAccountsByUsername)
router.get("/", accountController.getAllAccounts);
router.post("/transferfunds", accountController.transferFund);
router.post("/creditpayment", accountController.creditPayment);
router.post("/utilitypayment", accountController.utilityPayment);
router.get("/transactionhistory", accountController.getAllTransactionHistory);
router.get("/transactionhistorybyusername", accountController.getTransactionHistoryByUsername);
router.get("/filtertransaction", accountController.filterTransaction);

module.exports = router;