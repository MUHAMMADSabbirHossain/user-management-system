const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello, User Management Server is running.");
})

app.listen(port, () => {
    console.log(`User Management Server is running on PORT: ${port}`);
});
