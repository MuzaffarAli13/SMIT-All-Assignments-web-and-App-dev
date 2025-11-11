 import React, { useState } from 'react'
function Counter() {
    let [counter, setCounter] = useState(0)
    let handleIncreament = () => {
        setCounter((prev) => prev + 1)
    }

    let handleDecrement = () => {
        if (counter > 0) {
            setCounter((prev) => prev - 1)
        }
    }
    return (
        <div className='counterbox'>
            <p>{counter}</p>
            <div>
                <button className='btn' onClick={handleDecrement}
                >Decrement</button>
                <button className='btn' onClick={handleIncreament}
                >Increment</button>
            </div>
        </div>
    )
}

export default Counter