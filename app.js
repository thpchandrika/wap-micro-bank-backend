const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const loginRouter = require("./router/loginRouter");
const accountRouter = require("./router/accountRouter");
const app = express();
const corsOption = {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
}

app.use(cors(corsOption));
app.use(express.json());

//login middleware
app.use("/users", loginRouter);
//account middleware
app.use("/accounts", accountRouter);

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong: " + err.message
    })
});

app.listen(port, () => console.log(`Server starting on port ${port}`));