import React from 'react'
import './Screen.js'
import { useState } from 'react'

 

function Screen() {
    const [val, setVal] = useState(0)
    return (
        <>
            <input type="text" className='screen' value={val}/>
        </>
    )
}

export default Screen
