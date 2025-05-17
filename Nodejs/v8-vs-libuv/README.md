# 🔧 V8 VS libuv (Part of Node.js)

![](https://github.com/amirkangarloo/document/blob/main/Nodejs/v8-vs-libuv/img/01.jpg?raw=true)

---

## 🧠 What Is V8?

- Developed by **Google**, used in **Chrome**
- A high-performance JavaScript engine
- Executes JavaScript: parsing, compiling, optimizing
- Handles JS language features (e.g. closures, promises, classes)

> ❌ V8 has **no access to file system, networking, or timers**.

---

## ⚙️ What Is libuv?

- A C-based library that Node.js uses
- Provides:
  - **Event Loop**
  - **Thread Pool**
  - **Asynchronous I/O**
  - **TCP/UDP/DNS**, **Timers**
- Abstracts OS-level features to provide cross-platform async APIs

> ✅ Enables Node.js to be **non-blocking** and handle **concurrent I/O**

---

## 🔄 Architecture Overview

```text
+------------------+
|   Your JS Code   |
+--------+---------+
         |
         v
+--------+---------+
|       V8 Engine   |  <--- Executes JS code
+--------+---------+
         |
         v
+--------+---------+
|       Node.js     |  <--- Adds I/O APIs (fs, net, etc.)
| Uses libuv        |
+--------+---------+
         |
         v
+--------+---------+
|      libuv        |  <--- Event loop + thread pool + async I/O
+------------------+
```
### Node has 2 sides:

1. **JS code** -> In lib directory in Nodejs project

2. **C++ code** -> In src directory in Nodejs project

> This image tell us how relay Nodejs work under the hood

- Your JS code use basic js function has in lib directtory
- In lib directory use processs.binding (now use internalBinding) function and convert you js code to c++ code by useing V8 functions
- Now use C++ functions implemented in src directory
- Finally Nodejs use libuv to access OS for run concurrent tasks

![](https://github.com/amirkangarloo/document/blob/main/Nodejs/v8-vs-libuv/img/02.png)

---

## ✅ Summary

| Component   | Purpose                           | Part Of                      |
| ----------- | --------------------------------- | ---------------------------- |
| **V8**      | Executes JavaScript               | Chrome / Node.js             |
| **Node.js** | Runtime environment for JS + APIs | Custom (built on V8 + libuv) |
| **libuv**   | Handles async I/O + thread pool   | Node.js                      |


- **V8** runs JavaScript code.

- **Node.js** adds real-world features using **libuv**.

- **libuv** is what makes Node.js asynchronous and powerful.


> "libuv is the async engine. V8 is the JS engine. Node.js is the bridge."
