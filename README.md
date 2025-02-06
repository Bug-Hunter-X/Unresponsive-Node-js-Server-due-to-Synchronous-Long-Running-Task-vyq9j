# Unresponsive Node.js Server

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler can make the server unresponsive. The example uses a simple `while` loop to simulate a lengthy process.

## Bug Description

The provided `bug.js` file contains a Node.js HTTP server.  The `createServer` function includes a computationally intensive loop that blocks the event loop. This prevents the server from responding to other requests until the loop completes, leading to unresponsiveness.

## Solution

The solution, provided in `bugSolution.js`, addresses this by using asynchronous operations or splitting the task into smaller chunks using `setImmediate` or `process.nextTick` to release control back to the event loop.