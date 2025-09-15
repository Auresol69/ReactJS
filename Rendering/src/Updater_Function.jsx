// updater function = A function passed as an argument to setState() usually
// ex. setYear(arrow function)
// Allow for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions
import React, { useState } from 'react'

function Updater_Function() {

    // Takes the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order.
    
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    function reset() {
        setCount(0);        
    }

    return (<>
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decre</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Incre</button>
        </div>
    </>);
}

export default Updater_Function