const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
    { id: 1, name: "one", banglish: "uwan" },
    { id: 2, name: "two", banglish: "tu" },
    { id: 3, name: "three", banglish: "there" }
]

app.get("/", (req, res) => {
    res.send("Hello, User Management System BackEnd is running.");
})

app.get("/users", (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`User Management System BackEnd is running on PORT: ${port}`);
});
