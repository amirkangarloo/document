const https = require('https');

const howManyTimeCall = 10
const start = Date.now();

console.log("howManyTimeCall = ", howManyTimeCall)

function doRequest() {
    https.request("https://google.com", (res) => {
        res.on("data", () => { });

        res.on("end", () => {
            const time = Date.now();
            console.log(time - start);
        })
    }).end()
}

for (let index = 0; index < howManyTimeCall; index++) {
    doRequest()
}