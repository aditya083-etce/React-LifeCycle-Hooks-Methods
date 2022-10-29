import React, { useEffect } from 'react'

export default function Counter2({ num }) {

    useEffect(() => {
        console.log("Functional Component mounted and value updated");

        // return () => {
        //     console.log("Component removed...");
        // }
        
    },[num])

    return (
        <div>
            <h2>Functional Component LifeCycle</h2>
            <h1>{ num }</h1>
        </div>
    )
}
