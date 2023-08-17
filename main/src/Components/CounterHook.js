import React, {useState} from 'react';

function CounterHook(){
    const [count, setCount] = useState(0);

    return(
    <div>
        <h1> {count} </h1> 
        <h2 onClick={() => setCount(count + 1)}> Add</h2>
        <h3 onClick={() => setCount(count - 1)}> Minus</h3>
    </div>
    );
}

export default CounterHook;