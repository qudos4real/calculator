

import React from 'react'

function Screen({value}) {
    return (
        <input type="text" className='screen'>
           <p>{value}</p> 
        </input>
    )
}

export default Screen
