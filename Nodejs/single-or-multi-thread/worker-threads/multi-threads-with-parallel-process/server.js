import express from "express";
import { Worker } from "worker_threads";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
const THREAD_COUNT = 4;

function createWorker() {
    return new Promise((resolve, reject) => {
        const worker = new Worker(__dirname + '/worker.js', {
            workerData: {
                threadsCount: THREAD_COUNT
            }
        });

        worker.on("message", (data) => {
            resolve(data);
        });
        worker.on("error", (error) => {
            reject(`An error occurred: ${ error }`);
        });
        worker.on("exit", (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${ code }`));
            }
        });
    })
};

app.get("/non-blocking", (req, res) => {
    res.status(200).send("Hello Non-blocking");
});

app.get("/blocking", async (req, res) => {
    const workerPromises = [];
    let total = 0;

    for (let i = 0; i < THREAD_COUNT; i++) {
        workerPromises.push(createWorker());
    }

    const threadsResult = await Promise.all(workerPromises);

    for (let i = 0; i < threadsResult.length; i++) {
        total += threadsResult[i];
    }

    res.status(200).send(`Results ${ total }`);

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});