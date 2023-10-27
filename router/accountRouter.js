const accountController = require("../controller/accountcontroller");
const express = require("express");
const router = express.Router();

router.post("/createaccount", accountController.createAccount);
router.get("/getaccoountsbyusername", accountController.getAccountsByUsername)
router.get("/", accountController.getAllAccounts);
router.post("/transferfunds", accountController.transferFund);


module.exports = router;