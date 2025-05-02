import express from "express";
import { Worker } from "worker_threads";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.get("/non-blocking", (req, res) => {
    res.status(200).send("Hello Non-blocking");
});

app.get("/blocking", async (req, res) => {
    const worker = new Worker(__dirname + '/worker.js');

    worker.on("message", (data) => {
        res.status(200).send(`Result: ${ data }`);
    })

    worker.on("error", (error) => {
        res.status(400).send(`An error occurred: ${ error }`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});