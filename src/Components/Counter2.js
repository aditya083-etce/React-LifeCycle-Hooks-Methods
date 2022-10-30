import React, { useEffect, useState } from 'react'

function Count(props) {
    useEffect(() => {
        console.log('Component Mounted');

        return () => {
            console.log('Component Unmounted');
        }
    },[])
    
    useEffect(() => {
        console.log('Component Updated');
        document.title = `Counter: ${props.number}`;
    },[ props.number ])

    return (
        <div><h1>Counter: {props.number}</h1></div>
    )
}

 
export default function Counter2() {
    const [count, setCount] = useState(0)
    const [showComponent, setShowComponent] = useState(true)

    return (
        <div>
            <h2>Functional based Component LifeCycle</h2>
            <div>
                <button class='methodbtn' onClick={() => setShowComponent(!showComponent)}>Show/Hide Counter</button>
                <button class='methodbtn' onClick={() => setCount(Number.parseInt(Math.random() * 100))}>Set Counter</button>
            </div>
            {showComponent ? <Count number={count}/> : null }
            <button onClick={() => setCount(count + 1)}>⬆️</button>
            <button onClick={() => setCount(count - 1)}>⬇️</button>
        </div>
    )
}
