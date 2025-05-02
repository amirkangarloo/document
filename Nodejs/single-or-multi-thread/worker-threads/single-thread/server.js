import express from "express";

const app = express();
const PORT = 3000;

app.get("/non-blocking", (req, res) => {
    res.status(200).send("Hello Non-blocking");
});

app.get("/blocking", async (req, res) => {
    let counter = 0;
    for (let i = 0; i < 20_000_000_000; i++) {
        counter++;
    }
    res.status(200).send(`Result: ${ counter }`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});