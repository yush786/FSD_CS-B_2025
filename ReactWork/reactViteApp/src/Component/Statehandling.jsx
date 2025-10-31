import React, { use } from 'react'
import { useState } from 'react'

function Statehandling() {
    const [count, setcount] = useState(20);
    
    const incrementCount = () => {
        setcount(count + 2);
    }
  return (
    <div>
          <h2>counter value={count}</h2>
          <button onClick={incrementCount}>Increment Counter</button>
          <button onClick={() => setcount(count - 2)}>Decrement Counter</button>
    </div>
  )
}

export default Statehandling
