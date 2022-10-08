
import React from 'react'

const Wrapper = ({Children}) => {
    return (
        <div className='wrapper'>
            <h1>Hello world</h1>
            {Children}
        </div>
    )
}
export default Wrapper
