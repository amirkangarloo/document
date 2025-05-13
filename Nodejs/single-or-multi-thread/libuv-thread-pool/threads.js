const crypto = require('crypto');

const time = Date.now();

// Run concurrently 1 to 4, and then run 5

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('1) ', Date.now() - time, 'ms');
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('2) ', Date.now() - time, 'ms');
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('3) ', Date.now() - time, 'ms');
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('4) ', Date.now() - time, 'ms');
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('5) ', Date.now() - time, 'ms');
})