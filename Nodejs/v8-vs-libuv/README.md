# 🔧 V8 VS libuv (Part of Node.js)


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
