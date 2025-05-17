// Start program -> node myFile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingLongRunningOperation = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();


function shouldContinue() {
    // Check one: Any pending setTimeout(), setInterval(), or setImmediate()?
    // Check two: Any pending OS tasks? (Like server listening to port)
    // Check two: Any pending long time (I/O) operations? (Like fs module)

    return pendingTimers.length || pendingOsTasks.length || pendingLongRunningOperation.length;
}


// Entire body executes in  one 'tick' of the event loop
while (shouldContinue()) {
    /*
    
    1. Node looks at pendingTimers and sees if any functions are ready to be called. (Just setTimeout() and setInterval())

    2. Node looks at pendingOSTasks and pendingLongRunningOperation and calls relevant callbacks.

    3. Pause execution. Continue when...
        - A new pendingOSTask is done.
        - A new pendingLongRunningOperation is done.
        - A timer is about to complete.

    4. Node looks at pendingTimers and sees if any functions are ready to be called. (Just setImmediate())

    5. Handle any 'close ' events. (Like socket.on('close', () => {}))

    */
}


// Exit back to terminal