# ✅ Is Node.js Single-threaded or Multi-threaded?

Node.js often causes confusion around the concept of single-threaded vs. multi-threaded. Let’s clarify the full picture.

**Short answer: Both — depending on what you're talking about.**


------------


## 📌 1. Event Loop – Single-threaded

- The **JavaScript execution** part of Node.js (the event loop) runs on a single thread.

- That means Node.js **executes your JavaScript code** on **one main thread**. So it's **non-blocking, asynchronous** thanks to the event loop and callbacks.

✅ TRUE: “Node.js is single-threaded” — this is true **for the event loop and JS code execution**.

## 📌 2. libuv and Thread Pool – Multi-threaded

- Under the hood, Node.js uses **libuv**, a C library that provides a **thread pool** (default is **4 threads**) to handle **expensive operations** like:
- File system access (e.g., `fs.readFile`)
- DNS lookup
- Compression
- Crypto (e.g., `crypto.pbkdf2`)

✅ TRUE: “Node.js uses 4 threads” — this refers to the **libuv thread pool**, not JavaScript threads.

**</> [code](https://github.com/amirkangarloo/document/tree/main/Nodejs/single-or-multi-thread/libuv-thread-pool "code")**

You can configure this number using:
```Bash
UV_THREADPOOL_SIZE=8 node app.js
```

## 📌 3. Worker Threads – Multi-threaded JavaScript

- Node.js v10.5+ introduced the `worker_threads` module.
- This allows you to run **JavaScript in multiple threads**, with real parallelism.

✅ TRUE: “Node.js supports worker threads” — but you have to explicitly use them.

**</> [code](https://github.com/amirkangarloo/document/tree/main/Nodejs/single-or-multi-thread/worker-threads "code")**

## 📌 4. Clustering & PM2 – Multi-process scaling

- You can **scale your Node.js app** using **clusters** (via `cluster` module) or process managers like **PM2**
- This doesn't create threads, but **spawns multiple processes** (usually equal to the number of CPU cores), each with its own event loop.

✅ TRUE: “Node.js can use clustering or PM2” — this is about **horizontal scaling with processes**, not threads.

**</> [code](https://github.com/amirkangarloo/document/tree/main/Nodejs/single-or-multi-thread/clustering-and-pm2 "code")**

## 🟢 Conclusion

Node.js **runs JavaScript in a single thread**, but uses a **multi-threaded architecture under the hood** (libuv) for I/O. You can use **worker threads** for parallel JS execution and **clusters/PM2** for process-based scaling.
