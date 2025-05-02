import express from 'express';

const PORT = 3000;
const app = express();


app.get('/heavy', (req, res) => {
    let count = 0;
    for (let i = 0; i < 50_000_000; i++) {
        count++;
    }

    res.status(200).send(`Response from heavy computation: ${ count }`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
    console.log(`worker pid: ${ process.pid }`);
});