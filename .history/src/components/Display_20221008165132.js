
import React from 'react'
import './Display.css'

export const Display = ({value}) => {
    return (
        <div className='screen'>
            <h2>screen</h2>
            {value}
        </div>
    )
}

