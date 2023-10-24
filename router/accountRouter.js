const accountController = require("../controller/accountcontroller");
const express = require("express");
const router = express.Router();

router.post("/createAccount", accountController.createAccount);
router.get("/", accountController.getAccounts);

module.exports = router;