import React from 'react'

function ListChild({person}) {

    return (
        <ul>
            <li>Name: {person.name} Class: {person.class}</li>
        </ul>
    )
}

export default ListChild
