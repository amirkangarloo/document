const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

// Set the thread pool size
// process.env.UV_THREADPOOL_SIZE = ?; 

const start = Date.now();


function doRequest() {
    https.request("https://google.com", (res) => {
        res.on("data", () => { });

        res.on("end", () => {
            const time = Date.now();
            console.log("Https:", time - start);
        })
    }).end()
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start, 'ms');
    })
}

doRequest();

fs.readFile("multi-task.js", "utf8", () => {
    console.log("FS:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();