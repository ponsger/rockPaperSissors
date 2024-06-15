import React from 'react'

export default function Button({ value, clicked }) {

    return (
        <button onClick={() => clicked(value)}> {value}</button>
    )
}
