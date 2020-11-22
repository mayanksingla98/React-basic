import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick = {() => props.greetmethod('Child')}>Greet Parent</button>
        </div>
    )
}

export default Child

